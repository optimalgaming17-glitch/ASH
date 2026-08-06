<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="SmartBulb.aspx.cs" Inherits="iot.WebForm2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="Bulb.css" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <div class="container-fluid p-5">

        <div class="hero">

            <h1>💡 Smart Bulb Control</h1>

            <p>Monitor and Control your Smart Bulb in Real Time.</p>

        </div>

        <div class="row mt-4">

            <div class="col-lg-6">

                <div class="power-card">

                    <h3>Power</h3>

                    <h1 id="bulbStatus">ON</h1>

                    <button id="toggleBulb" class="btn btn-primary">Turn OFF</button>

                </div>

            </div>

            <div class="row mt-4">

                <div class="col-lg-6">

                    <div class="power-card">

                        <h3>Power</h3>

                        <h1 id="bulbStatus">ON </h1>

                        <button id="toggleBulb" class="btn btn-primary">Turn OFF</button>

                    </div>

                </div>

                <div class="col-lg-6">

                    <div class="brightness-card">

                        <h3>Brightness </h3>

                        <input type="range" min="0" max="100" value="75" id="brightness" />

                        <h2 id="brightnessValue">75% </h2>

                    </div>

                </div>
            </div>

            <div class="row mt-4">

                <div class="col-lg-6">

                    <div class="color-card">

                        <h3>Bulb Color</h3>

                        <input type="color" id="bulbColor" value="#FFD54F" />

                        <h2 id="colorHex">#FFD54F</h2>

                    </div>

                </div>

                <div class="col-lg-6">

                    <div class="energy-card">

                        <h3>Energy Consumption

                        </h3>

                        <h1>12.6 kWh

                        </h1>

                        <p>
                            Today's Usage

                        </p>

                        <div class="progress mt-4">

                            <div class="progress-bar bg-warning" style="width: 62%;">
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="row mt-4">

                <div class="col-lg-6">

                    <div class="schedule-card">

                        <h3>Auto Schedule</h3>

                        <label>Turn On</label>

                        <input type="time" id="onTime" class="form-control" />

                        <label class="mt-3">Turn OFF</label>

                        <input
                            type="time"
                            id="offTime"
                            class="form-control" />

                        <button
                            class="btn btn-primary mt-4 w-100">
                            Save Schedule

                        </button>

                    </div>

                </div>

                <div class="col-lg-6">

                    <div class="activity-card">

                        <h3>Recent Activity

                        </h3>

                        <ul>

                            <li>💡 Bulb Turned ON

                              <span>10:20 AM

                              </span>

                            </li>

                            <li>🎨 Color Changed

                              <span>10:25 AM

                              </span>

                            </li>

                            <li>⚡ Brightness 75%

                              <span>10:28 AM

                              </span>

                            </li>

                            <li>📅 Schedule Updated

                              <span>10:35 AM

                              </span>

                            </li>

                        </ul>

                    </div>

                </div>

            </div>

            <footer class="footer mt-5">

                <p>
                    © 2026 ASH INNOVATIES

                Smart Bulb Module

                </p>

            </footer>

        </div>
    </div>
</asp:Content>
