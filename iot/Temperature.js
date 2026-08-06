/* ===========================================
        ASH INNOVATIES
        TEMPERATURE MODULE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const liveTemp = document.getElementById("liveTemp");
    const alertStatus = document.getElementById("alertStatus");
    const lastSync = document.getElementById("lastSync");
    const updateTime = document.getElementById("updateTime");

    let currentTemp = 29;

    /* ===========================================
            LIVE TEMPERATURE
    =========================================== */

    function updateTemperature() {

        currentTemp = Math.floor(Math.random() * 8) + 27;

        liveTemp.innerHTML = currentTemp + "°C";

        if (currentTemp >= 35) {

            liveTemp.style.color = "#EF4444";

            alertStatus.innerHTML = "HIGH";

            alertStatus.style.color = "#EF4444";

        }

        else if (currentTemp >= 32) {

            liveTemp.style.color = "#FFB648";

            alertStatus.innerHTML = "WARNING";

            alertStatus.style.color = "#FFB648";

        }

        else {

            liveTemp.style.color = "#4F7CFF";

            alertStatus.innerHTML = "NORMAL";

            alertStatus.style.color = "#35C759";

        }

    }

    setInterval(updateTemperature, 3000);

    /* ===========================================
            LAST UPDATED
    =========================================== */

    function updateClock() {

        const now = new Date();

        updateTime.innerHTML =

            now.toLocaleTimeString();

        lastSync.innerHTML =

            "Just Now";

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

const chartCanvas = document.getElementById("tempChart");

let tempChart;

if (chartCanvas) {

    const ctx = chartCanvas.getContext("2d");

    tempChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: ["1", "2", "3", "4", "5", "6", "7"],

            datasets: [{

                label: "Temperature",

                data: [28, 29, 30, 29, 31, 30, 29],

                borderColor: "#4F7CFF",

                backgroundColor: "rgba(79,124,255,.15)",

                fill: true,

                tension: .45,

                borderWidth: 4,

                pointRadius: 4

            }]

        },

        options: {

            responsive: true,

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
        UPDATE CHART
=========================================== */

function updateChart(temp) {

    if (!tempChart) return;

    tempChart.data.datasets[0].data.shift();

    tempChart.data.datasets[0].data.push(temp);

    tempChart.update();

}

/* ===========================================
        ESP32 STATUS
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
        LIVE TEMPERATURE HISTORY
=========================================== */

setInterval(function () {

    let temp = Math.floor(Math.random() * 8) + 27;

    updateChart(temp);

}, 3000);

/* ===========================================
        SMART ALERT
=========================================== */

setInterval(function () {

    const value = parseInt(document.getElementById("liveTemp").innerHTML);

    if (value >= 35) {

        showToast("🔥 High Temperature Detected");

    }

    else if (value >= 32) {

        showToast("⚠ Temperature Rising");

    }

}, 6000);


/* ===========================================
    TEMPERATURE COUNTER ANIMATION
=========================================== */

function animateTemperature(target) {

    const temp = document.getElementById("liveTemp");

    if (!temp) return;

    let value = 0;

    const timer = setInterval(function () {

        value++;

        temp.innerHTML = value + "°C";

        if (value >= target) {

            clearInterval(timer);

        }

    }, 25);

}

animateTemperature(29);

/* ===========================================
        AUTO MIN / MAX UPDATE
=========================================== */

const minValue = document.querySelector(".min-card h1");
const maxValue = document.querySelector(".max-card h1");

if (minValue && maxValue) {

    setInterval(function () {

        const min = Math.floor(Math.random() * 4) + 23;
        const max = Math.floor(Math.random() * 5) + 33;

        minValue.innerHTML = min + "°C";
        maxValue.innerHTML = max + "°C";

    }, 10000);

}

/* ===========================================
        FLOATING CARD EFFECT
=========================================== */

document.addEventListener("mousemove", function (e) {

    document.querySelectorAll(

        ".temperature-card,.min-card,.max-card,.graph-card,.esp-card,.update-card,.alert-card"

    ).forEach(function (card) {

        const x = (window.innerWidth / 2 - e.clientX) / 90;
        const y = (window.innerHeight / 2 - e.clientY) / 90;

        card.style.transform =

            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    });

});

document.addEventListener("mouseleave", function () {

    document.querySelectorAll(

        ".temperature-card,.min-card,.max-card,.graph-card,.esp-card,.update-card,.alert-card"

    ).forEach(function (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    });

});

/* ===========================================
        WELCOME TOAST
=========================================== */

setTimeout(function () {

    showToast("🌡 Temperature Module Loaded");

}, 1500);

/* ===========================================
        AUTO STATUS MESSAGE
=========================================== */

setInterval(function () {

    showToast("✅ ESP32 Temperature Synced");

}, 30000);

/* ===========================================
        CONSOLE BRANDING
=========================================== */

console.log(

    "%cASH INNOVATIES",

    "color:#4F7CFF;font-size:22px;font-weight:bold;"

);

console.log(

    "%cTemperature Monitoring Ready",

    "color:#35C759;font-size:14px;"

);