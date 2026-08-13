/* =====================================================
   TEMPERATURE CHART
===================================================== */


/* Get canvas */

const chartCanvas =
    document.getElementById("temperatureChart");


/* =====================================================
   CREATE EMPTY CHART

   Real ESP32 readings will be added later
   by updateTemperature()
===================================================== */

window.temperatureChart = new Chart(chartCanvas, {

    type: "line",

    data: {

        /* X AXIS */
        labels: [],

        datasets: [

            {
                label: "Temperature",

                /* Y AXIS */
                data: [],

                borderWidth: 3,

                tension: 0.4,

                pointRadius: 3,

                pointHoverRadius: 6,

                fill: false
            }

        ]
    },


    /* =====================================================
       CHART OPTIONS
    ===================================================== */

    options: {

        responsive: true,

        maintainAspectRatio: false,


        /* Animation when new ESP32 reading arrives */

        animation: {
            duration: 500
        },


        plugins: {

            /* Hide "Temperature" legend */

            legend: {
                display: false
            }

        },


        scales: {

            /* X AXIS */

            x: {

                grid: {
                    display: false
                }

            },


            /* Y AXIS */

            y: {

                title: {

                    display: true,

                    text: "Temperature (°C)"

                },

                beginAtZero: false

            }

        }

    }

});


