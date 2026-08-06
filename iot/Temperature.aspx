<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="Temperature.aspx.cs" Inherits="iot.WebForm1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Temperature.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container-fluid p-5">
        <div class="hero">

            <h1>🌡 Temperature Monitoring</h1>

            <p>
                Monitor Live Temperature from ESP32 Sensor

            </p>

        </div>
        <div class="row mt-4">

            <div class="col-lg-6">

                <div class="temperature-card">

                    <h3>Current Temperature

                    </h3>

                    <h1 id="liveTemp">29°C

                    </h1>

                    <p>
                        Updated Every Second

                    </p>

                </div>

            </div>
            <div class="col-lg-3">

                <div class="min-card">

                    <h3>Minimum

                    </h3>

                    <h1>24°C

                    </h1>

                    <p>
                        Today's Lowest

                    </p>

                </div>

            </div>

            <div class="col-lg-3">

                <div class="max-card">

                    <h3>Maximum

                    </h3>

                    <h1>34°C

                    </h1>

                    <p>
                        Today's Highest

                    </p>

                </div>

            </div>

        </div>

        <div class="row mt-4">

            <div class="col-lg-8">

                <div class="graph-card">

                    <div class="graph-header">

                        <h3>Weekly Temperature

                        </h3>

                    </div>

                    <canvas id="tempChart"></canvas>

                </div>

            </div>

            <div class="col-lg-4">

                <div class="esp-card">

                    <h3>ESP32 Status

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

                <div class="update-card">

                    <h3>Last Updated

                    </h3>

                    <h2 id="updateTime">10:45:20

                    </h2>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="alert-card">

                    <h3>Temperature Alert

                    </h3>

                    <h2 id="alertStatus">Normal

                    </h2>

                    <p>
                        Safe Operating Range

                    </p>

                </div>

            </div>

        </div>

        <footer class="footer mt-5">

            <p>
                © 2026 ASH INNOVATIES

Temperature Monitoring Module

            </p>

        </footer>

    </div>
    <script src="Temperature.js"></script>
</asp:Content>
