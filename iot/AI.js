/* ===========================================
        ASH INNOVATIES
        AI ASSISTANT MODULE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const chatBody = document.getElementById("chatBody");
    const input = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    /* ===========================================
            SEND MESSAGE
    =========================================== */

    function sendMessage() {

        const text = input.value.trim();

        if (text === "") return;

        addUserMessage(text);

        input.value = "";

        typingAnimation();

        setTimeout(function () {

            generateReply(text);

        }, 1200);

    }

    /* ===========================================
            BUTTON
    =========================================== */

    sendBtn.addEventListener("click", sendMessage);

    /* ===========================================
            ENTER KEY
    =========================================== */

    input.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            sendMessage();

        }

    });

});

/* ===========================================
        USER MESSAGE
=========================================== */

function addUserMessage(message) {

    const chat = document.getElementById("chatBody");

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = message;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;

}

/* ===========================================
        AI MESSAGE
=========================================== */

function addAIMessage(message) {

    const chat = document.getElementById("chatBody");

    const div = document.createElement("div");

    div.className = "ai-message";

    div.innerHTML = message;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;

}

/* ===========================================
        TYPING ANIMATION
=========================================== */

function typingAnimation() {

    const chat = document.getElementById("chatBody");

    const typing = document.createElement("div");

    typing.className = "ai-message";

    typing.id = "typing";

    typing.innerHTML = "🤖 Typing...";

    chat.appendChild(typing);

    chat.scrollTop = chat.scrollHeight;

}

/* ===========================================
        AI BRAIN
=========================================== */

function generateReply(message) {

    const typing = document.getElementById("typing");

    if (typing) {

        typing.remove();

    }

    message = message.toLowerCase();

    let reply = "";

    /* ===========================================
            BULB
    =========================================== */

    if (message.includes("bulb")) {

        reply = "💡 Smart Bulb Status : ON";

    }

    else if (message.includes("turn on bulb")) {

        reply = "💡 Bulb Turned ON Successfully.";

    }

    else if (message.includes("turn off bulb")) {

        reply = "💡 Bulb Turned OFF Successfully.";

    }

    /* ===========================================
            TEMPERATURE
    =========================================== */

    else if (message.includes("temperature")) {

        reply = "🌡 Current Temperature : 28°C";

    }

    /* ===========================================
            SMOKE
    =========================================== */

    else if (message.includes("smoke")) {

        reply = "💨 Smoke Level : SAFE";

    }

    /* ===========================================
            MOTION
    =========================================== */

    else if (message.includes("motion")) {

        reply = "🚶 No Motion Detected";

    }

    /* ===========================================
            REPORT
    =========================================== */

    else if (message.includes("report")) {

        reply = "📊 Reports Module Ready.";

    }

    /* ===========================================
            GREETING
    =========================================== */

    else if (

        message.includes("hello") ||

        message.includes("hi") ||

        message.includes("hey")

    ) {

        reply = "👋 Hello Harsh! How can I help you today?";

    }

    /* ===========================================
            DEFAULT
    =========================================== */

    else {

        reply = "🤖 Sorry, I didn't understand. Please try another command.";

    }

    setTimeout(function () {

        addAIMessage(reply);

    }, 250);

}

/* ===========================================
        QUICK COMMANDS
=========================================== */

document.querySelectorAll(".command-card").forEach(function (card) {

    card.addEventListener("click", function () {

        const text = this.innerText;

        addUserMessage(text);

        typingAnimation();

        setTimeout(function () {

            generateReply(text);

        }, 1000);

    });

});

/* ===========================================
WELCOME MESSAGE
=========================================== */

setTimeout(function () {

    showToast("🤖 ASH AI Assistant Ready");

}, 1500);

/* ===========================================
        ONLINE STATUS
=========================================== */

const aiStatus = document.querySelector(".status-online");

if (aiStatus) {

    setInterval(function () {

        aiStatus.innerHTML = "🟡 Thinking...";

        aiStatus.style.background = "#FFB648";

        setTimeout(function () {

            aiStatus.innerHTML = "🟢 Connected";

            aiStatus.style.background = "#35C759";

        }, 1200);

    }, 10000);

}

/* ===========================================
        RANDOM AI STATUS
=========================================== */

const responseCard = document.querySelectorAll(".status-card h2");

if (responseCard.length > 1) {

    const responseTime = responseCard[1];

    setInterval(function () {

        const time = (Math.random() * 0.8 + 0.2).toFixed(2);

        responseTime.innerHTML = time + " sec";

    }, 5000);

}

/* ===========================================
        CHAT ANIMATION
=========================================== */

setInterval(function () {

    document.querySelectorAll(".ai-message,.user-message").forEach(function (msg) {

        msg.style.transform = "scale(1.01)";

        setTimeout(function () {

            msg.style.transform = "scale(1)";

        }, 250);

    });

}, 4000);

/* ===========================================
        VOICE BUTTON READY
=========================================== */

function startVoiceRecognition() {

    showToast("🎤 Voice Assistant Coming Soon");

}

/* ===========================================
        AUTO GREETING
=========================================== */

setTimeout(function () {

    addAIMessage("💙 Welcome to ASH INNOVATIES AI Assistant.");

}, 2500);

setTimeout(function () {

    addAIMessage("⚡ You can ask about Temperature, Motion, Smoke or Smart Bulb.");

}, 4500);

/* ===========================================
        CONSOLE BRANDING
=========================================== */

console.log(

    "%cASH INNOVATIES",

    "color:#4F7CFF;font-size:22px;font-weight:bold;"

);

console.log(

    "%cAI Assistant Loaded Successfully",

    "color:#35C759;font-size:14px;"

);

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