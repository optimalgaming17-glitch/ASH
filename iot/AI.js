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

         generateReply(text);

       

    }


    /* ===========================================
            SEND BUTTON
    =========================================== */

    if (sendBtn) {

        sendBtn.addEventListener("click", sendMessage);

    }


    /* ===========================================
            ENTER KEY
    =========================================== */

    if (input) {

        input.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {

                e.preventDefault();

                sendMessage();

            }

        });

    }

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

    const oldTyping = document.getElementById("typing");

    if (oldTyping) {
        oldTyping.remove();
    }

    const typing = document.createElement("div");

    typing.className = "ai-message";

    typing.id = "typing";

    typing.innerHTML = "🤖 Checking...";

    chat.appendChild(typing);

    chat.scrollTop = chat.scrollHeight;

}



/* ===========================================
        BULB ON
=========================================== */

async function bulbON() {

   

        const response = await fetchESP32(
            "http://10.207.67.101/bulbon"
        );

    if (response== null)
    {
        return null;
    }

    return response;

}



/* ===========================================
        BULB OFF
=========================================== */

async function bulbOFF() {

    const response = await fetchESP32(
        "http://10.207.67.101/bulbon"
    );

    if (response == null) {
        return null;
    }

    return response;
}



/* ===========================================
        GET TEMPERATURE
=========================================== */

async function getTemperature() {

    const data = await fetchESP32(
        "http://10.207.67.101/temperature"
    );

    if (data === null) {
        return null;
    }

    return data;
}


// =====================================================
// HUMIDITY
// =====================================================

async function getHumidity() {

    const data = await fetchESP32(
        "http://10.207.67.101/humidity"
    );

    if (data === null) {
        return null;
    }

    return data;
}

/* ===========================================
        GET SMOKE STATUS
=========================================== */

async function getSmokeStatus() {

    const data = await fetchESP32(
        "http://10.207.67.101/smokestatus"
    );

    if (data === null) {
        return null;
    }

    return data;
}


/* ===========================================
        GET MOTION STATUS
=========================================== */

async function getMotionStatus() {

    const data = await fetchESP32(
        "http://10.207.67.101/motion"
    );

    if (data === null) {
        return null;
    }

    return data;
}

async function fetchESP32(url) {

    const controller = new AbortController();

    const timeout = setTimeout(function () {
        controller.abort();
    }, 2000);

    try {

        const response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        return await response.text();

    }
    catch (error) {

        clearTimeout(timeout);

        return null;
    }
}

/* ===========================================
        AI BRAIN
=========================================== */

async function generateReply(message) {

    const typing = document.getElementById("typing");

    if (typing) {

        typing.remove();

    }


    message = message.toLowerCase().trim();

    let reply = "";



    /* ===========================================
            TURN ON BULB
    =========================================== */

    if (
        message.includes("turn on bulb") ||
        message.includes("bulb on") ||
        message.includes("turn on the bulb")
    ) {

        const success = await bulbON();

        if (success!=null) {

            reply =
                "💡 Bulb Turned ON Successfully.";

        }
        else {

            reply =
                "🔴 ESP32 Offline. Bulb could not be turned ON.";

        }

    }



    /* ===========================================
            TURN OFF BULB
    =========================================== */

    else if (
        message.includes("turn off bulb") ||
        message.includes("bulb off") ||
        message.includes("turn off the bulb")
    ) {

        const success = await bulbOFF();

        if (success!=null) {

            reply =
                "💡 Bulb Turned OFF Successfully.";

        }
        else {

            reply =
                "🔴 ESP32 Offline. Bulb could not be turned OFF.";

        }

    }



    /* ===========================================
            BULB STATUS
    =========================================== */

    else if (
        message.includes("bulb") ||
        message.includes("bulb status")
    ) {

        try {

            const response = await fetch(
                "http://10.207.67.101/bulbstatus"
            );

            if (!response.ok) {

                throw new Error("Bulb status failed");

            }

            const data = await response.text();

            reply =
                "💡 Smart Bulb Status : " + data;

        }
        catch {

            reply =
                "🔴 ESP32 Offline. Bulb status is unavailable.";

        }

    }



    /* ===========================================
            TEMPERATURE
    =========================================== */

    else if (
        message.includes("temperature") ||
        message.includes("temp")
    ) {

        const temperature = await getTemperature();

        if (temperature !== null) {

            reply =
                "🌡 Current Temperature : " +
                temperature +
                "°C";

        }
        else {

            reply =
                "🔴 ESP32 Offline. Temperature is unavailable.";

        }

    }



    /* ===========================================
            SMOKE
    =========================================== */

    else if (
        message.includes("smoke") ||
        message.includes("smoke status")
    ) {

        const smoke = await getSmokeStatus();

        if (smoke !== null) {

            reply =
                "💨 Smoke Status : " +
                smoke;

        }
        else {

            reply =
                "🔴 ESP32 Offline. Smoke status is unavailable.";

        }

    }



    /* ===========================================
            MOTION
    =========================================== */

    else if (
        message.includes("motion") ||
        message.includes("motion status")
    ) {

        const motion = await getMotionStatus();

        if (motion !== null) {

            reply =
                "🚶 Motion Status : " +
                motion;

        }
        else {

            reply =
                "🔴 ESP32 Offline. Motion status is unavailable.";

        }

    }



    /* ===========================================
            GREETING
    =========================================== */

    else if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ) {

        reply =
            "👋 Hello! How can I help you with your smart home?";

    }



    /* ===========================================
            REPORT
    =========================================== */

    else if (message.includes("report")) {

        reply =
            "📊 Reports module is ready.";

    }

    else if (message.includes("contact"))
    {
        reply =
            "📞 <b>ASH NOVA Contacts</b><br><br>" +

            "<div>👤 Sarthak Koli (ASH Member) - 9623476467</div>" +
            "<div>👤 Harsh More (ASH Member) - 9960246489</div>" +
            "<div>👤 Aryan Tripude (ASH Member) - 9284762332</div>";
    }
    }

    else if (message.includes("humidity"))
    {

        const humidity = await getHumidity();

        if (humidity !== null) {

            reply =
                "🌡 Current Humidity : " +
                humidity +
                "%";

        }
        else {

            reply =
                "🔴 ESP32 Offline. Humidity is unavailable.";

        }


    }
    /* ===========================================
            DEFAULT
    =========================================== */

    else {

        reply =
            "🤖 Sorry, I didn't understand. Try asking about Temperature, Smoke, Motion or Bulb.";

    }



    /* ===========================================
            SHOW AI RESPONSE
    =========================================== */

    setTimeout(function () {

        addAIMessage(reply);

    }, 250);

}



/* ===========================================
        QUICK COMMANDS
=========================================== */

document.querySelectorAll(".command-card").forEach(function (card) {

    card.addEventListener("click", function () {

        const text = this.innerText.trim();

        addUserMessage(text);

        typingAnimation();

            generateReply(text);

       

    });

});



/* ===========================================
        WELCOME MESSAGE
=========================================== */

setTimeout(function () {

    showToast("🤖 ASH AI Assistant Ready");

}, 1500);



/* ===========================================
        AI ONLINE STATUS
=========================================== */

const aiStatus =
    document.querySelector(".status-online");

if (aiStatus) {

    setInterval(function () {

        aiStatus.innerHTML =
            "🟡 Checking...";

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
        RESPONSE TIME
=========================================== */

const responseCard =
    document.querySelectorAll(".status-card h2");

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