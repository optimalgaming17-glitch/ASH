<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="Setting.aspx.cs" Inherits="iot.WebForm4" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Setting.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container-fluid p-5">

        <!-- HERO -->

        <div class="hero">

            <h1>

                <i class="bi bi-gear-fill"></i>

                System Settings

</h1>

            <p>
                Configure your Smart Home System

            </p>

        </div>

        <div class="row g-4">

            <div class="col-lg-6">

                <div class="setting-card">

                    <h3>

                        <i class="bi bi-cpu-fill"></i>

                        System

                    </h3>

                    <div class="setting-item">

                        <span>Dark Mode</span>

                        <label class="switch">

                            <input type="checkbox" id="darkMode" />

                            <span class="slider"></span>

                        </label>

                    </div>

                    <div class="setting-item">

                        <span>Notifications</span>

                        <label class="switch">

                            <input type="checkbox" checked />

                            <span class="slider"></span>

                        </label>

                    </div>

                    <div class="setting-item">

                        <span>Auto Refresh</span>

                        <label class="switch">

                            <input type="checkbox" checked />

                            <span class="slider"></span>

                        </label>

                    </div>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="setting-card">

                    <h3>

                        <i class="bi bi-wifi"></i>

                        ESP32 Connection

                    </h3>

                    <label>ESP32 IP Address</label>

                    <input
                        type="text"
                        class="form-control"
                        value="192.168.1.100" />

                    <label class="mt-3">
                        WiFi SSID

                    </label>

                    <input
                        type="text"
                        class="form-control"
                        value="ASH_WIFI" />

                    <label class="mt-3">
                        WiFi Password

                    </label>

                    <input
                        type="password"
                        class="form-control"
                        value="12345678" />

                </div>

            </div>

            <div class="col-lg-6">

                <div class="setting-card">

                    <h3>

                        <i class="bi bi-palette-fill"></i>

                        Theme

                    </h3>

                    <div class="theme-box">

                        <div class="theme blue"></div>

                        <div class="theme green"></div>

                        <div class="theme purple"></div>

                        <div class="theme orange"></div>

                    </div>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="setting-card">

                    <h3>

                        <i class="bi bi-shield-lock-fill"></i>

                        Security

                    </h3>

                    <button class="btn btn-primary w-100">
                        Change Password

                    </button>

                    <button class="btn btn-danger w-100 mt-3">
                        Reset System

                    </button>

                </div>

            </div>


        </div>

       

    </div>
    <script src="Setting.js"></script>
</asp:Content>
