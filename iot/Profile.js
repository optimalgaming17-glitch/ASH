/* ===========================================
        ASH INNOVATIES
        PROFILE MODULE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const profileImage = document.querySelector(".profile-image");
    const saveBtn = document.querySelector(".btn-primary");
    const changePasswordBtn = document.querySelector(".security-card .btn-primary");
    const inputs = document.querySelectorAll(".form-control");

    /* ===========================================
            PROFILE IMAGE
    =========================================== */

    if (profileImage) {

        profileImage.addEventListener("click", function () {

            showToast("📷 Select New Profile Photo");

        });

    }

    /* ===========================================
            SAVE PROFILE
    =========================================== */

    if (saveBtn) {

        saveBtn.addEventListener("click", function () {

            showToast("✅ Profile Updated Successfully");

        });

    }

    /* ===========================================
            CHANGE PASSWORD
    =========================================== */

    if (changePasswordBtn) {

        changePasswordBtn.addEventListener("click", function () {

            showToast("🔐 Redirecting to Password Settings...");

        });

    }

    /* ===========================================
            INPUT EFFECT
    =========================================== */

    inputs.forEach(function (input) {

        input.addEventListener("focus", function () {

            this.style.transform = "scale(1.02)";

        });

        input.addEventListener("blur", function () {

            this.style.transform = "scale(1)";

        });

    });

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
        LOCAL STORAGE SAVE
=========================================== */

const profileInputs = document.querySelectorAll(".form-control");

function saveProfile() {

    profileInputs.forEach(function (input) {

        const key = input.previousElementSibling ?
            input.previousElementSibling.innerText :
            input.placeholder;

        localStorage.setItem(key, input.value);

    });

    showToast("💾 Profile Saved");

}

/* ===========================================
        LOAD PROFILE
=========================================== */

window.addEventListener("load", function () {

    profileInputs.forEach(function (input) {

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
        SAVE BUTTON
=========================================== */

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        saveProfile();

    });

}

/* ===========================================
        VALIDATION
=========================================== */

profileInputs.forEach(function (input) {

    input.addEventListener("blur", function () {

        if (this.value.trim() === "") {

            this.style.borderColor = "#EF4444";

            showToast("⚠️ " + this.previousElementSibling.innerText + " is required");

        }

        else {

            this.style.borderColor = "#35C759";

        }

    });

});

/* ===========================================
        ENABLE 2FA
=========================================== */

const twoFABtn = document.querySelector(".btn-warning");

if (twoFABtn) {

    twoFABtn.addEventListener("click", function () {

        showToast("🛡 Two-Factor Authentication Enabled");

    });

}

/* ===========================================
        LIVE ACCOUNT STATUS
=========================================== */

const accountInfo = document.querySelector(".security-card p");

if (accountInfo) {

    setInterval(function () {

        accountInfo.innerHTML = "🟢 Account Status : Active";

        setTimeout(function () {

            accountInfo.innerHTML = "January 2026";

        }, 3000);

    }, 12000);

}

/* ===========================================
        INPUT CLICK EFFECT
=========================================== */

profileInputs.forEach(function (input) {

    input.addEventListener("click", function () {

        this.style.transition = ".25s";

        this.style.boxShadow = "0 0 12px rgba(79,124,255,.25)";

        setTimeout(() => {

            this.style.boxShadow = "";

        }, 300);

    });

});

/* ===========================================
PROFILE IMAGE PREVIEW
=========================================== */

const profileImg = document.querySelector(".profile-image");

if (profileImg) {

    profileImg.addEventListener("click", function () {

        this.style.transform = "scale(1.08)";

        this.style.transition = ".35s";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 300);

    });

}

/* ===========================================
        FLOATING CARD EFFECT
=========================================== */

document.addEventListener("mousemove", function (e) {

    document.querySelectorAll(

        ".profile-card,.details-card,.security-card"

    ).forEach(function (card) {

        const x = (window.innerWidth / 2 - e.clientX) / 110;

        const y = (window.innerHeight / 2 - e.clientY) / 110;

        card.style.transform =

            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    });

});

document.addEventListener("mouseleave", function () {

    document.querySelectorAll(

        ".profile-card,.details-card,.security-card"

    ).forEach(function (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    });

});

/* ===========================================
        PROFILE TITLE ANIMATION
=========================================== */

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    setInterval(function () {

        heroTitle.style.transform = "scale(1.02)";

        setTimeout(function () {

            heroTitle.style.transform = "scale(1)";

        }, 250);

    }, 4000);

}

/* ===========================================
        AUTO SAVE REMINDER
=========================================== */

setInterval(function () {

    showToast("💾 Don't forget to save profile changes.");

}, 45000);

/* ===========================================
        WELCOME MESSAGE
=========================================== */

setTimeout(function () {

    showToast("👤 Welcome to Your Profile");

}, 1200);

/* ===========================================
        ONLINE ACCOUNT STATUS
=========================================== */

const roleField = document.querySelectorAll(".form-control")[3];

if (roleField) {

    setInterval(function () {

        roleField.value = "Administrator • Online";

        setTimeout(function () {

            roleField.value = "Administrator";

        }, 3000);

    }, 15000);

}

/* ===========================================
        CONSOLE BRANDING
=========================================== */

console.log(

    "%cASH INNOVATIES",

    "color:#4F7CFF;font-size:22px;font-weight:bold;"

);

console.log(

    "%cProfile Module Loaded Successfully",

    "color:#35C759;font-size:14px;"

);