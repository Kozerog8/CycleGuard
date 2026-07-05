# CycleGuard: Public-Safety-Integrated IoT Bicycle Security & Recovery Portal

**CycleGuard** is a premium, privacy-first, government-connected bicycle tracking and recovery ecosystem. It shifts the paradigm of bicycle security from a passive GPS tracker to a public-safety-integrated sentry network.

---

## 👁️ Core Architectural Pillars

### 1. Complete Privacy Isolation
To respect rider privacy and comply with strict regional data surveillance regulations (such as GDPR in Europe and CCPA in California), CycleGuard enforces a strict privacy boundary:
* **Riding Mode (Disarmed)**: The onboard GPS module is powered **completely off** and encrypted. Commute logs do not exist in the cloud or on the device, ensuring commutes are 100% untrackable.
* **Parked Mode (Armed)**: The Sentry geofence is established locally. Coordinates are logged securely and remain encrypted on the physical device.
* **Theft Mode (Decrypted)**: Location data is only decrypted and transmitted when the owner actively confirms a theft event.

### 2. Two-Stage Verification Alert
Bicycle tracking apps are normally ignored by local emergency services due to a high rate of accidental dispatches (false alarms). CycleGuard introduces a two-stage filter:
* **Stage 1 (Warning)**: If a parked bike is bumped or moved, the owner receives a soft warning beep and an immediate **15-second countdown** (60-second default in production) in the app to dismiss it.
* **Stage 2 (Dispatch)**: If the warning is ignored or confirmed, the tracking coordinates are decrypted and instantly routed directly into the local municipal police **Computer Aided Dispatch (CAD)** system.

### 3. Newcastle Psychological Deterrence
Instead of only recovering stolen bikes, CycleGuard prevents theft before it happens:
* Based on environmental criminology studies (the *Newcastle "Watching Eyes" study* by Daniel Nettle et al.), signs displaying eyes combined with police branding **reduce bicycle theft rates by 62%**.
* CycleGuard riders receive high-visibility reflective frame decals warning thieves of the direct police integration.
* The app guides riders to park in certified high-foot-traffic **Social Parking Zones** where natural guardianship deters thieves.

---

## 📁 Directory Asset Map

```
[Presentation for project]/
│
├── index.html                 # Web Portal Demonstration Landing Page
├── index.css                  # Style sheet (Blue & White theme, animations)
├── app.js                     # Simulation engine, Leaflet map, and Audio synthesizers
├── run_app.bat                # Windows direct launcher shortcut
├── run_app.py                 # Python server launcher script
├── README.md                  # [THIS FILE] Project documentation
│
├── presentation.pptx          # Widescreen 16:9 Slide Pitch
├── presenter_notes.docx       # Word format presenter scripts
├── presenter_notes.md         # Markdown format presenter guide
├── cycleguard_data.xlsx       # Multi-sheet Excel workbook (Personas & Strategy)
│
├── bike_theft_hd.png          # HD Asset: Visualizing lock cuts
├── secure_park_hd.png         # HD Asset: Deterrence parking hub
├── farmer_app_hd.png          # HD Asset: Senior accessibility user
├── police_bike_hd.png         # HD Asset: Municipal integration
│
├── rebuild_all.py             # Rebuild orchestrator for document assets
└── scripts/                   # Individual generator scripts
    ├── generate_personas.py
    ├── generate_strategy.py
    ├── generate_charts_and_excel.py
    ├── generate_pptx.py
    └── generate_docx.py
```

---

## 🚀 How to Launch the Web Application

No installation is required to view the web dashboard and simulation portal:

* **Instant Access**: Double-click **[index.html](index.html)** in your file explorer to open the local page in any web browser.
* **Automatic Windows Launcher**: Double-click **[run_app.bat](run_app.bat)** to open the portal immediately.
* **Local Web Server**: If Python is configured in your system path, launch the local HTTP server:
  ```powershell
  python run_app.py
  ```
  Then visit: `https://kozerog8.github.io/CycleGuard/`

### Running the Live Theft Simulator:
1. Open the page and click **🔈 Mute Audio** if you wish to silent the synthesized alarms.
2. Select a country in the top right (e.g., *Germany* or *Netherlands*) to view custom compliance terms.
3. Verify the status is **SECURE & ARMED** (click *ARM TRACKER* if not).
4. Click **🔨 Simulate Bump/Theft** in the bottom panel.
5. Watch the alert warning countdown. You can click **🚨 Force CAD Dispatch** to skip the wait.
6. The map will switch to a **colorful 2D view**, showing the **bicycle icon (🚲) moving along a theft route, followed in real-time by a police car icon (🚓)**.

---

## 📊 Rebuilding Deliverables (PowerPoint, Word, Excel)

The project includes Python builders to compile presentation slides, spreadsheets, and charts. If you install Python, you can rebuild all deliverables with a single command:
```powershell
python rebuild_all.py
```
This automatically runs:
1. **`generate_personas.py`**: Creates the 20 buyer personas dataset (`personas.csv`, `personas_portfolio.md`).
2. **`generate_strategy.py`**: Compiles strategy tables (`cycleguard_strategy.csv`, `cycleguard_strategy.md`).
3. **`generate_charts_and_excel.py`**: Writes `cycleguard_data.xlsx` and draws statistical graphs (`chart_trust_vs_pay.png`, `chart_value_vs_pay.png`).
4. **`generate_pptx.py`**: Dynamically compiles the widescreen slide deck (`presentation.pptx`).
5. **`generate_docx.py`**: Compiles the pitch guide (`presenter_notes.docx`).
