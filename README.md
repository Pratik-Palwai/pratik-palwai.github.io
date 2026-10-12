# Pratik Palwai — Engineering Portfolio Website

Live Site: **[https://pratik-palwai.github.io/](https://pratik-palwai.github.io/)**

Engineering portfolio of **Pratik Palwai** (University of California, Irvine — Mechanical Engineering B.S. & Computer Science Minor).

---

## 🚀 Key Features

- **Performance & Zero Dependencies**: Built with modern, semantic HTML5, responsive CSS3, and vanilla JavaScript. Blazing-fast load times with zero external heavy frameworks.
- **Theme Modes**: Native Dark Mode (default engineering aesthetic) and Light Mode with persistence in `localStorage`.
- **Interactive Projects Showcase**:
  - Filterable by engineering domain: *Automotive & Controls*, *Aerospace & UAVs*, *Embedded & Mechatronics*, *Fabrication & CAD*.
  - Technical deep-dive modal dialogs with problem statements, mathematical/sizing trade studies, test validation, and plots.
- **Experience & Leadership Timeline**: Details on internship experience at *Hyundai Motor Group*, *UCI UAV Forge SUAS*, *UCI Samueli Machine Shop*, *UCI Formula SAE EV*, and *UCI AIAA DBF*.
- **Technical Skills Matrix**: Visual proficiency breakdown spanning SolidWorks (CSWP), ASME Y14.5 GD&T, CANbus, Microcontrollers (RP2040, ESP32), Python, C++, CNC Machining, and Metrology.
- **Direct Resume Download**: One-click direct access to `resume.pdf`.
- **One-Click Email Copying**: Interactive toast notification to copy contact email.

---

## 🛠️ Directory Structure

```text
├── index.html                 # Main website entry point
├── styles.css                 # Responsive stylesheet with dark/light theming
├── script.js                  # Interactive filtering, modals, theme switcher & clipboard
├── .nojekyll                  # Bypasses Jekyll for GitHub Pages
├── assets/
│   ├── favicon.svg            # Custom engineering vector favicon
│   ├── resume.pdf             # PDF Resume
│   └── images/                # Real project plots & telemetry schematics
└── README.md                  # Project documentation
```

---

## 💻 Local Preview

To test locally without any special dependencies, open `index.html` in your browser, or spin up a local server:

```powershell
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Then navigate to `http://localhost:8000/`.

---

## 🌐 GitHub Pages Deployment

This repository is configured as the user site repository (`pratik-palwai.github.io`). Pushing to the `main` branch will automatically deploy the site at:
**[https://pratik-palwai.github.io/](https://pratik-palwai.github.io/)**