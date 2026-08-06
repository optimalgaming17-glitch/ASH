/* ===========================================
      ASH INNOVATIES SMART BULB
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const bulbBtn = document.getElementById("toggleBulb");
    const bulbStatus = document.getElementById("bulbStatus");
    const brightness = document.getElementById("brightness");
    const brightnessValue = document.getElementById("brightnessValue");
    const bulbColor = document.getElementById("bulbColor");
    const colorHex = document.getElementById("colorHex");

    let bulbOn = true;

    /* ==========================
        BULB ON OFF
    ========================== */

    if (bulbBtn) {

        bulbBtn.addEventListener("click", function () {

            bulbOn = !bulbOn;

            if (bulbOn) {

                bulbStatus.innerHTML = "ON";

                bulbStatus.style.color = "#4F7CFF";

                bulbBtn.innerHTML = "Turn OFF";

                bulbBtn.classList.remove("btn-success");

                bulbBtn.classList.add("btn-primary");

                showToast("Bulb Turned ON 💡");

            }

            else {

                bulbStatus.innerHTML = "OFF";

                bulbStatus.style.color = "#EF4444";

                bulbBtn.innerHTML = "Turn ON";

                bulbBtn.classList.remove("btn-primary");

                bulbBtn.classList.add("btn-success");

                showToast("Bulb Turned OFF");

            }

        });

    }

    /* ==========================
        BRIGHTNESS
    ========================== */

    if (brightness) {

        brightness.addEventListener("input", function () {

            brightnessValue.innerHTML =
                brightness.value + "%";

        });

    }

    /* ==========================
        COLOR PICKER
    ========================== */

    if (bulbColor) {

        bulbColor.addEventListener("input", function () {

            colorHex.innerHTML = bulbColor.value.toUpperCase();

            bulbStatus.style.color = bulbColor.value;

        });

    }

});

/* ==========================
        TOAST
========================== */

function showToast(message) {

    let toast = document.createElement("div");

    toast.className = "toast-box";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 500);

    }, 2500);

}

/* ===========================================
        LOCAL STORAGE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const brightness = document.getElementById("brightness");
    const brightnessValue = document.getElementById("brightnessValue");

    const bulbColor = document.getElementById("bulbColor");
    const colorHex = document.getElementById("colorHex");

    const onTime = document.getElementById("onTime");
    const offTime = document.getElementById("offTime");

    /* ==========================
        LOAD SETTINGS
    ========================== */

    if (localStorage.getItem("brightness")) {

        brightness.value =
            localStorage.getItem("brightness");

        brightnessValue.innerHTML =
            brightness.value + "%";

    }

    if (localStorage.getItem("bulbColor")) {

        bulbColor.value =
            localStorage.getItem("bulbColor");

        colorHex.innerHTML =
            bulbColor.value.toUpperCase();

    }

    if (localStorage.getItem("onTime")) {

        onTime.value =
            localStorage.getItem("onTime");

    }

    if (localStorage.getItem("offTime")) {

        offTime.value =
            localStorage.getItem("offTime");

    }

    /* ==========================
        SAVE BRIGHTNESS
    ========================== */

    brightness.addEventListener("change", function () {

        localStorage.setItem(
            "brightness",
            brightness.value
        );

        showToast("Brightness Saved");

    });

    /* ==========================
        SAVE COLOR
    ========================== */

    bulbColor.addEventListener("change", function () {

        localStorage.setItem(
            "bulbColor",
            bulbColor.value
        );

        showToast("Bulb Color Saved");

    });

    /* ==========================
        SAVE TIME
    ========================== */

    document.querySelector(".schedule-card button")
        .addEventListener("click", function () {

            localStorage.setItem(
                "onTime",
                onTime.value
            );

            localStorage.setItem(
                "offTime",
                offTime.value
            );

            showToast("Schedule Saved Successfully");

        });

});

/* ===========================================
      ENERGY ANIMATION
=========================================== */

const energy = document.querySelector(".energy-card h1");

if (energy) {

    let power = 12.6;

    setInterval(function () {

        power += (Math.random() * 0.20);

        energy.innerHTML =
            power.toFixed(1) + " kWh";

    }, 6000);

}

/* ===========================================
      RANDOM BULB STATUS
=========================================== */

const bulb = document.getElementById("bulbStatus");

if (bulb) {

    setInterval(function () {

        bulb.style.textShadow =

            "0 0 20px " + bulb.style.color;

    }, 1200);

}

/* ===========================================
      SMOOTH BRIGHTNESS
=========================================== */

const slider = document.getElementById("brightness");

if (slider) {

    slider.addEventListener("input", function () {

        const glow = (slider.value / 100) * 40;

        document.querySelector(".power-card")
            .style.boxShadow =

            "0 0 " + glow + "px rgba(79,124,255,.35)";

    });

}

/* ===========================================
BULB GLOW EFFECT
=========================================== */

const bulbTitle = document.getElementById("bulbStatus");

function updateBulbGlow() {

    if (!bulbTitle) return;

    if (bulbTitle.innerHTML === "ON") {

        bulbTitle.style.textShadow =
            "0 0 15px currentColor, 0 0 35px currentColor";

    } else {

        bulbTitle.style.textShadow = "none";

    }

}

setInterval(updateBulbGlow, 500);

/* ===========================================
        LIVE RGB PREVIEW
=========================================== */

const colorPicker = document.getElementById("bulbColor");

if (colorPicker) {

    colorPicker.addEventListener("input", function () {

        document.querySelector(".color-card").style.boxShadow =
            "0 0 35px " + colorPicker.value;

    });

}

/* ===========================================
        FAKE LIVE POWER USAGE
=========================================== */

const energyText = document.querySelector(".energy-card p");

if (energyText) {

    setInterval(function () {

        const watt = Math.floor(Math.random() * 6) + 8;

        energyText.innerHTML =
            "Current Consumption : " + watt + " W";

    }, 3000);

}

/* ===========================================
        ACTIVITY LOG
=========================================== */

const activityList = document.querySelector(".activity-card ul");

function addActivity(message) {

    if (!activityList) return;

    const li = document.createElement("li");

    const now = new Date().toLocaleTimeString();

    li.innerHTML =
        message +
        "<span>" +
        now +
        "</span>";

    activityList.prepend(li);

    while (activityList.children.length > 6) {

        activityList.removeChild(activityList.lastChild);

    }

}

setInterval(function () {

    const logs = [

        "💡 Brightness Updated",

        "🎨 Color Changed",

        "⚡ Energy Checked",

        "📡 ESP32 Connected",

        "📅 Schedule Synced"

    ];

    addActivity(

        logs[Math.floor(Math.random() * logs.length)]

    );

}, 10000);

/* ===========================================
        FLOATING CARD
=========================================== */

document.addEventListener("mousemove", function (e) {

    document.querySelectorAll(

        ".power-card,.brightness-card,.color-card,.energy-card,.schedule-card,.activity-card"

    ).forEach(function (card) {

        let x = (window.innerWidth / 2 - e.clientX) / 90;

        let y = (window.innerHeight / 2 - e.clientY) / 90;

        card.style.transform =
            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    });

});

document.addEventListener("mouseleave", function () {

    document.querySelectorAll(

        ".power-card,.brightness-card,.color-card,.energy-card,.schedule-card,.activity-card"

    ).forEach(function (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    });

});

/* ===========================================
        AUTO STATUS TOAST
=========================================== */

setInterval(function () {

    showToast("ESP32 Connected Successfully");

}, 30000);

/* ===========================================
        WELCOME MESSAGE
=========================================== */

setTimeout(function () {

    showToast("Welcome to Smart Bulb Module 💡");

}, 1200);

/* ===========================================
        CONSOLE
=========================================== */

console.log(
    "%cASH INNOVATIES - SMART BULB MODULE",
    "color:#4F7CFF;font-size:22px;font-weight:bold;"
);

console.log(
    "%cSmart Bulb Loaded Successfully",
    "color:#35C759;font-size:14px;"
);

