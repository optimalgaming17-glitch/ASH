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

        }, 800);
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

            }, 800);

        });

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
        LIVE ESP32 DATA
=========================================== */

async function generateReply(message) {

    const typing = document.getElementById("typing");

    if (typing) {

        typing.remove();

    }

    message = message.toLowerCase().trim();


    try {

        /* =====================================
                BULB ON
        ===================================== */

        if (
            message.includes("turn on bulb") ||
            message.includes("bulb on")
        ) {

            await fetch(
                "http://10.207.67.101/bulbon"
            );

            addAIMessage(
                "💡 Bulb Turned ON Successfully."
            );

            return;
        }


        /* =====================================
                BULB OFF
        ===================================== */

        if (
            message.includes("turn off bulb") ||
            message.includes("bulb off")
        ) {

            await fetch(
                "http://10.207.67.101/bulboff"
            );

            addAIMessage(
                "💡 Bulb Turned OFF Successfully."
            );

            return;
        }


        /* =====================================
                BULB STATUS
        ===================================== */

        if (message.includes("bulb")) {

            const response =
                await fetch(
                    "http://10.207.67.101/bulbstatus"
                );

            const data = await response.text();

            addAIMessage(
                "💡 Smart Bulb Status : " + data
            );

            return;
        }


        /* =====================================
                TEMPERATURE
        ===================================== */

        if (message.includes("temperature")) {

            const response =
                await fetch(
                    "http://10.207.67.101/temperature"
                );

            const data = await response.text();

            addAIMessage(
                "🌡 Current Temperature : " +
                data +
                "°C"
            );

            return;
        }


        /* =====================================
                SMOKE
        ===================================== */

        if (message.includes("smoke")) {

            const response =
                await fetch(
                    "http://10.207.67.101/smokestatus"
                );

            const data = await response.text();

            addAIMessage(
                "💨 Smoke Status : " +
                data
            );

            return;
        }


        /* =====================================
                MOTION
        ===================================== */

        if (message.includes("motion")) {

            const response =
                await fetch(
                    "http://10.207.67.101/motion"
                );

            const data = await response.text();

            addAIMessage(
                "🚶 Motion Status : " +
                data
            );

            return;
        }


        /* =====================================
                REPORT
        ===================================== */

        if (message.includes("report")) {

            addAIMessage(
                "📊 Reports Module Ready."
            );

            return;
        }


        /* =====================================
                GREETING
        ===================================== */

        if (
            message.includes("hello") ||
            message.includes("hi") ||
            message.includes("hey")
        ) {

            addAIMessage(
                "👋 Hello! How can I help you today?"
            );

            return;
        }


        /* =====================================
                DEFAULT
        ===================================== */

        addAIMessage(
            "🤖 Sorry, I didn't understand. Please try another command."
        );

    }
    catch (error) {

        console.error("ESP32 Error:", error);

        addAIMessage(
            "🔴 ESP32 is offline. Please check the device connection."
        );

    }

}


/* ===========================================
        WELCOME TOAST
=========================================== */

setTimeout(function () {

    showToast(
        "🤖 ASH AI Assistant Ready"
    );

}, 1500);


/* ===========================================
        ONLINE STATUS
=========================================== */

const aiStatus =
    document.querySelector(".status-online");

if (aiStatus) {

    setInterval(function () {

        aiStatus.innerHTML =
            "🟡 Thinking...";

        aiStatus.style.background =
            "#FFB648";

        setTimeout(function () {

            aiStatus.innerHTML =
                "🟢 Connected";

            aiStatus.style.background =
                "#35C759";

        }, 1200);

    }, 10000);

}


/* ===========================================
        RANDOM RESPONSE TIME
=========================================== */

const responseCard =
    document.querySelectorAll(
        ".status-card h2"
    );

if (responseCard.length > 1) {

    const responseTime =
        responseCard[1];

    setInterval(function () {

        const time =
            (Math.random() * 0.8 + 0.2)
                .toFixed(2);

        responseTime.innerHTML =
            time + " sec";

    }, 5000);

}


/* ===========================================
        CHAT ANIMATION
=========================================== */

setInterval(function () {

    document
        .querySelectorAll(
            ".ai-message,.user-message"
        )
        .forEach(function (msg) {

            msg.style.transform =
                "scale(1.01)";

            setTimeout(function () {

                msg.style.transform =
                    "scale(1)";

            }, 250);

        });

}, 4000);


/* ===========================================
        VOICE BUTTON
=========================================== */

function startVoiceRecognition() {

    showToast(
        "🎤 Voice Assistant Coming Soon"
    );

}


/* ===========================================
        AUTO GREETING
=========================================== */

setTimeout(function () {

    addAIMessage(
        "💙 Welcome to ASH INNOVATIES AI Assistant."
    );

}, 2500);


setTimeout(function () {

    addAIMessage(
        "⚡ You can ask about Temperature, Motion, Smoke or Smart Bulb."
    );

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

    const toast =
        document.createElement("div");

    toast.className =
        "toast-box";

    toast.innerHTML =
        message;

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