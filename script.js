/**
 * PRATIK PALWAI - ENGINEERING PORTFOLIO JAVASCRIPT
 * Interactive functionality: theme toggle, project filter, modals, clipboard, scroll spy
 */

// ==========================================================================
// PROJECT DATA REPOSITORY (TECHNICAL DEEP-DIVES)
// ==========================================================================
const projectData = {
  hyundai: {
    title: "Sand Traction Control & Powertrain Telemetry",
    affiliation: "Hyundai Motor Group | Off-Road Engineering Intern",
    categoryBadge: "Automotive & Controls",
    status: "Production Engineering (2028 MY)",
    image: "assets/images/fsae_ev_sim.png",
    imageCaption: "Telemetry processing and torque-speed envelope calibration workflow",
    metrics: [
      { label: "Target Platform", val: "2028 Santa Fe XRT" },
      { label: "Sensors Calibrated", val: "40+ Strain Gauges" },
      { label: "Software Tooling", val: "Python CANbus Library" },
      { label: "Domain", val: "Vehicle Dynamics & Controls" }
    ],
    overview: "In low-friction, deformable terrain such as loose sand, silt, and dunes, conventional traction control systems frequently over-brake wheels or starve engine torque, leading to excessive sinkage and vehicle immobilization. This engineering effort focused on developing adaptive terrain control strategies and physical load target calibration.",
    engineeringPoints: [
      "Developed and tuned sand terrain control algorithms for the 2028 Hyundai Santa Fe XRT, modulating electro-hydraulic brake pressure and powertrain torque output to maintain controlled wheel slip and optimal momentum transfer.",
      "Instrumented a 2025 Ford Bronco Badlands benchmarking vehicle with 40+ strain gauges across driveshafts and axle halfshafts, establishing calibration curves to measure empirical dynamic driveline loads.",
      "Architected a custom Python library for CANbus data acquisition (J1939/UDS) that automates high-frequency sensor logging, digital Butterworth filtering, and generates automated engineering run reports."
    ],
    stack: ["Python (NumPy, SciPy)", "CANbus Protocols", "Vehicle Dynamics", "Strain Gauges", "Hydraulic Brake Modulators", "Data Acquisition (DAQ)"]
  },

  uav_forge: {
    title: "Autonomous Hybrid VTOL UAV (4+1 Quad-Plane)",
    affiliation: "UCI UAV Forge SUAS | Aircraft Lead",
    categoryBadge: "Aerospace & UAVs",
    status: "Lead Aircraft Designer",
    image: "assets/images/uav_flight_range.png",
    imageCaption: "Multi-variable trade study: Flight range vs wing aspect ratio and battery mass fraction",
    metrics: [
      { label: "Flight Range", val: "11 km → 50 km (+354%)" },
      { label: "Configuration", val: "4+1 Hybrid VTOL Quad-Plane" },
      { label: "Tools Used", val: "Python, Flow5, MIT xFoil" },
      { label: "Aerodynamics", val: "Optimized L/D Cruise Polar" }
    ],
    overview: "UAV Forge participates in the international collegiate SUAS challenge requiring fully autonomous takeoff, long-range waypoint navigation, search-and-rescue target identification, and vertical landing. Previous multirotor airframes were limited to 11 km of range, severely constraining target search radius.",
    engineeringPoints: [
      "Led technical architecture and aerodynamic sizing for UCI's first hybrid VTOL UAV, utilizing 4 vertical lift motors for VTOL takeoff and 1 efficient pusher propeller for fixed-wing forward flight.",
      "Developed aerodynamic sizing scripts in Python implementing first-principles equations of motion, coupled with MIT xFoil and Flow5 to analyze airfoil polars, Oswald efficiency factors, and induced/parasitic drag.",
      "Executed trade studies balancing wing loading, battery energy density, stall speed margins, and payload weight, successfully extending maximum flight range to over 50 km.",
      "Modeled the complete airframe in SolidWorks and validated structural stress limits under 4G pull-up maneuvers."
    ],
    stack: ["Python Aerodynamic Sizing", "Flow5 3D CFD/Panel Code", "MIT xFoil", "SolidWorks 3D CAD", "Composite Airframes", "PX4 Autopilot"]
  },

  fsae_ev: {
    title: "FSAE Electric Powertrain & Thermal System",
    affiliation: "UCI Formula SAE EV Racing | Powertrain Lead",
    categoryBadge: "Automotive & Controls",
    status: "Formula SAE Electric",
    image: "assets/images/fsae_ev_powertrain.png",
    imageCaption: "Powertrain acceleration simulation and dual-motor torque-speed envelopes",
    metrics: [
      { label: "0-60 mph Sim", val: "< 2.50 Seconds" },
      { label: "Standard Followed", val: "ASME Y14.5 GD&T" },
      { label: "Cooling Architecture", val: "Closed-Loop PID Control" },
      { label: "Certification", val: "SolidWorks CSWP" }
    ],
    overview: "Formula SAE EV requires designing an open-wheel electric racecar that maximizes longitudinal acceleration, transient cornering exit torque, and thermal reliability across demanding 22 km endurance events.",
    engineeringPoints: [
      "Simulated non-linear vehicle acceleration dynamics in Python using Pacejka tire slip formulations and electric motor torque curves to optimize overall reduction gear ratios for sub-2.50s 0-60 mph launches.",
      "Engineered closed-loop PID control algorithms for variable-speed coolant pumps and radiator fans, regulating motor and silicon inverter temperatures within tight thermal margins while minimizing parasitic battery drain.",
      "Produced comprehensive 2D manufacturing prints adhering to ASME Y14.5 GD&T standards for CNC-machined aluminum 6061-T6 gearbox housings and differential carriers.",
      "Designed a custom go/no-go inspection gauge fixture to verify CNC part tolerances and critical bearing bore alignments before final vehicle assembly."
    ],
    stack: ["SolidWorks (CSWP)", "ASME Y14.5 GD&T", "Python Simulation", "Closed-Loop PID", "CNC Machining", "Thermal Management"]
  },

  cnc_router: {
    title: "Custom 36-Inch 4-Axis CNC Hot-Wire Foam Router",
    affiliation: "UCI AIAA Design/Build/Fly | Chief Engineer",
    categoryBadge: "Fabrication & CAD",
    status: "Custom Hardware & Firmware",
    image: "assets/images/uav_drag_polar.png",
    imageCaption: "Aerodynamic wing polar and drag analysis guiding foam core profiling",
    metrics: [
      { label: "Kinematics", val: "4 Independent Axes (X, Y, U, V)" },
      { label: "Core Weight Reduction", val: "-40% Wing Mass" },
      { label: "Controller", val: "RP2040 Microcontroller" },
      { label: "Firmware", val: "Custom grblHAL Fork" }
    ],
    overview: "Collegiate aircraft competitions reward high strength-to-weight ratios. Conventional manual foam cutting or uniform extrusions cannot produce complex tapered, swept, and twisted wing geometries with sufficient dimensional accuracy.",
    engineeringPoints: [
      "Designed and manufactured a 36-inch 4-axis hot-wire CNC machine featuring independent horizontal and vertical towers driven by precision lead screws and NEMA stepper motors.",
      "Flashed and customized open-source grblHAL firmware onto a Raspberry Pi RP2040 microcontroller board, enabling synchronized 4-axis kinematic motion for differing root and tip airfoils.",
      "Wrote custom Python preprocessing scripts to transform standard coordinate files (.dat) into synchronized multi-axis G-code toolpaths.",
      "Manufactured vacuum-bagged carbon fiber and fiberglass wet layups over the precision-cut expanded polystyrene (EPS) cores, cutting wing structural weight by 40% while exceeding destructive load test thresholds."
    ],
    stack: ["RP2040 Microcontroller", "grblHAL Firmware", "C / C++", "Stepper Motor Drivers", "Precision Metrology", "Vacuum-Bagged Composites"]
  },

  drone_cv: {
    title: "Autonomous Drone Target Tracking with AI Vision",
    affiliation: "UCI EECS Department | Teaching Assistant & Mentor",
    categoryBadge: "Embedded & Mechatronics",
    status: "Instructional Robotics Research",
    image: "assets/images/kalman_filter_thrust.png",
    imageCaption: "Hardware integration and low-latency digital signal filtering",
    metrics: [
      { label: "Companion SBC", val: "Raspberry Pi" },
      { label: "Vision Stack", val: "OpenCV Python" },
      { label: "Telemetry", val: "UART, I2C, DShot" },
      { label: "Application", val: "Autonomous Visual Tracking" }
    ],
    overview: "Instruction and technical guidance for university robotics engineering students on electromechanical assembly, flight controller tuning, and integrating computer vision algorithms onto compact drone platforms.",
    engineeringPoints: [
      "Guided undergraduate engineering cohorts through mechanical frame construction, brushless motor selection, ESC calibration, and firmware flashing (Betaflight / PX4).",
      "Evaluated onboard computer vision processing using OpenCV on Raspberry Pi companion computers for low-latency target detection and visual servoing.",
      "Mentored students in debugging embedded communication interfaces (UART, I2C, SPI) using logic analyzers and digital storage oscilloscopes to diagnose signal noise and packet drops."
    ],
    stack: ["Raspberry Pi", "OpenCV", "Python", "UART / I2C / SPI", "DShot ESC Protocol", "Digital Oscilloscope"]
  },

  thrust_stand: {
    title: "Dynamic Thrust Stand & Kalman Filter DAQ",
    affiliation: "Propulsion & Mechatronics Lab",
    categoryBadge: "Embedded & Mechatronics",
    status: "Embedded DAQ & Calibration",
    image: "assets/images/kalman_filter_thrust.png",
    imageCaption: "Real-time 1D Kalman filter suppressing mechanical motor vibration noise",
    metrics: [
      { label: "Microcontroller", val: "ESP32-C3 (PlatformIO)" },
      { label: "Algorithm", val: "1D Kalman Filter" },
      { label: "Sampling Rate", val: "100 Hz Real-Time" },
      { label: "Sensor", val: "Strain Gauge Load Cell + ADC" }
    ],
    overview: "Propeller testing rigs experience severe mechanical harmonics that corrupt raw load cell strain gauge measurements, making it difficult to capture accurate transient thrust data during step-throttle tests.",
    engineeringPoints: [
      "Engineered an instrumented cantilever test bench utilizing high-precision strain gauge load cells and high-speed current sensing to map brushless propulsion efficiency (g/W).",
      "Wrote modular C++ firmware for the ESP32-C3 microcontroller utilizing PlatformIO, integrating a discrete 1D Kalman filter to reject vibration harmonics without introducing unacceptable phase delay.",
      "Streamed live calibrated telemetry over serial/UART to PC plotting software for real-time propulsion dyno analysis."
    ],
    stack: ["ESP32-C3", "PlatformIO C++", "Discrete Kalman Filter", "HX711 Strain Gauge ADC", "Load Cells", "Hardware Calibration"]
  },

  machine_shop: {
    title: "Precision Robotics Fabrication & Metrology",
    affiliation: "UCI Samueli School of Engineering | Machine Shop Staff",
    categoryBadge: "Fabrication & CAD",
    status: "Shop Staff & Technical Mentor",
    image: "assets/images/powertrain_cooling_circuit.png",
    imageCaption: "Precision fluid and mechanical assembly documentation",
    metrics: [
      { label: "Students Mentored", val: "200+ Engineers" },
      { label: "Machining Tools", val: "CNC Mill & Manual Lathe" },
      { label: "Inspection Standards", val: "Calipers, Micrometers, Dial Indicators" },
      { label: "Focus", val: "Pneumatic Robots & Drivetrains" }
    ],
    overview: "Serving as shop technical staff in the university maker and machining facilities, providing hands-on instruction in machining safety, geometric dimensioning, and fabrication of custom mechanical hardware.",
    engineeringPoints: [
      "Mentored 200+ engineering students on mechanical design fundamentals, SolidWorks CAD modeling, and fabrication of pneumatically propelled competition robots.",
      "Instructed students on safe operation of 3-axis CNC milling machines, manual engine lathes, knee mills, and additive manufacturing systems.",
      "Trained students in precision metrology, verifying critical tolerances using vernier calipers, outside micrometers, gauge blocks, and dial indicators.",
      "Executed scheduled preventative maintenance, root-cause failure analysis, and repairs on machine tools to ensure maximum facility uptime."
    ],
    stack: ["CNC Milling", "Manual Lathe", "SolidWorks CAD", "Precision Metrology", "Additive Manufacturing", "Machine Maintenance"]
  }
};

// ==========================================================================
// DOM INITIALIZATION & EVENT HANDLERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjectFilters();
  initProjectModals();
  initClipboardButtons();
  initScrollSpy();
  initBackToTop();
});

// ==========================================================================
// THEME MANAGEMENT (DARK / LIGHT MODE)
// ==========================================================================
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to dark for engineering aesthetic

  setTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Sun icon for dark mode (to switch to light), Moon icon for light mode (to switch to dark)
    if (theme === 'dark') {
      themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
}

// ==========================================================================
// NAVIGATION & MOBILE MENU
// ==========================================================================
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking any nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// ==========================================================================
// PROJECT CATEGORY FILTERING
// ==========================================================================
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// ==========================================================================
// PROJECT DETAIL MODAL
// ==========================================================================
function initProjectModals() {
  const modalBackdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-body-content');
  const modalTitle = document.getElementById('modal-title');
  const modalAffiliation = document.getElementById('modal-affiliation');

  if (!modalBackdrop || !closeBtn) return;

  // Open modal handlers on all trigger elements
  document.querySelectorAll('[data-project-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project-trigger');
      const data = projectData[projectId];
      if (!data) return;

      populateModal(data, modalTitle, modalAffiliation, modalBody);
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Close modal button
  closeBtn.addEventListener('click', closeModal);

  // Close on backdrop click outside container
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function populateModal(data, titleEl, affiliationEl, bodyEl) {
  titleEl.textContent = data.title;
  affiliationEl.textContent = data.affiliation;

  // Build metrics HTML
  const metricsHtml = data.metrics.map(m => `
    <div class="modal-meta-item">
      <span class="modal-meta-label">${m.label}</span>
      <span class="modal-meta-val">${m.val}</span>
    </div>
  `).join('');

  // Build bullets HTML
  const bulletsHtml = data.engineeringPoints.map(p => `
    <li>${p}</li>
  `).join('');

  // Build tech stack tags
  const stackHtml = data.stack.map(s => `
    <span class="tech-tag">${s}</span>
  `).join('');

  // Build image HTML if present
  let imageHtml = '';
  if (data.image) {
    imageHtml = `
      <div class="modal-image-wrapper">
        <img src="${data.image}" alt="${data.title}" loading="lazy">
        <div class="modal-caption">${data.imageCaption || 'Engineering Schematic / Data Plot'}</div>
      </div>
    `;
  }

  bodyEl.innerHTML = `
    ${imageHtml}
    
    <div class="modal-meta-grid">
      ${metricsHtml}
    </div>

    <div class="modal-section-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      Problem & Challenge Overview
    </div>
    <p style="color: var(--text-muted); margin-bottom: 1.25rem;">${data.overview}</p>

    <div class="modal-section-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      Key Engineering Methodologies & Implementation
    </div>
    <ul class="modal-bullet-list" style="margin-bottom: 1.5rem;">
      ${bulletsHtml}
    </ul>

    <div class="modal-section-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      Applied Technologies & Tools
    </div>
    <div class="project-tags" style="margin-top: 0.5rem;">
      ${stackHtml}
    </div>
  `;
}

// ==========================================================================
// CLIPBOARD COPY & TOAST NOTIFICATION
// ==========================================================================
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-text]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// SCROLL SPY FOR NAVIGATION
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
