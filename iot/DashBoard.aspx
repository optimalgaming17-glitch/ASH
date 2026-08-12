<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="DashBoard.aspx.cs" Inherits="iot.DashBoard" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <header class="topbar">


        <div class="search-box">
            <i class="bi bi-search"></i>

            <input type="text" placeholder="Search..." />

        </div>

        <div class="top-icons">

            <button>
                <i class="bi bi-bell-fill"></i>
            </button>

            <button>
                <i class="bi bi-moon-fill"></i>
            </button>

            <div class="profile">

                <img src="profile.png" />

                <div>

                    <h5>ash</h5>
                    <p>Administrator</p>

                </div>

            </div>

        </div>

    </header>

            <section class="hero">

                <h2>Welcome Back
                            <span>Harsh 👋</span>
                </h2>

                <p>
                    Monitor and Control your Smart Home.
                </p>

            </section>

            <!-- ================= STATUS CARDS ================= -->

   
            <div class="row mt-4 g-4">
              
                <div class="row">
                    
                    <div class="col-md-4 mode">
                        <button type="button" class="premium-mode-btn" id="mode_button" onclick="enableAuto()">
                            <i class="bi bi-stars"></i>
                            <span>Auto Mode</span>
                         </button>
                        <span id="modeStatus" class="premium-label">✦ AUTO</span>
                    </div>
                  
                </div>
                

                <div class="col-lg-3 col-md-6">

                    <div class="status-card temp">

                        <div>

                            <p>Temperature</p>

                            <h2 id="tempValue"> </h2>

                            <span>Live Data</span>

                        </div>

                        <i class="bi bi-thermometer-half"></i>

                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="status-card humidity">

                        <div>

                            <p>Humidity</p>

                            <h2 id="humidityValue"> </h2>
                            <span>Live Data</span>

                        </div>

                        <i class="bi bi-droplet-fill"></i>

                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="status-card smoke">

                        <div>

                            <p>Smoke</p>
                            <h2 id="smokeStatus">SAFE</h2>
                            <span id="smokeValue">No Smoke</span>

                        </div>

                        <i class="bi bi-cloud-haze2-fill"></i>

                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="status-card motion">

                        <div>

                            <p>Motion Status</p>

                                   <h2 id="pirStatus">Loading...    </h2>
                                
                                    <span>Live Detection</span>
                                    

                        </div>

                        <i class="bi bi-person-walking"></i>

                    </div>

                </div>

            </div>


            <div class="row mt-4">

                <div class="col-lg-8">

                    <div class="device-card">

                        <div class="device-header">

                            <h3>💡 Smart Bulb</h3>

                            <div class="badge bg-success" id="badge_text">ONLINE</div>

                        </div>

                        <h1 id="bulbStatus">ON</h1>

                        <p>Current Status </p>


                        <div class="device-buttons">

                            <button class="btn btn-warning" type="button" onclick="bulbON()">Turn ON </button>

                            <button class="btn btn-dark" type="button" onclick="bulbOFF()">Turn OFF </button>

                        </div>

                    </div>

                </div>



                <div class="col-lg-4">

                    <div class="ai-card">

                        <h3>🤖 AI Assistant</h3>

                        <p id="aiText">
                            Be smarter with ASH AI.
                            
                            Control components and 
                            
                            
                            easily handle them with ASH AI.

                        </p>

                        <button class="btn btn-primary w-100"><a style="text-decoration:none;" class="ai" href="AI.aspx"> Ask AI</a>  </button>

                    </div>

                </div>

            </div>

            <!-- ================= GRAPH SECTION ================= -->

            <div class="row mt-4">

                <div class="col-lg-8">

                    <div class="graph-card">

                        <div class="graph-header">

                            <h3>Temperature Analytics</h3>

                            <select>

                                <option>Today</option>

                                <option>Weekly</option>

                                <option>Monthly</option>

                            </select>

                        </div>

                        <div class="graph-placeholder">

                            <canvas id="tempChart"></canvas>

                        </div>

                    </div>

                </div>
                <div class="col-lg-4">

                    <div class="mini-card">

                        <h4>Humidity</h4>

                        <h2 id="humidityValue1"> </h2>

                        <p>Average Today</p>

                        <div class="progress">

                            <div class="progress-bar bg-primary"
                                style="width: 64%">
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- ================= NOTIFICATION PANEL ================= -->

            <div class="row mt-4">

                <div class="col-lg-6">

                    <div class="notification-card">

                        <h3>Notifications</h3>

                        <ul>

                            <li>

                                <i class="bi bi-check-circle-fill text-success"></i>

                                Bulb Turned ON

                            </li>

                            <li>

                                <i class="bi bi-cloud-check-fill text-primary"></i>

                                Smoke Level Normal

                            </li>

                            <li>

                                <i class="bi bi-person-fill text-warning"></i>

                                Motion Detected

                            </li>

                            <li>

                                <i class="bi bi-wifi text-success"></i>

                                ESP32 Connected

                            </li>

                        </ul>

                    </div>

                </div>

                <div class="col-lg-6">

                    <div class="esp-card">

                        <h3>ESP32 Device</h3>

                        <div class="status-online">🟢 Connected</div>


                        <div class="esp-info">

                            <p>WiFi :Connected</p>

                            <p>IP :192.168.1.25</p>

                            <p>Last Update :2 sec ago</p>

                        </div>

                        <button class="btn btn-success w-100">
                            Refresh Device

                        </button>

                    </div>

                </div>

            </div>
  
    
</asp:Content>
