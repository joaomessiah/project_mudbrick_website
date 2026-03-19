let TOMB_DATA = [];

// Colour coding: type-based
const TOMB_COLORS = { N: '#e8a45a', T: '#7c6af7' };

// ── Map Init ─────────────────────────────────────────────────────────────────

let map;

async function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 35.0, lng: 33.15 },
    zoom: 9,
    mapTypeId: 'roadmap',
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  });

  // Load tomb data then initialise filters
  TOMB_DATA = await loadTombData();
  initTombFilters();
  updateTombCount(0);

  // KML boundary toggles
  const kmlLayers = [
    { id: 'kml-100m-toggle', file: '100m_boundary_KML.kml', color: '#e63946' },
    { id: 'kml-250m-toggle', file: '250m_boundary_KML.kml', color: '#f4a261' },
    { id: 'kml-500m-toggle', file: '500m_boundary_KML.kml', color: '#2a9d8f' },
  ];
  kmlLayers.forEach(layer => {
    const toggle = document.getElementById(layer.id);
    if (!toggle) return;
    toggle.addEventListener('change', async () => {
      if (toggle.checked) await showKmlLayer(layer);
      else hideKmlLayer(layer);
    });
  });
}

// ── KML boundary overlays ─────────────────────────────────────────────────────

async function showKmlLayer(layer) {
  if (layer.polygons) {
    layer.polygons.forEach(p => p.setMap(map));
    return;
  }
  try {
    const text = await fetch(layer.file).then(r => r.text());
    const kml = new DOMParser().parseFromString(text, 'text/xml');
    const polys = [];
    kml.querySelectorAll('Placemark').forEach(pm => {
      pm.querySelectorAll('coordinates').forEach(coordEl => {
        const coords = coordEl.textContent.trim().split(/\s+/).map(c => {
          const [lng, lat] = c.split(',').map(Number);
          return { lat, lng };
        }).filter(c => !isNaN(c.lat) && !isNaN(c.lng));
        if (coords.length > 2) {
          polys.push(new google.maps.Polygon({
            paths: coords,
            strokeColor: layer.color,
            strokeOpacity: 0.8,
            strokeWeight: 1.5,
            fillColor: layer.color,
            fillOpacity: 0,
            map,
          }));
        }
      });
    });
    layer.polygons = polys;
  } catch (err) {
    console.error(`Failed to load ${layer.file}:`, err);
  }
}

function hideKmlLayer(layer) {
  if (layer.polygons) layer.polygons.forEach(p => p.setMap(null));
}



// ── CSV loader ───────────────────────────────────────────────────────────────

function parseCSVLine(line) {
  const fields = [];
  let cur = '', inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQuote = !inQuote; continue; }
    if (ch === ',' && !inQuote) { fields.push(cur); cur = ''; continue; }
    cur += ch;
  }
  fields.push(cur);
  return fields;
}

function normaliseChron(raw) {
  const v = raw.trim();
  if (v === 'Η' || v === 'H (?)') return 'H'; // Greek eta / uncertain → H
  return v;
}

function normaliseType(raw) {
  const v = raw.trim();
  if (v === 'Ν') return 'N';           // Greek nu → N
  if (v === 'Τ' || v === 'Ts') return 'T'; // Greek tau / Ts → T
  return v;
}

async function loadTombData() {
  const text = await fetch('tombs_necropoleis.csv').then(r => r.text());
  const [headerLine, ...rows] = text.trim().split(/\r?\n/);
  const headers = parseCSVLine(headerLine);
  const idx = name => headers.indexOf(name);

  return rows.map(row => {
    const f = parseCSVLine(row);
    return {
      id:    f[idx('serial_no')],
      lat:   parseFloat(f[idx('y')]),
      lng:   parseFloat(f[idx('x')]),
      town:  f[idx('town_village')],
      name:  f[idx('ToponymEN')] || f[idx('Other')] || '',
      type:  normaliseType(f[idx('nechropoleis_tombs')]),
      chron: normaliseChron(f[idx('chronology')]),
      reg:   f[idx('RegNo')],
      info:  f[idx('Chronology_specifics')],
    };
  }).filter(d => !isNaN(d.lat) && !isNaN(d.lng));
}

// ── Tomb filter system ────────────────────────────────────────────────────────

// Shared info window for all tomb markers
let tombInfoWindow;
// Pre-created marker objects, one per TOMB_DATA entry
let tombMarkerObjects = null;

// Current filter state
const tombFilters = {
  type:  new Set(),   // 'N', 'T'
  chron: new Set(),   // 'R', 'H-R', 'H'
  town:  new Set(),   // set of selected towns (empty = all)
};

function initTombFilters() {
  tombInfoWindow = new google.maps.InfoWindow();

  // Type checkboxes
  document.querySelectorAll('.tomb-type-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) tombFilters.type.add(cb.value);
      else tombFilters.type.delete(cb.value);
      applyTombFilters();
    });
  });

  // Chronology checkboxes
  document.querySelectorAll('.tomb-chron-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) tombFilters.chron.add(cb.value);
      else tombFilters.chron.delete(cb.value);
      applyTombFilters();
    });
  });

  // Town / Village checkboxes — populated from data
  const townList = document.getElementById('tomb-town-list');
  if (townList) {
    const towns = [...new Set(TOMB_DATA.map(d => d.town).filter(Boolean))].sort();

    // ── "All" toggle ──
    const allLabel = document.createElement('label');
    allLabel.className = 'layer-item town-all';
    allLabel.innerHTML = `
      <input type="checkbox" id="tomb-town-all" />
      <span class="checkbox-custom">
        <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
      </span>
      All
    `;
    const allCb = allLabel.querySelector('input');
    townList.appendChild(allLabel);

    // ── Individual town checkboxes ──
    const townCbs = [];
    towns.forEach(town => {
      const label = document.createElement('label');
      label.className = 'layer-item';
      label.innerHTML = `
        <input type="checkbox" class="tomb-town-cb" value="${town.replace(/"/g, '&quot;')}" />
        <span class="checkbox-custom">
          <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
        </span>
        ${town}
      `;
      const cb = label.querySelector('input');
      cb.addEventListener('change', e => {
        if (e.target.checked) tombFilters.town.add(town);
        else tombFilters.town.delete(town);
        // Sync "All" state
        const checkedCount = townCbs.filter(c => c.checked).length;
        allCb.checked = checkedCount === towns.length;
        allCb.indeterminate = checkedCount > 0 && checkedCount < towns.length;
        applyTombFilters();
      });
      townCbs.push(cb);
      townList.appendChild(label);
    });

    allCb.addEventListener('change', () => {
      townCbs.forEach(cb => {
        cb.checked = allCb.checked;
        if (allCb.checked) tombFilters.town.add(cb.value);
        else tombFilters.town.delete(cb.value);
      });
      allCb.indeterminate = false;
      applyTombFilters();
    });
  }
}

function ensureTombMarkersCreated() {
  if (tombMarkerObjects !== null) return;

  tombMarkerObjects = TOMB_DATA.map(d => {
    const color = TOMB_COLORS[d.type] || '#aaa';
    const marker = new google.maps.Marker({
      position: { lat: d.lat, lng: d.lng },
      map,
      title: d.name,
      icon: tombDotIcon(color),
      visible: false,
    });

    marker.addListener('click', () => {
      const typeLabel = d.type === 'N' ? 'Necropolis' : 'Tomb';
      const chronLabel = { R: 'Roman', 'H-R': 'Hellenistic–Roman', H: 'Hellenistic' }[d.chron] || d.chron;
      tombInfoWindow.setContent(`
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;padding:4px 2px;max-width:240px">
          <div style="font-weight:600;font-size:14px;margin-bottom:6px;color:#111">${d.name}</div>
          <table style="font-size:12px;color:#444;border-collapse:collapse">
            <tr><td style="color:#888;padding-right:8px;padding-bottom:3px">Type</td><td>${typeLabel}</td></tr>
            <tr><td style="color:#888;padding-right:8px;padding-bottom:3px">Period</td><td>${chronLabel}${d.info ? ' — ' + d.info : ''}</td></tr>
            <tr><td style="color:#888;padding-right:8px;padding-bottom:3px">Town</td><td>${d.town}</td></tr>
            ${d.reg ? `<tr><td style="color:#888;padding-right:8px">Reg. No.</td><td>${d.reg}</td></tr>` : ''}
          </table>
        </div>
      `);
      tombInfoWindow.open(map, marker);
    });

    return marker;
  });
}

function applyTombFilters() {
  // Only create markers once at least one filter is active
  const anyActive =
    tombFilters.type.size > 0 ||
    tombFilters.chron.size > 0 ||
    tombFilters.town.size  > 0;

  if (!anyActive) {
    // Hide all if nothing is selected
    if (tombMarkerObjects) {
      tombMarkerObjects.forEach(m => m.setVisible(false));
    }
    updateTombCount(0);
    return;
  }

  ensureTombMarkersCreated();

  let visible = 0;
  TOMB_DATA.forEach((d, i) => {
    const passType  = tombFilters.type.size  === 0 || tombFilters.type.has(d.type);
    const passChron = tombFilters.chron.size === 0 || tombFilters.chron.has(d.chron);
    const passTown  = tombFilters.town.size === 0 || tombFilters.town.has(d.town);
    const show = passType && passChron && passTown;
    tombMarkerObjects[i].setVisible(show);
    if (show) visible++;
  });

  updateTombCount(visible);
}

function updateTombCount(n) {
  const el = document.getElementById('tomb-count');
  if (el) el.textContent = `${n} shown`;
}

function tombDotIcon(color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <circle cx="7" cy="7" r="5.5" fill="${color}" stroke="rgba(0,0,0,0.35)" stroke-width="1.2"/>
  </svg>`.trim();
  return {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    scaledSize: new google.maps.Size(14, 14),
    anchor: new google.maps.Point(7, 7),
  };
}

// ── Dark map style ────────────────────────────────────────────────────────────

