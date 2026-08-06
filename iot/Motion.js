/* ===========================================
        ASH INNOVATIES
        MOTION DETECTION MODULE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const motionStatus = document.getElementById("motionStatus");
    const personCount = document.getElementById("personCount");
    const securityStatus = document.getElementById("securityStatus");
    const alertStatus = document.getElementById("alertStatus");
    const updateTime = document.getElementById("updateTime");
    const lastMotion = document.getElementById("lastMotion");
    const lastSync = document.getElementById("lastSync");

    let count = 8;

    /* ===========================================
            LIVE MOTION
    =========================================== */

    function updateMotion() {

        const detected = Math.random() > 0.55;

        if (detected) {

            motionStatus.innerHTML = "MOTION";

            motionStatus.style.color = "#EF4444";

            securityStatus.innerHTML = "ACTIVE";

            securityStatus.style.color = "#FFB648";

            alertStatus.innerHTML = "PERSON DETECTED";

            alertStatus.style.color = "#EF4444";

            count++;

            personCount.innerHTML = count;

            lastMotion.innerHTML =
                new Date().toLocaleTimeString();

        }

        else {

            motionStatus.innerHTML = "NO MOTION";

            motionStatus.style.color = "#35C759";

            securityStatus.innerHTML = "SAFE";

            securityStatus.style.color = "#35C759";

            alertStatus.innerHTML = "NO ALERT";

            alertStatus.style.color = "#35C759";

        }

    }

    setInterval(updateMotion, 3000);

    /* ===========================================
            CLOCK
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
        LIVE MOTION GRAPH
=========================================== */

const motionCanvas = document.getElementById("motionChart");

let motionChart;

if (motionCanvas) {

    const ctx = motionCanvas.getContext("2d");

    motionChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: ["1", "2", "3", "4", "5", "6", "7"],

            datasets: [{

                label: "Motion Events",

                data: [0, 1, 0, 2, 1, 0, 3],

                borderColor: "#4F7CFF",

                backgroundColor: "rgba(79,124,255,.15)",

                fill: true,

                tension: .45,

                borderWidth: 4,

                pointRadius: 4,

                pointBackgroundColor: "#4F7CFF"

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

                    beginAtZero: true,

                    ticks: {

                        stepSize: 1

                    }

                }

            }

        }

    });

}

/* ===========================================
        UPDATE GRAPH
=========================================== */

function updateMotionChart(value) {

    if (!motionChart) return;

    motionChart.data.datasets[0].data.shift();

    motionChart.data.datasets[0].data.push(value);

    motionChart.update();

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
        LIVE MOTION HISTORY
=========================================== */

setInterval(function () {

    let event = Math.random() > 0.55 ? 1 : 0;

    updateMotionChart(event);

}, 3000);

/* ===========================================
        SECURITY ALERT
=========================================== */

setInterval(function () {

    const motion = document.getElementById("motionStatus");

    if (!motion) return;

    if (motion.innerHTML === "MOTION") {

        showToast("🚶 Motion Detected");

    }

}, 5000);

/* ===========================================
        AUTO SYNC
=========================================== */

setInterval(function () {

    const sync = document.getElementById("lastSync");

    if (sync) {

        sync.innerHTML = "Just Now";

    }

}, 3000);


/* ===========================================
        MOTION TEXT ANIMATION
=========================================== */

function animateMotionText() {

    const motion = document.getElementById("motionStatus");

    if (!motion) return;

    motion.style.transform = "scale(1.12)";

    setTimeout(function () {

        motion.style.transform = "scale(1)";

    }, 250);

}

setInterval(animateMotionText, 3000);

/* ===========================================
        PERSON COUNTER ANIMATION
=========================================== */

const personCounter = document.getElementById("personCount");

if (personCounter) {

    setInterval(function () {

        personCounter.style.transform = "scale(1.15)";

        personCounter.style.transition = ".3s";

        setTimeout(function () {

            personCounter.style.transform = "scale(1)";

        }, 300);

    }, 3000);

}

/* ===========================================
        SECURITY CARD GLOW
=========================================== */

setInterval(function () {

    const security = document.getElementById("securityStatus");

    const card = document.querySelector(".security-card");

    if (!security || !card) return;

    if (security.innerHTML === "ACTIVE") {

        card.style.boxShadow =
            "0 0 35px rgba(239,68,68,.45)";

    }

    else {

        card.style.boxShadow =
            "0 0 25px rgba(53,199,89,.25)";

    }

}, 1000);

/* ===========================================
        FLOATING CARD EFFECT
=========================================== */

document.addEventListener("mousemove", function (e) {

    document.querySelectorAll(

        ".motion-card,.count-card,.security-card,.graph-card,.esp-card,.lastmotion-card,.alert-card"

    ).forEach(function (card) {

        const x = (window.innerWidth / 2 - e.clientX) / 90;

        const y = (window.innerHeight / 2 - e.clientY) / 90;

        card.style.transform =
            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    });

});

document.addEventListener("mouseleave", function () {

    document.querySelectorAll(

        ".motion-card,.count-card,.security-card,.graph-card,.esp-card,.lastmotion-card,.alert-card"

    ).forEach(function (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    });

});

/* ===========================================
        WELCOME TOAST
=========================================== */

setTimeout(function () {

    showToast("🚶 Motion Detection Module Loaded");

}, 1500);

/* ===========================================
        ESP32 STATUS MESSAGE
=========================================== */

setInterval(function () {

    showToast("📡 ESP32 PIR Sensor Synced");

}, 30000);

/* ===========================================
        CONSOLE BRANDING
=========================================== */

console.log(

    "%cASH INNOVATIES",

    "color:#4F7CFF;font-size:22px;font-weight:bold;"

);

console.log(

    "%cMotion Detection Ready",

    "color:#35C759;font-size:14px;"

);