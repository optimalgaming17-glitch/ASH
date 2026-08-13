<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="Smoke.aspx.cs" Inherits="iot.WebForm3" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Smoke.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <div class="container-fluid p-5">
        <div class="hero">

            <h1>💨 Smoke Detection</h1>

            <p>
                Real-Time Smoke Monitoring using ESP32 + MQ Sensor

            </p>

        </div>
        <div class="row mt-4">

            <div class="col-lg-6">

                <div class="smoke-card">

                    <h3>Current Smoke Level

                    </h3>

                    <h1 id="smokeLevel">124 PPM

                    </h1>

                    <p>
                        Updated Every Second

                    </p>

                </div>

            </div>

            <div class="col-lg-3">

                <div class="safe-card">

                    <h3>Safety

                    </h3>

                    <h1 id="safeStatus">SAFE

                    </h1>

                    <p>
                        No Smoke Detected

                    </p>

                </div>

            </div>

            <div class="col-lg-3">

                <div class="buzzer-card">

                    <h3>Buzzer

                    </h3>

                    <h1 id="buzzerStatus">OFF

                    </h1>

                    <p>
                        Alarm Ready

                    </p>

                </div>

            </div>

        </div>

        <div class="row mt-4">

            <div class="col-lg-8">

                <div class="graph-card">

                    <h3>Smoke History

                    </h3>

                    <canvas id="smokeChart"></canvas>

                </div>

            </div>

            <div class="col-lg-4">

                <div class="esp-card">

                    <h3>ESP32 Connection

                    </h3>

                    <div class="status-online">
                        🟢 Connected

                    </div>

                    <p>
                        WiFi Connected

                    </p>

                    <p>
                        Last Sync

                        <span id="lastSync">Just Now

                        </span>

                    </p>

                </div>

            </div>

        </div>

        <div class="row mt-4">

            <div class="col-lg-6">

                <div class="alert-card">

                    <h3>Emergency Status

                    </h3>

                    <h2 id="alertStatus">Normal

                    </h2>

                    <p>
                        Environment Safe

                    </p>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="update-card">

                    <h3>Last Updated

                    </h3>

                    <h2 id="updateTime">10:45:30

                    </h2>

                </div>

            </div>

        </div>

       </div>
        <script src="Smoke.js"></script>
</asp:Content>
