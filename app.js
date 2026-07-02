// CycleGuard Web Portal Interactive Engine

// --- Buyer Personas Database (20 Fictional Profiles) ---
const personasData = [
    { id: "P01", name: "Marcus Vance", segment: "Urban Commuter", age: 34, location: "Seattle, USA", occupation: "UX Designer", bikeValue: 2800, trust: "High", pay: 10, lang: "English", reaction: "Relieved by privacy isolation during rides", attitude: "Positive; views police as essential for recovery." },
    { id: "P02", name: "Chloe Dupont", segment: "Student/Academic", age: 21, location: "Boston, USA", occupation: "Chemistry Student", bikeValue: 800, trust: "Medium", pay: 4, lang: "English", reaction: "Likes the Safe Parking Map recommendations", attitude: "Neutral; hopes they respond to student cases." },
    { id: "P03", name: "David Chen", segment: "Sport Enthusiast", age: 46, location: "Haarlem, NL", occupation: "Financial Auditor", bikeValue: 5500, trust: "High", pay: 15, lang: "Dutch", reaction: "Excited for smart alarm during coffee stops", attitude: "Positive; trusts Dutch municipal coordination." },
    { id: "P04", name: "Sarah Jenkins", segment: "Urban Commuter", age: 29, location: "London, UK", occupation: "Marketing Manager", bikeValue: 1800, trust: "Low", pay: 0, lang: "English", reaction: "Skeptical of sharing location data with police", attitude: "Skeptical; doubts they will prioritize bike theft." },
    { id: "P05", name: "Liam O'Connor", segment: "Student/Academic", age: 24, location: "Dublin, Ireland", occupation: "Graduate Student", bikeValue: 600, trust: "Medium", pay: 3, lang: "English", reaction: "Thinks it is a smart idea if cheap enough", attitude: "Neutral; hopes the link deters thieves." },
    { id: "P06", name: "Anika Meyer", segment: "Urban Commuter", age: 41, location: "Munich, Germany", occupation: "Software Engineer", bikeValue: 3200, trust: "High", pay: 12, lang: "German", reaction: "Impressed by the open-source API structure", attitude: "Positive; trusts municipal registry systems." },
    { id: "P07", name: "Jean Dubois", segment: "Urban Commuter", age: 38, location: "Paris, France", occupation: "Architect", bikeValue: 1500, trust: "Low", pay: 0, lang: "French", reaction: "Uneasy about any law enforcement tracking", attitude: "Skeptical; distrusts police database tracking." },
    { id: "P08", name: "Emma Watson", segment: "Urban Commuter", age: 31, location: "New York, USA", occupation: "Journalist", bikeValue: 2000, trust: "Low", pay: 5, lang: "English", reaction: "Appreciates the 60s validation buffer", attitude: "Critical; distrusts public surveillance." },
    { id: "P09", name: "Lars Nielsen", segment: "Sport Enthusiast", age: 50, location: "Copenhagen, DK", occupation: "Director", bikeValue: 6000, trust: "High", pay: 20, lang: "Danish", reaction: "Perfect for stopping at cafes during rides", attitude: "Highly supportive; values local infrastructure." },
    { id: "P10", name: "Sofia Rossi", segment: "Student/Academic", age: 22, location: "Milan, Italy", occupation: "Art Student", bikeValue: 500, trust: "Medium", pay: 3, lang: "Italian", reaction: "Wants a beautiful app icon, likes layout", attitude: "Neutral; hopes police respond if needed." },
    { id: "P11", name: "John Smith", segment: "Urban Commuter", age: 45, location: "Manchester, UK", occupation: "Sales Rep", bikeValue: 1200, trust: "Medium", pay: 6, lang: "English", reaction: "Thinks it will reduce insurance premium", attitude: "Positive; trusts local police response times." },
    { id: "P12", name: "Yuki Tanaka", segment: "Urban Commuter", age: 27, location: "San Francisco, USA", occupation: "Tech Support", bikeValue: 2500, trust: "Medium", pay: 10, lang: "English", reaction: "Likes the automatic geofencing alert", attitude: "Neutral; cares more about data security than police." },
    { id: "P13", name: "Elena Petrova", segment: "Urban Commuter", age: 33, location: "Berlin, Germany", occupation: "Graphic Designer", bikeValue: 1700, trust: "Low", pay: 0, lang: "German", reaction: "Wants completely open-source client code", attitude: "Skeptical; values personal privacy sovereignty." },
    { id: "P14", name: "Thomas Wright", segment: "Sport Enthusiast", age: 52, location: "Amsterdam, NL", occupation: "Accountant", bikeValue: 4800, trust: "High", pay: 15, lang: "Dutch", reaction: "Likes statistics showing 62% theft drop", attitude: "Positive; trusts Dutch police integration." },
    { id: "P15", name: "Clara Mendez", segment: "Student/Academic", age: 25, location: "Barcelona, Spain", occupation: "Master Student", bikeValue: 700, trust: "Medium", pay: 4, lang: "Spanish", reaction: "Appreciates simple, oversized buttons", attitude: "Neutral; hopes tracking works when needed." },
    { id: "P16", name: "Mark van der Berg", segment: "Urban Commuter", age: 35, location: "Utrecht, NL", occupation: "Business Consultant", bikeValue: 3000, trust: "High", pay: 12, lang: "Dutch", reaction: "Perfect blend of security and privacy", attitude: "Positive; knows Dutch police support it." },
    { id: "P17", name: "Jessica Taylor", segment: "Sport Enthusiast", age: 43, location: "Austin, USA", occupation: "Corporate Lawyer", bikeValue: 4000, trust: "High", pay: 15, lang: "English", reaction: "Appreciates compliance with local laws", attitude: "Positive; trusts local sheriff coordination." },
    { id: "P18", name: "Pierre Leroy", segment: "Student/Academic", age: 20, location: "Lyon, France", occupation: "Chemistry Student", bikeValue: 450, trust: "Low", pay: 0, lang: "French", reaction: "Afraid of police tracing daily commutes", attitude: "Skeptical; actively dislikes municipal tracking." },
    { id: "P19", name: "Hannah Abbott", segment: "Urban Commuter", age: 28, location: "Bristol, UK", occupation: "Registered Nurse", bikeValue: 1400, trust: "Medium", pay: 5, lang: "English", reaction: "Likes reassurance for night shifts", attitude: "Positive; trusts public authority integration." },
    { id: "P20", name: "Oliver Koenig", segment: "Sport Enthusiast", age: 48, location: "Frankfurt, Germany", occupation: "Financial Analyst", bikeValue: 5200, trust: "High", pay: 15, lang: "German", reaction: "Very cost-effective compared to insurance", attitude: "Positive; trusts German police dispatch standard." }
];

// --- Country Configurations ---
const countryProfiles = {
    nl: {
        center: [52.3702, 4.8952], // Amsterdam/Utrecht area
        domain: "trackbike.nl",
        basicPrice: "Gratis",
        standardPrice: "€5 / md",
        premiumPrice: "€12 / md",
        compliance: "<h4>🇳🇱 trackbike.nl Legal Compliance</h4><p>Fully compliant with local Dutch surveillance laws (WBP) and GDPR. Coordinates shared directly with local Dutch police (Politie) dispatch hubs only after user confirmation.</p>"
    },
    de: {
        center: [48.1351, 11.5820], // Munich
        domain: "trackbike.de",
        basicPrice: "Kostenlos",
        standardPrice: "€6 / monat",
        premiumPrice: "€15 / monat",
        compliance: "<h4>🇩🇪 trackbike.de Legal Compliance</h4><p>GDPR compliance verified by BfDI. Integrates with regional German police (Polizei) CAD interfaces via standard security gateways.</p>"
    },
    us: {
        center: [47.6062, -122.3321], // Seattle
        domain: "trackbike.us",
        basicPrice: "Free",
        standardPrice: "$10 / mo",
        premiumPrice: "$20 / mo",
        compliance: "<h4>🇺🇸 trackbike.us Legal Compliance</h4><p>Adheres to US privacy guidelines. GPS location shared with local 911 Command Center CAD systems when sentry alarm triggers.</p>"
    },
    uk: {
        center: [53.4808, -2.2426], // Manchester
        domain: "trackbike.co.uk",
        basicPrice: "Free",
        standardPrice: "£5 / mo",
        premiumPrice: "£12 / mo",
        compliance: "<h4>🇬🇧 trackbike.co.uk Legal Compliance</h4><p>UK GDPR compliant, registered with the ICO. Connects directly to UK police command centers (CAD) during confirmed thefts.</p>"
    },
    fr: {
        center: [48.8566, 2.3522], // Paris
        domain: "trackbike.fr",
        basicPrice: "Gratuit",
        standardPrice: "€6 / mois",
        premiumPrice: "€15 / mois",
        compliance: "<h4>🇫🇷 trackbike.fr Legal Compliance</h4><p>CNIL audited and fully compliant. Coordinates forwarded to French national police (Gendarmerie/Police Nationale) networks.</p>"
    }
};

// --- App State variables ---
let currentCountry = "nl";
let appState = "armed"; // armed, disarmed, warning, theft
let map = null;
let bikeMarker = null;
let policeMarker = null;
let geofenceCircle = null;
let theftPathLine = null;
let alertTimer = null;
let countdownVal = 15;
let simulationInterval = null;
let currentPathIndex = 0;
let simulatedRoute = [];

// --- Web Audio API Synth Engine ---
let audioCtx = null;
let soundEnabled = true;
let sirenInterval = null;
let oscillator = null;
let gainNode = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function toggleAudioInit() {
    const soundBtn = document.getElementById("sound-btn");
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        soundBtn.innerHTML = "🔈 Mute Audio";
        soundBtn.classList.remove("muted");
    } else {
        soundBtn.innerHTML = "🔇 Unmute Audio";
        soundBtn.classList.add("muted");
        stopAlarmSounds();
    }
}

function playWarningSound() {
    if (!soundEnabled) return;
    initAudio();
    
    // Rhythmic beep
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // Pitch A5
    
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
}

function startSirenSound() {
    if (!soundEnabled) return;
    initAudio();
    
    if (oscillator) return; // Already running
    
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
    
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    
    // Siren sweep logic
    let high = true;
    sirenInterval = setInterval(() => {
        if (!audioCtx) return;
        let time = audioCtx.currentTime;
        if (high) {
            oscillator.frequency.linearRampToValueAtTime(800, time + 0.45);
        } else {
            oscillator.frequency.linearRampToValueAtTime(500, time + 0.45);
        }
        high = !high;
    }, 500);
}

function stopAlarmSounds() {
    if (sirenInterval) {
        clearInterval(sirenInterval);
        sirenInterval = null;
    }
    if (oscillator) {
        try {
            oscillator.stop();
        } catch(e) {}
        oscillator = null;
    }
    if (gainNode) {
        gainNode = null;
    }
}

// --- Map Logic ---
function initMap() {
    const config = countryProfiles[currentCountry];
    
    // Initialize map
    map = L.map('map', {
        zoomControl: true,
        attributionControl: true
    }).setView(config.center, 16);
    
    // Standard colorful OpenStreetMap 2D Map tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add custom circular geofence
    geofenceCircle = L.circle(config.center, {
        color: '#00b4d8',
        fillColor: '#00b4d8',
        fillOpacity: 0.15,
        radius: 40 // Visual exaggeration for standard map scale readability
    }).addTo(map);
    
    // Custom styled Bike marker showing a bicycle symbol
    const bikeIcon = L.divIcon({
        className: 'custom-bike-pin',
        html: '🚲',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    bikeMarker = L.marker(config.center, { icon: bikeIcon }).addTo(map);
    
    // Setup simulated recovery route coordinates
    simulatedRoute = generateRoute(config.center);
}

function generateRoute(startCoords) {
    const route = [];
    let lat = startCoords[0];
    let lng = startCoords[1];
    
    for (let i = 0; i < 30; i++) {
        lat += 0.00015 * Math.sin(i / 3) + 0.0001;
        lng += 0.00022 * Math.cos(i / 4) + 0.00015;
        route.push([lat, lng]);
    }
    return route;
}

// --- Interaction / Controls ---
function changeCountry() {
    currentCountry = document.getElementById("country-select").value;
    const config = countryProfiles[currentCountry];
    
    // Reset simulation
    resetAppSimulation();
    
    // Update map coordinates
    map.setView(config.center, 16);
    geofenceCircle.setLatLng(config.center);
    bikeMarker.setLatLng(config.center);
    simulatedRoute = generateRoute(config.center);
    
    // Update labels and strategy data
    document.getElementById("compliance-info").innerHTML = config.compliance;
    document.getElementById("tier-standard-price").innerText = config.standardPrice;
    document.getElementById("tier-premium-price").innerText = config.premiumPrice;
    
    // Update telemetry display
    updateTelemetry(config.center, "Parked Still (Lock Alert Active)");
    
    addLog(`Country profile shifted to ${config.domain.toUpperCase()}`, "green");
}

function updateTelemetry(coords, stateText) {
    const telemetry = document.getElementById("telemetry-display");
    if (appState === "disarmed") {
        telemetry.innerHTML = `
            <strong>Current State:</strong> Riding Mode Active<br>
            <strong>Coordinates:</strong> [ENCRYPTED - COMPLETE ISOLATION]<br>
            <strong>Status:</strong> Geolocation database offline to secure data privacy.
        `;
    } else {
        telemetry.innerHTML = `
            <strong>State:</strong> ${stateText}<br>
            <strong>Coordinates:</strong> ${coords[0].toFixed(5)}° N, ${coords[1].toFixed(5)}° E
        `;
    }
}

function toggleLockState() {
    initAudio();
    if (appState === "warning" || appState === "theft") {
        // Disarm warning or alarm state
        resetAppSimulation();
        return;
    }
    
    const sentryBtn = document.getElementById("sentry-btn");
    const statusBadge = document.getElementById("status-display-badge");
    const lockRing = document.getElementById("lock-ring");
    const mapStatus = document.getElementById("map-status-label");
    const privacyOverlay = document.getElementById("privacy-overlay");
    const config = countryProfiles[currentCountry];
    
    if (appState === "armed") {
        // Switch to disarmed
        appState = "disarmed";
        sentryBtn.innerText = "ARM TRACKER";
        sentryBtn.classList.add("arm-active");
        
        statusBadge.innerText = "DISARMED & PRIVATE";
        statusBadge.classList.add("alerting");
        statusBadge.style.color = "var(--color-text-muted)";
        statusBadge.style.background = "rgba(255,255,255,0.05)";
        statusBadge.style.borderColor = "var(--color-border)";
        
        lockRing.classList.remove("armed");
        drawLockIcon(false);
        
        mapStatus.innerText = "GPS OFFLINE";
        mapStatus.classList.add("offline");
        
        privacyOverlay.classList.add("active");
        
        addLog("CycleGuard disarmed. Privacy isolation engaged. GPS module entered deep sleep.", "green");
        updateTelemetry(config.center, "Riding Mode Active");
    } else {
        // Switch to armed
        appState = "armed";
        sentryBtn.innerText = "DISARM SECURITY";
        sentryBtn.classList.remove("arm-active");
        
        statusBadge.innerText = "SECURE & ARMED";
        statusBadge.classList.remove("alerting");
        statusBadge.style.color = "var(--color-success)";
        statusBadge.style.background = "rgba(16, 185, 129, 0.1)";
        statusBadge.style.borderColor = "rgba(16, 185, 129, 0.2)";
        
        lockRing.classList.add("armed");
        drawLockIcon(true);
        
        mapStatus.innerText = "ARMED GEOFENCE";
        mapStatus.classList.remove("offline");
        
        privacyOverlay.classList.remove("active");
        
        addLog("CycleGuard armed successfully. Geofence established at 5-meter radius.", "green");
        updateTelemetry(config.center, "Parked Still (Lock Alert Active)");
    }
}

function drawLockIcon(isLocked, isAlerting = false) {
    const lockSvg = document.getElementById("lock-icon-svg");
    if (isAlerting) {
        lockSvg.innerHTML = `
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke-dasharray="3 3"></path>
                <path d="M12 2v4" stroke="red" stroke-width="3"></path>
            </svg>
        `;
    } else if (isLocked) {
        lockSvg.innerHTML = `
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        `;
    } else {
        lockSvg.innerHTML = `
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
            </svg>
        `;
    }
}

// --- Simulation Controls ---
function triggerBumpSimulation() {
    initAudio();
    if (appState !== "armed") {
        addLog("Error: Simulation can only be triggered while CycleGuard is Armed.", "red");
        return;
    }
    
    appState = "warning";
    countdownVal = 15;
    
    document.getElementById("countdown-sec").innerText = countdownVal;
    document.getElementById("stage1-banner").style.display = "block";
    document.getElementById("sim-bump-btn").disabled = true;
    document.getElementById("sim-force-btn").disabled = false;
    
    const sentryBtn = document.getElementById("sentry-btn");
    sentryBtn.innerText = "CANCEL WARNING (FALSE ALARM)";
    sentryBtn.classList.add("arm-active");
    
    const statusBadge = document.getElementById("status-display-badge");
    statusBadge.innerText = "TAMPER DETECTED";
    statusBadge.classList.add("alerting");
    statusBadge.style.color = "var(--color-alert)";
    statusBadge.style.background = "rgba(217, 4, 41, 0.1)";
    statusBadge.style.borderColor = "rgba(217, 4, 41, 0.3)";
    
    const lockRing = document.getElementById("lock-ring");
    lockRing.classList.remove("armed");
    lockRing.classList.add("alerting");
    drawLockIcon(true, true);
    
    const mapStatus = document.getElementById("map-status-label");
    mapStatus.innerText = "GEOFENCE BREACH";
    mapStatus.classList.add("alerting");
    
    // Add custom class to Bike marker icon for flasher effect
    const alertingIcon = L.divIcon({
        className: 'custom-bike-pin alerting',
        html: '🚲',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    bikeMarker.setIcon(alertingIcon);
    
    addLog("Vibration/Geofence tamper detected on device. Stage 1 alert countdown started.", "red");
    
    // Alert Sound & Countdown Loop
    alertTimer = setInterval(() => {
        countdownVal--;
        document.getElementById("countdown-sec").innerText = countdownVal;
        playWarningSound();
        
        if (countdownVal <= 0) {
            triggerForceDispatch();
        }
    }, 1000);
}

function triggerForceDispatch() {
    initAudio();
    clearInterval(alertTimer);
    
    appState = "theft";
    document.getElementById("stage1-banner").style.display = "none";
    document.getElementById("stage2-banner").style.display = "block";
    document.getElementById("sim-force-btn").disabled = true;
    
    const statusBadge = document.getElementById("status-display-badge");
    statusBadge.innerText = "POLICE COMMAND ACTIVE";
    
    const sentryBtn = document.getElementById("sentry-btn");
    sentryBtn.innerText = "RECOVER BIKE & DISARM";
    
    addLog("Stage 2 Triggered. Decrypting device storage. Transmitting telemetry to local police command (CAD).", "red");
    
    // Start police siren sound
    startSirenSound();
    
    // Remove geofence circle from map (it's moving)
    if (geofenceCircle) {
        geofenceCircle.remove();
    }
    
    // Add custom styled police car marker to map
    const policeIcon = L.divIcon({
        className: 'custom-police-pin',
        html: '🚓',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    const config = countryProfiles[currentCountry];
    policeMarker = L.marker(config.center, { icon: policeIcon }).addTo(map);
    
    // Setup line trace path
    theftPathLine = L.polyline([config.center], { color: 'red', weight: 4, opacity: 0.85 }).addTo(map);
    
    // Simulated movement loop
    currentPathIndex = 0;
    simulationInterval = setInterval(() => {
        if (currentPathIndex < simulatedRoute.length) {
            const nextCoords = simulatedRoute[currentPathIndex];
            
            // Move bike marker
            bikeMarker.setLatLng(nextCoords);
            
            // Draw route trace
            theftPathLine.addLatLng(nextCoords);
            
            // Move police marker with lag (following the bike path)
            if (currentPathIndex > 2) {
                policeMarker.setLatLng(simulatedRoute[currentPathIndex - 2]);
            }
            
            // Center map on moving targets
            map.panTo(nextCoords);
            
            // Update coordinates display
            updateTelemetry(nextCoords, "Bicycle Stolen & Moving");
            
            if (currentPathIndex % 4 === 0) {
                addLog(`GPS Broadcast: Coordinates updated to ${nextCoords[0].toFixed(5)}° N, ${nextCoords[1].toFixed(5)}° E`, "red");
            }
            currentPathIndex++;
        } else {
            // End of route - bike recovered
            clearInterval(simulationInterval);
            stopAlarmSounds();
            addLog("Simulation Event: Theft recovery complete. Suspect cornered by municipal officers.", "green");
            sentryBtn.innerText = "DISARM SENTRY & CLEAR";
        }
    }, 1000);
}

function resetAppSimulation() {
    clearInterval(alertTimer);
    clearInterval(simulationInterval);
    stopAlarmSounds();
    
    appState = "armed";
    countdownVal = 15;
    
    document.getElementById("stage1-banner").style.display = "none";
    document.getElementById("stage2-banner").style.display = "none";
    document.getElementById("sim-bump-btn").disabled = false;
    document.getElementById("sim-force-btn").disabled = true;
    
    const sentryBtn = document.getElementById("sentry-btn");
    sentryBtn.innerText = "DISARM SECURITY";
    sentryBtn.classList.remove("arm-active");
    
    const statusBadge = document.getElementById("status-display-badge");
    statusBadge.innerText = "SECURE & ARMED";
    statusBadge.classList.remove("alerting");
    statusBadge.style.color = "var(--color-success)";
    statusBadge.style.background = "rgba(16, 185, 129, 0.1)";
    statusBadge.style.borderColor = "rgba(16, 185, 129, 0.2)";
    
    const lockRing = document.getElementById("lock-ring");
    lockRing.classList.remove("alerting");
    lockRing.classList.add("armed");
    drawLockIcon(true);
    
    const mapStatus = document.getElementById("map-status-label");
    mapStatus.innerText = "ARMED GEOFENCE";
    mapStatus.classList.remove("alerting");
    mapStatus.classList.remove("offline");
    
    // Reset Markers
    const config = countryProfiles[currentCountry];
    const bikeIcon = L.divIcon({
        className: 'custom-bike-pin',
        html: '🚲',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    bikeMarker.setIcon(bikeIcon);
    bikeMarker.setLatLng(config.center);
    
    if (policeMarker) {
        policeMarker.remove();
        policeMarker = null;
    }
    
    if (theftPathLine) {
        theftPathLine.remove();
        theftPathLine = null;
    }
    
    // Add geofence circle back
    if (geofenceCircle) {
        geofenceCircle.remove();
    }
    geofenceCircle = L.circle(config.center, {
        color: '#00b4d8',
        fillColor: '#00b4d8',
        fillOpacity: 0.15,
        radius: 40
    }).addTo(map);
    
    // Recenter map
    map.setView(config.center, 16);
    
    document.getElementById("privacy-overlay").classList.remove("active");
    
    addLog("System diagnostic: Sentry dashboard reset successfully.", "green");
    updateTelemetry(config.center, "Parked Still (Lock Alert Active)");
}

// --- Logger ---
function addLog(text, colorClass = "") {
    const container = document.getElementById("phone-logs");
    const item = document.createElement("div");
    item.className = "log-item";
    
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    
    const dot = document.createElement("div");
    dot.className = "log-dot";
    if (colorClass === "red") dot.classList.add("red");
    if (colorClass === "green") dot.classList.add("green");
    
    const timeSpan = document.createElement("span");
    timeSpan.className = "log-time";
    timeSpan.innerText = timeStr;
    
    const textSpan = document.createElement("span");
    textSpan.className = "log-text";
    textSpan.innerText = text;
    
    item.appendChild(dot);
    item.appendChild(timeSpan);
    item.appendChild(textSpan);
    
    container.insertBefore(item, container.firstChild);
    
    // Limit elements to 20 logs
    while (container.childNodes.length > 20) {
        container.removeChild(container.lastChild);
    }
}

// --- Personas Visualizer details rendering ---
function populatePersonasSelector() {
    const selector = document.getElementById("persona-select");
    personasData.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.innerText = `${p.id} - ${p.name} (${p.segment})`;
        selector.appendChild(opt);
    });
    showPersonaDetails();
}

function showPersonaDetails() {
    const id = document.getElementById("persona-select").value;
    const p = personasData.find(x => x.id === id);
    const info = document.getElementById("persona-info");
    
    info.innerHTML = `
        <div class="persona-header-grid">
            <div class="persona-name">
                <h4>${p.name}</h4>
                <span class="persona-meta">${p.occupation} • ${p.age} y/o • ${p.location}</span>
            </div>
            <div class="persona-budget">
                <div class="persona-budget-label">Sentry Budget</div>
                <div class="persona-budget-val">$${p.pay}/mo</div>
            </div>
        </div>
        <div class="persona-body-grid">
            <div class="persona-stat"><strong>Segment:</strong> <span>${p.segment}</span></div>
            <div class="persona-stat"><strong>Bicycle Value:</strong> <span>$${p.bikeValue}</span></div>
            <div class="persona-stat"><strong>Sentry Trust Level:</strong> <span style="color: ${p.trust === 'High' ? 'var(--color-success)' : p.trust === 'Medium' ? 'var(--color-accent)' : 'var(--color-alert)'}">${p.trust} Trust</span></div>
            <div class="persona-stat"><strong>Language:</strong> <span>${p.lang}</span></div>
            <div class="persona-stat-block">
                <strong>First Reaction:</strong><br>${p.reaction}
            </div>
            <div class="persona-stat-block">
                <strong>Police Database Attitude:</strong><br>${p.attitude}
            </div>
        </div>
    `;
}

// --- Bootloader ---
window.onload = function() {
    // Populate dropdowns & text fields
    populatePersonasSelector();
    
    // Initialize default NL config values
    const config = countryProfiles[currentCountry];
    document.getElementById("compliance-info").innerHTML = config.compliance;
    document.getElementById("tier-standard-price").innerText = config.standardPrice;
    document.getElementById("tier-premium-price").innerText = config.premiumPrice;
    
    // Draw Lock icon
    drawLockIcon(true);
    
    // Init Leaflet map
    initMap();
    
    // Add default log
    addLog("CycleGuard firmware active. Connected to mobile client via secure handshakes.", "green");
};
