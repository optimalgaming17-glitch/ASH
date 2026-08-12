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

    /* ===========================================
            AI TYPING EFFECT
    =========================================== */

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


    async function updatePIR() {

        try {

            const response = await fetch("http://10.207.67.101/motion");

    const data = await response.text();

               document.getElementById("pirStatus").innerHTML = data;

           }
    catch {

        document.getElementById("pirStatus").innerHTML = "ESP32 Offline";

           }

       }

   setInterval(updatePIR, 3000);

    updatePIR();



async function bulbON() {

    await fetch("http://10.207.67.101/bulbon");
    document.getElementById("modeStatus").innerHTML = "MANUAL";

    updateBulb();

}

async function bulbOFF() {

    await fetch("http://10.207.67.101/bulboff");
    document.getElementById("modeStatus").innerHTML = "MANUAL";

    updateBulb();

}

async function updateBulb() {

    try {

        const response = await fetch("http://10.207.67.101/bulbstatus");

        const data = await response.text();

        document.getElementById("bulbStatus").innerHTML = data;

    }
    catch {

        document.getElementById("bulbStatus").innerHTML = "ESP32 Offline";

    }

}
setInterval(updateBulb, 1000);

updateBulb();

async function updateTemperature() {

    try {

        const response = await fetch("http://10.207.67.101/temperature");

        const data = await response.text();

        document.getElementById("tempValue").innerHTML = data + "°C";

    } catch {

        document.getElementById("tempValue").innerHTML = "Offline";

    }

}

setInterval(updateTemperature, 1000);

updateTemperature();

async function updateHumidity() {

    try {

        const response = await fetch("http://10.207.67.101/humidity");

        const data = await response.text();

        document.getElementById("humidityValue").innerHTML = data + "%";
        document.getElementById("humidityValue1").innerHTML = data + "%";


    } catch {

        document.getElementById("humidityValue").innerHTML = "Offline";
        document.getElementById("humidityValue1").innerHTML = "Offline";


    }

}


setInterval(updateHumidity, 1000);

updateHumidity();


async function enableAuto() {

    try {

        const response = await fetch("http://10.207.67.101/auto");

        document.getElementById("modeStatus").innerHTML = "AUTO";
        const data = await response.text();

        console.log(data);

        updateBulb();
        updatePIR();

    }
    catch {

        alert("ESP32 Offline");

    }

}
async function updateSmoke() {

    try {

        const response = await fetch("http://10.207.67.101/smoke");

        const data = await response.text();

        document.getElementById("smokeValue").innerHTML = data;

    }
    catch {

        document.getElementById("smokeValue").innerHTML = "Offline";

    }

}

async function updateSmokeStatus() {

    try {

        const response = await fetch("http://10.207.67.101/smokestatus");

        const data = await response.text();

        document.getElementById("smokeStatus").innerHTML = data;

        if (data == "Smoke Detected") {

            document.getElementById("smokeStatus").style.color = "red";

        }
        else {

            document.getElementById("smokeStatus").style.color = "limegreen";

        }

    }
    catch {

        document.getElementById("smokeStatus").innerHTML = "ESP32 Offline";

    }

}

setInterval(updateSmoke, 1000);
setInterval(updateSmokeStatus, 1000);

updateSmoke();
updateSmokeStatus();

 
    async function badge_check()
    {

        try {

            const response = await fetch("http://10.207.67.101/smoke");

          
            document.getElementById("badge_text").innerHTML = "ONLINE";

        }
        catch {

            document.getElementById("badge_text").innerHTML = "OFFLINE";

        }

    }

    setInterval(badge_check, 1000);

    badge_check(); 