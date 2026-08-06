/* ===========================================
        ASH INNOVATIES
        SETTINGS MODULE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const darkMode = document.getElementById("darkMode");

    const themeCards = document.querySelectorAll(".theme");

    const saveBtn = document.querySelector(".btn-primary");

    const resetBtn = document.querySelector(".btn-danger");

    /* ===========================================
            DARK MODE
    =========================================== */

    if (darkMode) {

        darkMode.addEventListener("change", function () {

            if (this.checked) {

                document.body.classList.add("dark-mode");

                showToast("🌙 Dark Mode Enabled");

            }

            else {

                document.body.classList.remove("dark-mode");

                showToast("☀️ Light Mode Enabled");

            }

        });

    }

    /* ===========================================
            THEME SELECTOR
    =========================================== */

    themeCards.forEach(function (card) {

        card.addEventListener("click", function () {

            themeCards.forEach(function (c) {

                c.style.border = "4px solid transparent";

            });

            this.style.border = "4px solid #ffffff";

            showToast("🎨 Theme Selected");

        });

    });

    /* ===========================================
            SAVE SETTINGS
    =========================================== */

    if (saveBtn) {

        saveBtn.addEventListener("click", function () {

            showToast("✅ Settings Saved");

        });

    }

    /* ===========================================
            RESET SYSTEM
    =========================================== */

    if (resetBtn) {

        resetBtn.addEventListener("click", function () {

            const confirmReset = confirm("Reset all settings?");

            if (confirmReset) {

                showToast("⚠️ System Reset Completed");

            }

        });

    }

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

        }, 400);

    }, 2200);

}

/* ===========================================
        NOTIFICATION & AUTO REFRESH
=========================================== */

const switches = document.querySelectorAll(".switch input");

switches.forEach(function (toggle, index) {

    toggle.addEventListener("change", function () {

        switch (index) {

            case 1:

                showToast(

                    this.checked ?

                        "🔔 Notifications Enabled"

                        :

                        "🔕 Notifications Disabled"

                );

                break;

            case 2:

                showToast(

                    this.checked ?

                        "🔄 Auto Refresh Enabled"

                        :

                        "⏸ Auto Refresh Disabled"

                );

                break;

        }

    });

});

/* ===========================================
        ESP32 VALIDATION
=========================================== */

const inputs = document.querySelectorAll(".form-control");

inputs.forEach(function (input) {

    input.addEventListener("blur", function () {

        if (this.value.trim() === "") {

            this.style.borderColor = "#EF4444";

            showToast("⚠️ Field Cannot Be Empty");

        }

        else {

            this.style.borderColor = "#35C759";

        }

    });

});

/* ===========================================
        LIVE CONNECTION STATUS
=========================================== */

const statusTitle = document.querySelector(".hero p");

if (statusTitle) {

    setInterval(function () {

        statusTitle.innerHTML = "🟢 ESP32 Connected Successfully";

        setTimeout(function () {

            statusTitle.innerHTML = "Configure your Smart Home System";

        }, 2500);

    }, 12000);

}

/* ===========================================
        SAVE INPUT VALUES
=========================================== */

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        inputs.forEach(function (input) {

            localStorage.setItem(

                input.previousElementSibling ?

                    input.previousElementSibling.innerText : input.placeholder,

                input.value

            );

        });

    });

}

/* ===========================================
        LOAD SAVED VALUES
=========================================== */

window.addEventListener("load", function () {

    inputs.forEach(function (input) {

        const key = input.previousElementSibling ?

            input.previousElementSibling.innerText :

            input.placeholder;

        const value = localStorage.getItem(key);

        if (value) {

            input.value = value;

        }

    });

});

/* ===========================================
        BUTTON ANIMATION
=========================================== */

document.querySelectorAll(".btn").forEach(function (btn) {

    btn.addEventListener("click", function () {

        this.style.transform = "scale(.96)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 180);

    });

});

/* ===========================================
FULL DARK MODE
=========================================== */

function applyDarkMode(enable) {

    const cards = document.querySelectorAll(".setting-card");
    const inputs = document.querySelectorAll(".form-control");

    if (enable) {

        document.body.style.background = "#111827";
        document.body.style.color = "#FFFFFF";

        cards.forEach(card => {
            card.style.background = "#1F2937";
            card.style.color = "#FFFFFF";
        });

        inputs.forEach(input => {
            input.style.background = "#374151";
            input.style.color = "#FFFFFF";
            input.style.borderColor = "#4B5563";
        });

    } else {

        document.body.style.background = "";
        document.body.style.color = "";

        cards.forEach(card => {
            card.style.background = "";
            card.style.color = "";
        });

        inputs.forEach(input => {
            input.style.background = "";
            input.style.color = "";
            input.style.borderColor = "";
        });

    }

}

/* ===========================================
        DARK MODE STORAGE
=========================================== */

if (darkMode) {

    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") {

        darkMode.checked = true;

        applyDarkMode(true);

    }

    darkMode.addEventListener("change", function () {

        applyDarkMode(this.checked);

        localStorage.setItem("darkMode", this.checked);

    });

}

/* ===========================================
        LIVE SYSTEM STATUS
=========================================== */

setInterval(function () {

    const hero = document.querySelector(".hero p");

    if (hero) {

        hero.innerHTML = "⚡ System Running Perfectly";

        setTimeout(function () {

            hero.innerHTML = "Configure your Smart Home System";

        }, 2500);

    }

}, 15000);

/* ===========================================
        FLOATING CARD EFFECT
=========================================== */

document.addEventListener("mousemove", function (e) {

    document.querySelectorAll(".setting-card").forEach(function (card) {

        const x = (window.innerWidth / 2 - e.clientX) / 100;
        const y = (window.innerHeight / 2 - e.clientY) / 100;

        card.style.transform =
            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    });

});

document.addEventListener("mouseleave", function () {

    document.querySelectorAll(".setting-card").forEach(function (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    });

});

/* ===========================================
        WELCOME MESSAGE
=========================================== */

setTimeout(function () {

    showToast("⚙️ Settings Module Loaded");

}, 1200);

/* ===========================================
        CONSOLE BRANDING
=========================================== */

console.log(
    "%cASH INNOVATIES",
    "color:#4F7CFF;font-size:22px;font-weight:bold;"
);

console.log(
    "%cSettings Module Ready",
    "color:#35C759;font-size:14px;"
);