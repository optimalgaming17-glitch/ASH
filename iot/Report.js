/* ===========================================
        ASH INNOVATIES
        REPORTS MODULE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const totalReports = document.getElementById("totalReports");
    const tempReports = document.getElementById("tempReports");
    const smokeReports = document.getElementById("smokeReports");
    const motionReports = document.getElementById("motionReports");

    animateCounter(totalReports, 248);
    animateCounter(tempReports, 74);
    animateCounter(smokeReports, 53);
    animateCounter(motionReports, 121);

    /* ===========================================
            COUNTER
    =========================================== */

    function animateCounter(element, target) {

        if (!element) return;

        let count = 0;

        let speed = Math.ceil(target / 40);

        const timer = setInterval(function () {

            count += speed;

            if (count >= target) {

                count = target;

                clearInterval(timer);

            }

            element.innerHTML = count;

        }, 30);

    }

    /* ===========================================
            SEARCH
    =========================================== */

    const searchBtn = document.querySelector(".btn-primary");

    if (searchBtn) {

        searchBtn.addEventListener("click", function (e) {

            e.preventDefault();

            showToast("🔍 Searching Reports...");

        });

    }

    /* ===========================================
            VIEW BUTTONS
    =========================================== */

    document.querySelectorAll(".btn-sm").forEach(function (btn) {

        btn.addEventListener("click", function () {

            showToast("📄 Opening Report...");

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
        DATE FILTER
=========================================== */

const fromDate = document.querySelectorAll(".form-control")[0];
const toDate = document.querySelectorAll(".form-control")[1];

if (fromDate && toDate) {

    [fromDate, toDate].forEach(function (input) {

        input.addEventListener("change", function () {

            showToast("📅 Date Filter Applied");

        });

    });

}

/* ===========================================
        LIVE REPORT STATS
=========================================== */

setInterval(function () {

    const total = document.getElementById("totalReports");
    const temp = document.getElementById("tempReports");
    const smoke = document.getElementById("smokeReports");
    const motion = document.getElementById("motionReports");

    if (total)
        total.innerHTML = parseInt(total.innerHTML) + 1;

    if (temp)
        temp.innerHTML = parseInt(temp.innerHTML) + Math.floor(Math.random() * 2);

    if (smoke)
        smoke.innerHTML = parseInt(smoke.innerHTML) + Math.floor(Math.random() * 2);

    if (motion)
        motion.innerHTML = parseInt(motion.innerHTML) + Math.floor(Math.random() * 3);

}, 15000);

/* ===========================================
        EXPORT BUTTONS
=========================================== */

function exportPDF() {

    showToast("📄 PDF Export Started");

}

function exportExcel() {

    showToast("📗 Excel Export Started");

}

function printReport() {

    showToast("🖨 Preparing Report");

    setTimeout(function () {

        window.print();

    }, 700);

}

/* ===========================================
        AUTO REFRESH
=========================================== */

setInterval(function () {

    showToast("🔄 Reports Synced");

}, 30000);

/* ===========================================
        ROW HIGHLIGHT
=========================================== */

document.querySelectorAll("tbody tr").forEach(function (row) {

    row.addEventListener("mouseenter", function () {

        this.style.background = "#F8FAFF";

    });

    row.addEventListener("mouseleave", function () {

        this.style.background = "";

    });

});

/* ===========================================
        FILTER TYPE
=========================================== */

const reportType = document.querySelector(".form-select");

if (reportType) {

    reportType.addEventListener("change", function () {

        showToast("📊 " + this.value + " Selected");

    });

}


/* ===========================================
        REPORT ANALYTICS CHART
=========================================== */

const reportChartCanvas = document.getElementById("reportChart");

let reportChart;

if (reportChartCanvas) {

    const ctx = reportChartCanvas.getContext("2d");

    reportChart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [

                "Temperature",

                "Smoke",

                "Motion",

                "Smart Bulb"

            ],

            datasets: [{

                data: [74, 53, 121, 42],

                backgroundColor: [

                    "#4F7CFF",

                    "#EF4444",

                    "#35C759",

                    "#FFB648"

                ],

                borderWidth: 0

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}

/* ===========================================
        FLOATING CARDS
=========================================== */

document.addEventListener("mousemove", function (e) {

    document.querySelectorAll(

        ".report-card,.filter-card,.table-card"

    ).forEach(function (card) {

        const x = (window.innerWidth / 2 - e.clientX) / 90;

        const y = (window.innerHeight / 2 - e.clientY) / 90;

        card.style.transform =

            "rotateY(" + x + "deg) rotateX(" + (-y) + "deg)";

    });

});

document.addEventListener("mouseleave", function () {

    document.querySelectorAll(

        ".report-card,.filter-card,.table-card"

    ).forEach(function (card) {

        card.style.transform = "rotateY(0deg) rotateX(0deg)";

    });

});

/* ===========================================
        LIVE NUMBER EFFECT
=========================================== */

setInterval(function () {

    document.querySelectorAll(

        "#totalReports,#tempReports,#smokeReports,#motionReports"

    ).forEach(function (item) {

        item.style.transform = "scale(1.10)";

        item.style.transition = ".3s";

        setTimeout(function () {

            item.style.transform = "scale(1)";

        }, 250);

    });

}, 3000);

/* ===========================================
        WELCOME TOAST
=========================================== */

setTimeout(function () {

    showToast("📊 Reports Module Loaded");

}, 1500);

/* ===========================================
        AUTO SAVE MESSAGE
=========================================== */

setInterval(function () {

    showToast("💾 Reports Database Synced");

}, 45000);

/* ===========================================
        CONSOLE BRANDING
=========================================== */

console.log(

    "%cASH INNOVATIES",

    "color:#4F7CFF;font-size:22px;font-weight:bold;"

);

console.log(

    "%cReports Module Ready",

    "color:#35C759;font-size:14px;"

);


