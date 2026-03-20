<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Project Mudbrick</title>
  <link rel="stylesheet" href="index.css" />
</head>
<body>
<div class="page">
  <header class="header">
    <div class="header-logo">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
      <span>Project Mudbrick</span>
    </div>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
    <nav class="header-nav">
      <a href="#intro-section" class="nav-link">The Project</a>
      <a href="#chronology-section" class="nav-link">Chronology</a>
      <a href="#map-section" class="nav-link">Map</a>
      <a href="#analysis-section" class="nav-link">Analysis</a>
      <a href="#dataset-section" class="nav-link">Dataset</a>
      <a href="#about-section" class="nav-link">About</a>
    </nav>
  </header>

  <section class="text-section" id="intro-section">
    <div class="section-inner" style="max-width:520px">
      <div class="section-badge">The Project</div>
      <h2 class="section-title"><span class="hero-accent">The Mudbrick Project</span></h2>
      <p class="section-body">The Mudbrick Project is a digital archaeology initiative developed by students from the University of Amsterdam that assesses the impact of modern human disturbances on the preservation of tombs and graves across Cyprus. Using Geographic Information Systems (GIS) and spatial proximity analysis, the project integrates archaeological site data with land cover information to evaluate how factors such as urbanization, agricultural activity, and infrastructure development influence site vulnerability.</p>
      <h3 class="section-subtitle">Aims</h3>
      <ul class="section-list">
        <li>Identify which sites are most at risk, determine the types of disturbances that pose the greatest threats, and analyse spatial patterns of risk across the study area.</li>
        <li>The project seeks to explore how differences in land use and heritage management may affect site preservation, contributing to a broader understanding of risk assessment and supporting more informed strategies for cultural heritage protection.</li>
      </ul>
      <a href="#map-section" class="hero-cta" style="margin-top:32px">
        Explore the Map
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>
    </div>
    <div class="hero-visual">
      <div class="hero-map-preview">
        <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="cyprus-outline">
          <path d="M60,110 Q70,95 85,90 Q100,85 115,88 Q130,91 140,85 Q155,78 165,80 Q175,82 185,78
                   Q200,72 215,75 Q230,78 238,85 Q245,92 242,100 Q239,108 230,112 Q220,116 210,114
                   Q200,112 192,118 Q182,126 170,128 Q158,130 148,125 Q138,120 128,122
                   Q115,125 105,120 Q92,114 80,116 Q68,118 62,112 Z"
                fill="rgba(37,99,235,0.07)" stroke="rgba(37,99,235,0.35)" stroke-width="1.5"/>
          <path d="M238,85 Q248,78 258,72 Q265,68 270,70 Q272,74 268,78 Q260,84 250,88 Q244,91 242,100"
                fill="none" stroke="rgba(37,99,235,0.35)" stroke-width="1.5"/>
          <g class="map-pins">
            <circle cx="148" cy="98" r="5" fill="#2563eb" opacity="0.9"/>
            <circle cx="148" cy="98" r="9" fill="#2563eb" opacity="0.15"/>
            <circle cx="185" cy="108" r="4" fill="#0891b2" opacity="0.9"/>
            <circle cx="185" cy="108" r="8" fill="#0891b2" opacity="0.15"/>
            <circle cx="115" cy="105" r="4" fill="#e8a45a" opacity="0.9"/>
            <circle cx="115" cy="105" r="8" fill="#e8a45a" opacity="0.15"/>
            <circle cx="95" cy="112" r="4" fill="#059669" opacity="0.9"/>
            <circle cx="95" cy="112" r="8" fill="#059669" opacity="0.15"/>
            <circle cx="165" cy="95" r="4" fill="#7c3aed" opacity="0.9"/>
            <circle cx="165" cy="95" r="8" fill="#7c3aed" opacity="0.15"/>
            <circle cx="130" cy="112" r="4" fill="#7c6af7" opacity="0.9"/>
            <circle cx="130" cy="112" r="8" fill="#7c6af7" opacity="0.15"/>
          </g>
        </svg>
      </div>
    </div>
  </section>

  <section class="text-section text-section-alt" id="chronology-section">
    <div class="section-inner chron-inner">
      <div class="chron-header">
        <div class="section-badge">Chronology</div>
        <h2 class="section-title">Chronology</h2>
        <p class="section-lead">The periods considered in this project are:</p>
      </div>
      <div class="period-cards">
        <div class="period-card period-card-h">
          <div class="period-card-num">I</div>
          <div class="period-name">Hellenistic</div>
          <div class="period-dates">310–30 BCE</div>
          <p>During the Hellenistic period, Cyprus came under the influence of the successors of Alexander the Great, leading to increased urbanization, the spread of Greek culture, and the development of new settlements and burial practices. This period is characterized by the expansion of cities and the establishment of organized necropoleis.</p>
        </div>
        <div class="period-card period-card-r">
          <div class="period-card-num">II</div>
          <div class="period-name">Roman</div>
          <div class="period-dates">30 BCE–4th century CE</div>
          <p>Following this, Cyprus became part of the Roman Empire, bringing further changes in administration, infrastructure, and daily life. The Roman period is associated with the development of road networks, economic integration into the wider empire, and continued use and adaptation of existing burial sites. In many cases, earlier tombs were reused or modified during this time, which contributes to the complexity of dating archaeological sites.</p>
        </div>
      </div>
    </div>
  </section>

  <main class="maps-section" id="map-section">
    <aside class="sidebar">
      <div class="sidebar-header" id="sidebar-toggle">
        <div class="sidebar-header-row">
          <div>
            <h2>Map Filters</h2>
            <p>Toggle markers on the map</p>
          </div>
          <svg class="sidebar-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      <div class="sidebar-body">
      <div class="layer-group">
        <div class="layer-group-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          </svg>
          Overlays
        </div>
        <label class="layer-item overlay-item">
          <span class="overlay-label">100m Boundary</span>
          <span class="toggle-switch">
            <input type="checkbox" id="kml-100m-toggle" />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </span>
        </label>
        <label class="layer-item overlay-item">
          <span class="overlay-label">250m Boundary</span>
          <span class="toggle-switch">
            <input type="checkbox" id="kml-250m-toggle" />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </span>
        </label>
        <label class="layer-item overlay-item">
          <span class="overlay-label">500m Boundary</span>
          <span class="toggle-switch">
            <input type="checkbox" id="kml-500m-toggle" />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
          </span>
        </label>
      </div>

      <div class="layer-group">
        <div class="layer-group-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/>
          </svg>
          Tombs / Necropoleis
          <span class="tomb-count" id="tomb-count"></span>
        </div>
        <label class="layer-item">
          <input type="checkbox" class="tomb-type-cb" value="N" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="marker-dot" style="background:#e8a45a"></span>
          N — Necropoleis
        </label>
        <label class="layer-item">
          <input type="checkbox" class="tomb-type-cb" value="T" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="marker-dot" style="background:#7c6af7"></span>
          T — Tombs
        </label>
      </div>

      <div class="layer-group">
        <div class="layer-group-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          Chronology
        </div>
        <label class="layer-item">
          <input type="checkbox" class="tomb-chron-cb" value="R" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="chron-badge chron-r">R</span>
          Roman
        </label>
        <label class="layer-item">
          <input type="checkbox" class="tomb-chron-cb" value="H-R" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="chron-badge chron-hr">H-R</span>
          Hellenistic–Roman
        </label>
        <label class="layer-item">
          <input type="checkbox" class="tomb-chron-cb" value="H" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="chron-badge chron-h">H</span>
          Hellenistic
        </label>
      </div>

      <div class="layer-group">
        <div class="layer-group-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Risk Classification
        </div>
        <label class="layer-item">
          <input type="checkbox" class="tomb-risk-cb" value="CE" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="risk-badge risk-ce">CE</span>
          Critically endangered
        </label>
        <label class="layer-item">
          <input type="checkbox" class="tomb-risk-cb" value="E" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="risk-badge risk-e">E</span>
          Endangered
        </label>
        <label class="layer-item">
          <input type="checkbox" class="tomb-risk-cb" value="V" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="risk-badge risk-v">V</span>
          Vulnerable
        </label>
        <label class="layer-item">
          <input type="checkbox" class="tomb-risk-cb" value="MR" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="risk-badge risk-mr">MR</span>
          Moderately at risk
        </label>
        <label class="layer-item">
          <input type="checkbox" class="tomb-risk-cb" value="LR" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="risk-badge risk-lr">LR</span>
          Low risk
        </label>
        <label class="layer-item">
          <input type="checkbox" class="tomb-risk-cb" value="NR" />
          <span class="checkbox-custom">
            <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg>
          </span>
          <span class="risk-badge risk-nr">NR</span>
          No / very low risk
        </label>
      </div>

      <div class="layer-group">
        <div class="layer-group-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
          Town / Village
        </div>
        <div id="tomb-town-list" class="town-list"></div>
      </div>
      </div><!-- /.sidebar-body -->
    </aside>

    <div class="map-container">
      <div id="map"></div>
    </div>
  </main>

  <section class="text-section" id="analysis-section">
    <div class="section-inner">
      <div class="section-badge">Analysis</div>
      <h2 class="section-title">Analysis and Results</h2>
      <p class="section-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum urna eget ultrices vestibulum. Cras blandit lacus justo, malesuada efficitur mi aliquam a. Cras vel mi et tellus ullamcorper aliquet.</p>
    </div>
  </section>

  <section class="text-section text-section-alt" id="dataset-section">
    <div class="section-inner">
      <div class="section-badge">Dataset</div>
      <h2 class="section-title">Dataset</h2>
      <p class="section-body">The Mudbrick Project aligns with the principles of open science. As part of this approach, the complete dataset used in this study, including all associated metadata, is fully available to the public through the link provided below.</p>
      <a href="https://github.com/joaomessiah/project_mudbrick" class="dataset-link" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        github.com/joaomessiah/project_mudbrick
      </a>
      <div class="section-acknowledgements">
        <p>We would like to express our sincere gratitude to our professors, Dries Daems and Philip Verhagen, for their guidance and support throughout this course. Their insights and feedback were essential in shaping the development of this project.</p>
        <p>We also extend our special thanks to Vasiliki Lysandrou, Demetrios Michaelides, and Athos Agapiou for providing the indispensable dataset on tombs and necropoleis of Cyprus, which constituted a fundamental component of this research.</p>
        <div class="citation">Lysandrou V, Michaelides D, Agapiou A 2024 Tombs and Necropoleis of Cyprus: A Corpus of the Hellenistic and Roman Burial Grounds. Journal of Open Archaeology Data, 12: 16, pp. 1–6. DOI: <a href="https://doi.org/10.5334/joad.130" target="_blank" rel="noopener">https://doi.org/10.5334/joad.130</a></div>
      </div>
    </div>
  </section>

  <section class="text-section" id="about-section">
    <div class="section-inner">
      <div class="section-badge">Team</div>
      <h2 class="section-title">About Us</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="photos/heidi.png" alt="Heidi Barten" class="team-avatar" />
          <div class="team-name">Heidi Barten</div>
          <div class="team-role">Project manager</div>
        </div>
        <div class="team-member">
          <img src="photos/joao.png" alt="João Silva" class="team-avatar" />
          <div class="team-name">João Silva</div>
          <div class="team-role">Data manager</div>
        </div>
        <div class="team-member">
          <img src="photos/avatar.svg" alt="Marcia Pound" class="team-avatar" />
          <div class="team-name">Marcia Pound</div>
          <div class="team-role">Technical analysis</div>
        </div>
        <div class="team-member">
          <img src="photos/tobias.png" alt="Tobias Verwoert" class="team-avatar" />
          <div class="team-name">Tobias Verwoert</div>
          <div class="team-role">Technical specialist</div>
        </div>
      </div>
    </div>
  </section>

</div>

  <script src="index.js"></script>
  <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8vWW15qD5IE5orVmrUX3crOLpqQNuM2M&callback=initMap&loading=async"
    async defer>
  </script>
</body>
</html>
