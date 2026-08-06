/* ===========================================
        ASH INNOVATIES
        LOGIN MODULE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const email = document.getElementById("txtEmail");
    const password = document.getElementById("txtPassword");
    const loginBtn = document.getElementById("loginBtn");
    const togglePassword = document.getElementById("togglePassword");

    /* ===========================================
            PASSWORD SHOW / HIDE
    =========================================== */

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            this.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';

        }
        else {

            password.type = "password";

            this.innerHTML = '<i class="bi bi-eye-fill"></i>';

        }

    });

    /* ===========================================
            LOGIN BUTTON
    =========================================== */

    loginBtn.addEventListener("click", function () {

        loginValidation();

    });

    /* ===========================================
            ENTER KEY LOGIN
    =========================================== */

    document.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            loginValidation();

        }

    });

});

/* ===========================================
        LOGIN VALIDATION
=========================================== */

function loginValidation() {

    const email = document.getElementById("txtEmail");
    const password = document.getElementById("txtPassword");

    if (email.value.trim() === "") {

        showToast("📧 Enter Email Address");

        email.focus();

        return;

    }

    if (password.value.trim() === "") {

        showToast("🔑 Enter Password");

        password.focus();

        return;

    }

    showToast("🔐 Checking Credentials...");

}

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
        REMEMBER ME
=========================================== */

const remember = document.getElementById("remember");

window.addEventListener("load", function () {

    const savedEmail = localStorage.getItem("login_email");
    const savedRemember = localStorage.getItem("remember_me");

    if (savedRemember === "true") {

        remember.checked = true;

        document.getElementById("txtEmail").value = savedEmail || "";

    }

});

/* ===========================================
        SAVE REMEMBER DATA
=========================================== */

function saveRememberData() {

    const email = document.getElementById("txtEmail").value;

    if (remember.checked) {

        localStorage.setItem("login_email", email);

        localStorage.setItem("remember_me", "true");

    }
    else {

        localStorage.removeItem("login_email");

        localStorage.removeItem("remember_me");

    }

}

/* ===========================================
        LOADING LOGIN
=========================================== */

function loginLoading() {

    const btn = document.getElementById("loginBtn");

    btn.disabled = true;

    btn.innerHTML = '<i class="bi bi-arrow-repeat"></i> Logging In...';

    setTimeout(function () {

        btn.disabled = false;

        btn.innerHTML = "Login";

        fakeAuthentication();

    }, 2000);

}

/* ===========================================
        FAKE AUTHENTICATION
=========================================== */

function fakeAuthentication() {

    saveRememberData();

    showToast("✅ Login Successful");

    setTimeout(function () {

        showToast("🚀 Redirecting to Dashboard");

    }, 1200);

}

/* ===========================================
        UPDATE LOGIN VALIDATION
=========================================== */

/*function loginValidation() {

    const email = document.getElementById("txtEmail");

    const password = document.getElementById("txtPassword");

    if (email.value.trim() === "") {

        showToast("📧 Enter Email Address");

        email.focus();

        return;

    }

    if (password.value.trim() === "") {

        showToast("🔑 Enter Password");

        password.focus();

        return;

    }

    loginLoading();*/

}

/* ===========================================
        LOGIN ATTEMPT COUNTER
=========================================== */

let loginAttempts = 0;

function increaseLoginAttempt() {

    loginAttempts++;

    if (loginAttempts >= 3) {

        showToast("⚠ Too many login attempts.");

        setTimeout(function () {

            showToast("🔒 Login temporarily locked.");

        }, 1000);

        const btn = document.getElementById("loginBtn");

        btn.disabled = true;

        btn.innerHTML = "Locked";

        setTimeout(function () {

            btn.disabled = false;

            btn.innerHTML = "Login";

            loginAttempts = 0;

            showToast("✅ Login Enabled Again");

        }, 10000);

    }

}

/* ===========================================
        EMAIL FORMAT CHECK
=========================================== */

const emailInput = document.getElementById("txtEmail");

if (emailInput) {

    emailInput.addEventListener("blur", function () {

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (this.value !== "" && !pattern.test(this.value)) {

            this.style.borderColor = "#EF4444";

            showToast("❌ Invalid Email Address");

            increaseLoginAttempt();

        }
        else {

            this.style.borderColor = "#35C759";

        }

    });

}

/* ===========================================
        PASSWORD STRENGTH
=========================================== */

const passwordInput = document.getElementById("txtPassword");

if (passwordInput) {

    passwordInput.addEventListener("input", function () {

        if (this.value.length >= 8) {

            this.style.borderColor = "#35C759";

        }
        else {

            this.style.borderColor = "#FFB648";

        }

    });

}

/* ===========================================
        WELCOME MESSAGE
=========================================== */

setTimeout(function () {

    showToast("👋 Welcome to ASH INNOVATIES");

}, 1200);

/* ===========================================
        CARD FLOAT EFFECT
=========================================== */

document.addEventListener("mousemove", function (e) {

    const card = document.querySelector(".login-card");

    if (card) {

        const x = (window.innerWidth / 2 - e.clientX) / 120;

        const y = (window.innerHeight / 2 - e.clientY) / 120;

        card.style.transform =

            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    }

});

document.addEventListener("mouseleave", function () {

    const card = document.querySelector(".login-card");

    if (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    }

});


iziToast.success({
    title: 'Success',
    message: 'Registration Successful!',
    position: 'topRight'
});

iziToast.success({
    title: 'Success',
    message: 'Registration Successful!',
    position: 'topRight'
});

/* ===========================================
        CONSOLE BRANDING
=========================================== */

console.log(

    "%cASH INNOVATIES",

    "color:#4F7CFF;font-size:22px;font-weight:bold;"

);

console.log(

    "%cLogin Module Loaded Successfully",

    "color:#35C759;font-size:14px;"

);