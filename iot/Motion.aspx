<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="Motion.aspx.cs" Inherits="iot.Motion" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Motion.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container-fluid p-5">
        <div class="hero">

            <h1>🚶 Motion Detection</h1>

            <p>
                Real-Time Human Motion Monitoring using PIR Sensor

            </p>

        </div>
        <div class="row mt-4">

            <div class="col-lg-6">

                <div class="motion-card">

                    <h3>Motion Status

                    </h3>

                    <h1 id="pirStatus">NO MOTION</h1>

                    <p>
                        Live PIR Detection

                    </p>

                </div>

            </div>
            <div class="col-lg-3">

                <div class="count-card">

                    <h3>Detected Today

                    </h3>

                    <h1 id="personCount">08

                    </h1>

                    <p>
                        Persons

                    </p>

                </div>

            </div>
            <div class="col-lg-3">

                <div class="security-card">

                    <h3>Security

                    </h3>

                    <h1 id="securityStatus">SAFE

                    </h1>

                    <p>
                        Monitoring Active

                    </p>

                </div>

            </div>

        </div>
        <div class="row mt-4">

            <div class="col-lg-8">

                <div class="graph-card">

                    <h3>Motion Activity

                    </h3>

                    <canvas id="motionChart"></canvas>

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
                        PIR Sensor Online

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

                <div class="lastmotion-card">

                    <h3>Last Motion

                    </h3>

                    <h2 id="lastMotion">10:42:18 AM

                    </h2>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="alert-card">

                    <h3>Security Alert

                    </h3>

                    <h2 id="alertStatus">NO ALERT

                    </h2>

                    <p>
                        Area Secure

                    </p>

                </div>

            </div>

        </div>

  
    </div>

    <script src="Motion.js"></script>
</asp:Content>

