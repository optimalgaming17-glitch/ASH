/* ===========================================
        ASH INNOVATIES
        SMOKE DETECTION MODULE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const smokeLevel = document.getElementById("smokeLevel");
    const safeStatus = document.getElementById("safeStatus");
    const buzzerStatus = document.getElementById("buzzerStatus");
    const alertStatus = document.getElementById("alertStatus");
    const updateTime = document.getElementById("updateTime");
    const lastSync = document.getElementById("lastSync");

    let ppm = 124;

    /* ===========================================
            LIVE SMOKE LEVEL
    =========================================== */

    function updateSmoke() {

        ppm = Math.floor(Math.random() * 250) + 60;

        smokeLevel.innerHTML = ppm + " PPM";

        if (ppm >= 250) {

            safeStatus.innerHTML = "DANGER";
            safeStatus.style.color = "#EF4444";

            alertStatus.innerHTML = "EMERGENCY";
            alertStatus.style.color = "#EF4444";

            buzzerStatus.innerHTML = "ON";
            buzzerStatus.style.color = "#EF4444";

            smokeLevel.style.color = "#EF4444";

        }

        else if (ppm >= 180) {

            safeStatus.innerHTML = "WARNING";
            safeStatus.style.color = "#FFB648";

            alertStatus.innerHTML = "CHECK";
            alertStatus.style.color = "#FFB648";

            buzzerStatus.innerHTML = "OFF";
            buzzerStatus.style.color = "#FFB648";

            smokeLevel.style.color = "#FFB648";

        }

        else {

            safeStatus.innerHTML = "SAFE";
            safeStatus.style.color = "#35C759";

            alertStatus.innerHTML = "NORMAL";
            alertStatus.style.color = "#35C759";

            buzzerStatus.innerHTML = "OFF";
            buzzerStatus.style.color = "#35C759";

            smokeLevel.style.color = "#4F7CFF";

        }

    }

    setInterval(updateSmoke, 3000);

    /* ===========================================
            LIVE TIME
    =========================================== */

    function updateClock() {

        const now = new Date();

        updateTime.innerHTML =
            now.toLocaleTimeString();

        lastSync.innerHTML = "Just Now";

    }

    updateClock();

    setInterval(updateClock, 1000);

});

/* ===========================================
        TOAST
=========================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast-box";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(function () {

        toast.classList.add("show");

    }, 100);

    setTimeout(function () {

        toast.classList.remove("show");

        setTimeout(function () {

            toast.remove();

        }, 500);

    }, 2500);

}

/* ===========================================
        LIVE CHART.JS
=========================================== */

const smokeCanvas = document.getElementById("smokeChart");

let smokeChart;

if (smokeCanvas) {

    const ctx = smokeCanvas.getContext("2d");

    smokeChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: ["1", "2", "3", "4", "5", "6", "7"],

            datasets: [{

                label: "Smoke (PPM)",

                data: [120, 135, 140, 125, 150, 145, 130],

                borderColor: "#EF4444",

                backgroundColor: "rgba(239,68,68,.15)",

                fill: true,

                tension: .45,

                borderWidth: 4,

                pointRadius: 4,

                pointBackgroundColor: "#EF4444"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

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
        UPDATE GRAPH
=========================================== */

function updateSmokeChart(value) {

    if (!smokeChart) return;

    smokeChart.data.datasets[0].data.shift();

    smokeChart.data.datasets[0].data.push(value);

    smokeChart.update();

}

/* ===========================================
        ESP32 CONNECTION
=========================================== */

const espStatus = document.querySelector(".status-online");

if (espStatus) {

    setInterval(function () {

        espStatus.innerHTML = "🟡 Syncing...";

        espStatus.style.background = "#FFB648";

        setTimeout(function () {

            espStatus.innerHTML = "🟢 Connected";

            espStatus.style.background = "#35C759";

        }, 1200);

    }, 8000);

}

/* ===========================================
        LIVE HISTORY
=========================================== */

setInterval(function () {

    let value = Math.floor(Math.random() * 250) + 60;

    updateSmokeChart(value);

}, 3000);

/* ===========================================
        EMERGENCY ALERT
=========================================== */

setInterval(function () {

    const value = parseInt(

        document.getElementById("smokeLevel").innerHTML

    );

    if (value >= 250) {

        showToast("🚨 DANGER! Heavy Smoke Detected");

    }

    else if (value >= 180) {

        showToast("⚠ Smoke Level Increasing");

    }

}, 6000);

/* ===========================================
        AUTO REFRESH SYNC
=========================================== */

setInterval(function () {

    const sync = document.getElementById("lastSync");

    if (sync) {

        sync.innerHTML = "Just Now";

    }

}, 3000);

/* ===========================================
SMOKE COUNTER ANIMATION
=========================================== */

function animateSmoke(target) {

    const smoke = document.getElementById("smokeLevel");

    if (!smoke) return;

    let value = 0;

    const timer = setInterval(function () {

        value += 5;

        smoke.innerHTML = value + " PPM";

        if (value >= target) {

            clearInterval(timer);

            smoke.innerHTML = target + " PPM";

        }

    }, 20);

}

animateSmoke(124);

/* ===========================================
        BUZZER FLASH EFFECT
=========================================== */

const buzzer = document.getElementById("buzzerStatus");

setInterval(function () {

    if (!buzzer) return;

    if (buzzer.innerHTML === "ON") {

        buzzer.style.opacity = "0.3";

        setTimeout(function () {

            buzzer.style.opacity = "1";

        }, 300);

    }

}, 600);

/* ===========================================
        DANGER CARD GLOW
=========================================== */

setInterval(function () {

    const safe = document.getElementById("safeStatus");
    const card = document.querySelector(".safe-card");

    if (!safe || !card) return;

    if (safe.innerHTML === "DANGER") {

        card.style.boxShadow =
            "0 0 35px rgba(239,68,68,.45)";

    }

    else if (safe.innerHTML === "WARNING") {

        card.style.boxShadow =
            "0 0 30px rgba(255,182,72,.35)";

    }

    else {

        card.style.boxShadow =
            "0 0 25px rgba(53,199,89,.25)";

    }

}, 1000);

/* ===========================================
        FLOATING CARDS
=========================================== */

document.addEventListener("mousemove", function (e) {

    document.querySelectorAll(

        ".smoke-card,.safe-card,.buzzer-card,.graph-card,.esp-card,.alert-card,.update-card"

    ).forEach(function (card) {

        const x = (window.innerWidth / 2 - e.clientX) / 90;
        const y = (window.innerHeight / 2 - e.clientY) / 90;

        card.style.transform =
            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    });

});

document.addEventListener("mouseleave", function () {

    document.querySelectorAll(

        ".smoke-card,.safe-card,.buzzer-card,.graph-card,.esp-card,.alert-card,.update-card"

    ).forEach(function (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    });

});

/* ===========================================
        WELCOME TOAST
=========================================== */

setTimeout(function () {

    showToast("💨 Smoke Detection Module Loaded");

}, 1500);

/* ===========================================
        ESP32 AUTO STATUS
=========================================== */

setInterval(function () {

    showToast("📡 ESP32 Smoke Sensor Synced");

}, 30000);

/* ===========================================
        CONSOLE BRANDING
=========================================== */

console.log(

    "%cASH INNOVATIES",

    "color:#EF4444;font-size:22px;font-weight:bold;"

);

console.log(

    "%cSmoke Detection Ready",

    "color:#35C759;font-size:14px;"

);