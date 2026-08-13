/* ===========================================
   ASH INNOVATIES DASHBOARD
===========================================*/
console.log("Dashboard.js Loaded");
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Greeting
    // ==========================

    let hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {

        greeting = "Good Morning ☀️";

    }

    else if (hour < 17) {

        greeting = "Good Afternoon 🌤️";

    }

    const heroTitle = document.querySelector(".hero h2");

    if (heroTitle) {

        heroTitle.innerHTML =
            greeting +
            ", <span>Harsh 👋</span>";

    }

    // ==========================
    // Animated Counter
    // ==========================

     // animateCounter(".temp h2", 29, "°C");

     // animateCounter(".humidity h2", 64, "%");

    // ==========================
    // Fake Smoke Status
    // ==========================

   
/* ===========================================
   Animated Counter Function
===========================================*/

function animateCounter(selector, target, suffix) {

    const element = document.querySelector(selector);

    if (!element) return;

    let count = 0;

    let timer = setInterval(function () {

        count++;

        element.innerHTML =

            count + suffix;

        if (count >= target)

            clearInterval(timer);

    }, 35);

}

/* ===========================================
        DARK MODE
=========================================== */

const moonBtn = document.querySelector(".bi-moon-fill");

    if (moonBtn)
    {

    moonBtn.parentElement.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light"
        );

    });

}

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

}

/* ===========================================
      SEARCH HIGHLIGHT
=========================================== */

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        document.querySelectorAll(".status-card,.device-card,.ai-card").forEach(function (card) {

            card.style.outline = "none";

            if (card.innerText.toLowerCase().includes(value) && value != "") {

                card.style.outline = "3px solid #4F7CFF";

                card.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }

        });

    });

}

/* ===========================================
      RIPPLE EFFECT
=========================================== */

document.querySelectorAll("button").forEach(function (btn) {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const d = Math.max(btn.clientWidth, btn.clientHeight);

        circle.style.width = d + "px";

        circle.style.height = d + "px";

        circle.style.left = e.offsetX - d / 2 + "px";

        circle.style.top = e.offsetY - d / 2 + "px";

        circle.className = "ripple";

        btn.appendChild(circle);

        setTimeout(function () {

            circle.remove();

        }, 600);

    });

});

/* ===========================================
     NOTIFICATION TOAST
=========================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast-box";

    toast.innerHTML = "✅ " + message;

    document.body.appendChild(toast);

    setTimeout(function () {

        toast.classList.add("show");

    }, 100);

    setTimeout(function () {

        toast.classList.remove("show");

        setTimeout(function () {

            toast.remove();

        }, 500);

    }, 3000);

}

setTimeout(function () {

    showToast("ESP32 Connected");

}, 1500);

/* ===========================================
      ESP32 STATUS
=========================================== */

const status = document.querySelector(".status-online");

if (status) {

    setInterval(function () {

        status.innerHTML = "🟡 Syncing...";

        setTimeout(function () {

            status.innerHTML = "🟢 Connected";

        }, 1200);

    }, 8000);

}

/* ===========================================
    LIVE CLOCK + DATE
=========================================== */

function updateClock() {

    const now = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const time = now.toLocaleTimeString();

    const date = now.toLocaleDateString("en-IN", options);

    const clock = document.getElementById("liveClock");
    const today = document.getElementById("todayDate");

    if (clock)
        clock.innerHTML = time;

    if (today)
        today.innerHTML = date;

}

setInterval(updateClock, 1000);

updateClock();

    /* ===========================================
            CHART.JS
    =========================================== */

    const chartCanvas = document.getElementById("tempChart");

    if (chartCanvas) {

        new Chart(chartCanvas, {

            type: "line",

            data: {

                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

                datasets: [

                    {

                        label: "Temperature",

                        data: [24, 26, 27, 29, 30, 28, 29],

                        borderColor: "#4F7CFF",

                        backgroundColor: "rgba(79,124,255,.12)",

                        fill: true,

                        tension: .45,

                        borderWidth: 4,

                        pointRadius: 5

                    },

                    {

                        label: "Humidity",

                        data: [60, 58, 63, 64, 66, 62, 64],

                        borderColor: "#8B7CFF",

                        backgroundColor: "transparent",

                        fill: false,

                        tension: .45,

                        borderWidth: 4,

                        pointRadius: 5

                    }

                ]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        display: true

                    }

                },

                scales: {

                    y: {

                        beginAtZero: false

                    }

                }

            }

        });

    }

   

    const aiText = document.querySelector(".ai-card p");

    if (aiText) {

        const message = "Be smarter with ASH AI.Control components and easily handle them with ASH AI.";

        let i = 0;

        aiText.innerHTML = "";

        function typing() {

            if (i < message.length) {

                aiText.innerHTML += message.charAt(i);

                i++;

                setTimeout(typing, 22);

            }

        }

        typing();

    }

/* ===========================================
      BELL SHAKE
=========================================== */

const bell = document.querySelector(".bi-bell-fill");

if (bell) {

    setInterval(function () {

        bell.classList.add("bell-shake");

        setTimeout(function () {

            bell.classList.remove("bell-shake");

        }, 900);

    }, 9000);

}

/* ===========================================
      FLOATING CARD EFFECT
=========================================== */

document.addEventListener("mousemove", function (e) {

    const cards = document.querySelectorAll(".status-card,.device-card,.graph-card,.notification-card,.esp-card,.mini-card");

    cards.forEach(function (card) {

        const x = (window.innerWidth / 2 - e.clientX) / 80;

        const y = (window.innerHeight / 2 - e.clientY) / 80;

        card.style.transform =

            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    });

});

document.addEventListener("mouseleave", function () {

    document.querySelectorAll(".status-card,.device-card,.graph-card,.notification-card,.esp-card,.mini-card").forEach(function (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    });

});

/* ===========================================
PAGE LOADER
=========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }

});

/* ===========================================
        WEATHER WIDGET (FAKE)
=========================================== */

const weather = document.getElementById("weatherText");

if (weather) {

    const weatherData = [

        "☀️ Sunny 29°C",

        "🌤 Partly Cloudy",

        "🌧 Rain Expected",

        "💨 Wind 12 km/h"

    ];

    let i = 0;

    setInterval(() => {

        weather.innerHTML = weatherData[i];

        i++;

        if (i >= weatherData.length)
            i = 0;

    }, 6000);

}

/* ===========================================
        BATTERY
=========================================== */

const battery = document.getElementById("batteryLevel");

if (battery) {

    let level = 100;

    setInterval(() => {

        level--;

        if (level < 82)
            level = 100;

        battery.innerHTML = level + "%";

    }, 4000);

}

/* ===========================================
        WIFI SIGNAL
=========================================== */

const wifi = document.getElementById("wifiStatus");

if (wifi) {

    const signal = [

        "Excellent 📶",

        "Good 📶",

        "Excellent 📶",

        "Very Good 📶"

    ];

    let s = 0;

    setInterval(() => {

        wifi.innerHTML = signal[s];

        s++;

        if (s >= signal.length)
            s = 0;

    }, 5000);

}

/* ===========================================
        WELCOME TOAST
=========================================== */

setTimeout(() => {

    showToast("Welcome to ASH INNOVATIES Dashboard");

}, 3500);

/* ===========================================
        KEYBOARD SHORTCUT
=========================================== */

document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && e.key === "d") {

        e.preventDefault();

        document.body.classList.toggle("dark-mode");

    }

});

/* ===========================================
        RANDOM STATUS UPDATE
=========================================== */

setInterval(() => {

    const temp = document.querySelector(".temp h2");

    if (temp) {

        const value = Math.floor(Math.random() * 4) + 27;

        temp.innerHTML = value + "°C";

    }

}, 7000);

/* ===========================================
        DEVICE ONLINE COUNT
=========================================== */

const deviceCount = document.getElementById("deviceCount");

if (deviceCount) {

    let count = 4;

    setInterval(() => {

        count = Math.floor(Math.random() * 2) + 4;

        deviceCount.innerHTML = count + " Devices";

    }, 8000);

}

/* ===========================================
        CONSOLE MESSAGE
=========================================== */

console.log("%cASH INNOVATIES", "color:#4F7CFF;font-size:24px;font-weight:bold;");
console.log("%cSmart Home Dashboard Loaded Successfully", "color:#35C759;font-size:15px;");

    // =====================================================
    // STATE VARIABLES
    // =====================================================

    let temperatureAlertActive = false;
    let smokeAlertActive = false;

    // Recent Activity states
    let previousPIRStatus = "";
    let previousBulbStatus = "";
    let previousSmokeStatus = "";
    let previousESP32Status = "";


    // =====================================================
    // RECENT ACTIVITIES
    // =====================================================

    function addActivity(icon, iconColor, message) {

        // Hide "No recent activities"
        document.getElementById("noActivitiesMessage").style.display = "none";


        // Shift old activities down
        document.getElementById("activity5").innerHTML =
            document.getElementById("activity4").innerHTML;

        document.getElementById("activity4").innerHTML =
            document.getElementById("activity3").innerHTML;

        document.getElementById("activity3").innerHTML =
            document.getElementById("activity2").innerHTML;

        document.getElementById("activity2").innerHTML =
            document.getElementById("activity1").innerHTML;


        // New activity at first row
        document.getElementById("activity1").innerHTML = `
        <i class="bi ${icon} ${iconColor}"></i>
        ${message}
    `;
    }



    // =====================================================
    // PIR / MOTION
    // =====================================================

    async function updatePIR() {

        try {

            const response =
                await fetch("http://10.207.67.101/motion");

            const data = await response.text();

            document.getElementById("pirStatus").innerHTML = data;


            // Check only when status changes
            if (data == "Motion Detected") {

                if (previousPIRStatus != "detected") {

                    addActivity(
                        "bi-person-fill",
                        "text-warning",
                        "Motion Detected"
                    );

                    previousPIRStatus = "detected";
                }

            }
            else {

                // If motion becomes normal
                if (previousPIRStatus == "detected") {

                    addActivity(
                        "bi-person-fill",
                        "text-secondary",
                        "Motion Stopped"
                    );
                }

                previousPIRStatus = "normal";
            }

        }
        catch {

            document.getElementById("pirStatus").innerHTML =
                "ESP32 Offline";

        }
    }


    setInterval(updatePIR, 3000);

    updatePIR();



    // =====================================================
    // BULB ON
    // =====================================================

    async function bulbON() {

        try {

            await fetch("http://10.207.67.101/bulbon");

            document.getElementById("modeStatus").innerHTML =
                "MANUAL";

            updateBulb();

        }
        catch {

            alert("ESP32 Offline");

        }
    }



    // =====================================================
    // BULB OFF
    // =====================================================

    async function bulbOFF() {

        try {

            await fetch("http://10.207.67.101/bulboff");

            document.getElementById("modeStatus").innerHTML =
                "MANUAL";

            updateBulb();

        }
        catch {

            alert("ESP32 Offline");

        }
    }



    // =====================================================
    // BULB STATUS
    // =====================================================

    async function updateBulb() {

        try {

            const response =
                await fetch("http://10.207.67.101/bulbstatus");

            const data = await response.text();

            document.getElementById("bulbStatus").innerHTML =
                data;


            // =============================================
            // RECENT ACTIVITY
            // =============================================

            if (data == "ON") {

                if (previousBulbStatus != "ON") {

                    addActivity(
                        "bi-lightbulb-fill",
                        "text-warning",
                        "Bulb Turned ON"
                    );

                    previousBulbStatus = "ON";
                }

            }
            else if (data == "OFF") {

                if (previousBulbStatus != "OFF") {

                    addActivity(
                        "bi-lightbulb",
                        "text-secondary",
                        "Bulb Turned OFF"
                    );

                    previousBulbStatus = "OFF";
                }
            }

        }
        catch {

            document.getElementById("bulbStatus").innerHTML =
                "ESP32 Offline";

        }
    }


    setInterval(updateBulb, 1000);

    updateBulb();



    // =====================================================
    // ALERT SYSTEM
    // =====================================================

    function addAlert(title, message, icon) {

        const alertList =
            document.getElementById("activeAlertsList");


        // Remove "No active alerts"
        const noAlertsMessage =
            document.getElementById("noAlertsMessage");

        if (noAlertsMessage) {
            noAlertsMessage.remove();
        }


        const alert = document.createElement("div");

        alert.className =
            "active-alert critical";


        alert.innerHTML = `
        <div class="active-alert-icon">
            <i class="bi ${icon}"></i>
        </div>

        <div class="active-alert-info">

            <strong>${title}</strong>

            <span>${message}</span>

            <small>Just now</small>

        </div>
    `;


        // New alert at top
        alertList.prepend(alert);

        updateAlertCount();
    }



    // =====================================================
    // UPDATE ALERT COUNT
    // =====================================================

    function updateAlertCount() {

        const alerts =
            document.querySelectorAll(
                "#activeAlertsList .active-alert"
            );

        document.getElementById("activeAlertCount").innerHTML =
            alerts.length;
    }



    // =====================================================
    // TEMPERATURE
    // =====================================================

    async function updateTemperature() {

        try {

            const response =
                await fetch("http://10.207.67.101/temperature");

            const data = await response.text();


            // Display temperature
            document.getElementById("tempValue").innerHTML =
                data + "°C";


            const temperature =
                parseFloat(data);



            // =============================================
            // TEMPERATURE GRAPH
            // =============================================

            if (window.temperatureChart) {

                const now = new Date();

                const time =
                    now.getHours().toString().padStart(2, "0") + ":" +
                    now.getMinutes().toString().padStart(2, "0") + ":" +
                    now.getSeconds().toString().padStart(2, "0");


                window.temperatureChart.data.labels.push(time);

                window.temperatureChart.data.datasets[0].data.push(
                    temperature
                );


                // Keep only 20 records
                if (
                    window.temperatureChart.data.labels.length > 20
                ) {

                    window.temperatureChart.data.labels.shift();

                    window.temperatureChart.data.datasets[0].data.shift();

                }


                window.temperatureChart.update();

            }



            // =============================================
            // TEMPERATURE ALERT
            // =============================================

            const temperatureLimit = 35;


            if (temperature > temperatureLimit) {

                // Alert only once
                if (!temperatureAlertActive) {

                    addAlert(
                        "High Temperature",
                        "Temperature reached " +
                        temperature.toFixed(1) +
                        "°C",
                        "bi-thermometer-high"
                    );


                    // Recent Activity
                    addActivity(
                        "bi-thermometer-high",
                        "text-danger",
                        "High Temperature Detected"
                    );


                    temperatureAlertActive = true;
                }

            }
            else {

                temperatureAlertActive = false;

            }

        }
        catch {

            document.getElementById("tempValue").innerHTML =
                "Offline";

        }

    }


    setInterval(updateTemperature, 1000);

    updateTemperature();



    // =====================================================
    // HUMIDITY
    // =====================================================

    async function updateHumidity() {

        try {

            const response =
                await fetch("http://10.207.67.101/humidity");

            const data = await response.text();


            document.getElementById("humidityValue").innerHTML =
                data + "%";

            document.getElementById("humidityValue1").innerHTML =
                data + "%";

        }
        catch {

            document.getElementById("humidityValue").innerHTML =
                "Offline";

            document.getElementById("humidityValue1").innerHTML =
                "Offline";

        }

    }


    setInterval(updateHumidity, 1000);

    updateHumidity();



    // =====================================================
    // AUTO MODE
    // =====================================================

    async function enableAuto() {

        try {

            const response =
                await fetch("http://10.207.67.101/auto");


            document.getElementById("modeStatus").innerHTML =
                "AUTO";


            const data = await response.text();

            console.log(data);


            updateBulb();

            updatePIR();

        }
        catch {

            alert("ESP32 Offline");

        }

    }



    // =====================================================
    // SMOKE VALUE
    // =====================================================

    async function updateSmoke() {

        try {

            const response =
                await fetch("http://10.207.67.101/smoke");

            const data = await response.text();


            // Display smoke value
            document.getElementById("smokeValue").innerHTML =
                data;


            const smoke =
                parseFloat(data);


            // =============================================
            // SMOKE ALERT
            // =============================================

            const smokeLimit = 800;


            if (smoke > smokeLimit) {

                // Alert only once
                if (!smokeAlertActive) {

                    addAlert(
                        "High Smoke Detected",
                        "Smoke level is above the safe limit",
                        "bi-exclamation-triangle-fill"
                    );


                    // Recent Activity
                    addActivity(
                        "bi-exclamation-triangle-fill",
                        "text-danger",
                        "High Smoke Detected"
                    );


                    smokeAlertActive = true;
                }

            }
            else {

                smokeAlertActive = false;

            }

        }
        catch {

            document.getElementById("smokeValue").innerHTML =
                "Offline";

        }

    }


    setInterval(updateSmoke, 1000);

    updateSmoke();



    // =====================================================
    // SMOKE STATUS
    // =====================================================

    async function updateSmokeStatus() {

        try {

            const response =
                await fetch("http://10.207.67.101/smokestatus");

            const data = await response.text();


            document.getElementById("smokeStatus").innerHTML =
                data;


            if (data == "Smoke Detected") {

                document.getElementById("smokeStatus").style.color =
                    "red";


                // Recent Activity only when status changes
                if (previousSmokeStatus != "detected") {

                    addActivity(
                        "bi-exclamation-triangle-fill",
                        "text-danger",
                        "Smoke Detected"
                    );

                    previousSmokeStatus = "detected";
                }

            }
            else {

                document.getElementById("smokeStatus").style.color =
                    "limegreen";


                if (previousSmokeStatus == "detected") {

                    addActivity(
                        "bi-cloud-check-fill",
                        "text-primary",
                        "Smoke Level Normal"
                    );
                }


                previousSmokeStatus = "normal";
            }

        }
        catch {

            document.getElementById("smokeStatus").innerHTML =
                "ESP32 Offline";

        }

    }


    setInterval(updateSmokeStatus, 1000);

    updateSmokeStatus();

    async function refreshDevice() {

        event.preventDefault();
        event.stopPropagation();

        const online = await badge_check();

        await Promise.all([
            updateTemperature(),
            updateHumidity(),
            updateSmoke(),
            updateSmokeStatus(),
            updatePIR(),
            updateBulb()
        ]);

        if (online) {

            Swal.fire({
                icon: "success",
                title: "Device Refreshed",
                text: "ESP32 data has been updated successfully.",
                timer: 1500,
                showConfirmButton: false
            });

        }
        else {

            Swal.fire({
                icon: "error",
                title: "ESP32 Offline",
                text: "Device could not be refreshed."
            });

        }
    }

    // =====================================================
    // ESP32 ONLINE / OFFLINE BADGE
    // =====================================================

    // =====================================================
    // ESP32 DEVICE STATUS
    // =====================================================

    let previousESP32Status = "";

    async function badge_check() {

        try {

            const response = await fetch(
                "http://10.207.67.101/smoke"
            );

            // ESP32 Connected
            document.getElementById("refresh_status").innerHTML =
                "🟢 Connected";

            refresh_status.classList.remove("status-offline");
            refresh_status.classList.add("status-online");

            document.getElementById("badge_text").innerHTML =
                "ONLINE";

            document.getElementById("wifiStatus").innerHTML =
                "WIFI :Connected";

            document.getElementById("ipAddress").innerHTML =
                "IP :10.207.67.101";

            document.getElementById("lastUpdate").innerHTML =
                "Just now";


            // Recent Activity
            if (previousESP32Status !== "online") {

                addActivity(
                    "bi-wifi",
                    "text-success",
                    "ESP32 Connected"
                );

                previousESP32Status = "online";
            }

            return true;

        }
        catch {

            // ESP32 Disconnected
            document.getElementById("refresh_status").innerHTML =
                "🔴 Disconnected";

            refresh_status.classList.remove("status-online");
            refresh_status.classList.add("status-offline");
          

            document.getElementById("badge_text").innerHTML =
                "OFFLINE";

            document.getElementById("wifiStatus").innerHTML =
                "WIFI :Disconnected";

            document.getElementById("ipAddress").innerHTML =
                "Unavailable";

            document.getElementById("lastUpdate").innerHTML =
                "Unavailable";


            // Recent Activity
            if (previousESP32Status === "online") {

                addActivity(
                    "bi-wifi-off",
                    "text-danger",
                    "ESP32 Disconnected"
                );
            }

            previousESP32Status = "offline";

            return false;
        }
    }


    // Check every second
    setInterval(badge_check, 1000);

    // Check immediately when page loads
    badge_check();

    setInterval(badge_check, 1000);
    updateAlertCount();

    badge_check();


    // =====================================================
    // INITIAL CALLS
    // =====================================================

    
