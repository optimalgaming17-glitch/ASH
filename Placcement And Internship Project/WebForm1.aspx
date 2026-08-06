<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Placcement_And_Internship_Project.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="StyleSheet1.css" rel="server" />
</head>
<body>
    <form id="form1" runat="server">
       
               <div class="app-bg">
        <div class="dashboard-shell">

            <!-- Top bar -->
            <header class="topbar">
                <div class="user-chip">
                    <img class="avatar" src="img/avatar.png" alt="" onerror="this.style.display='none'" />
                    <span>Welcome, <strong><%= UserName %>!</strong></span>
                </div>

                <div class="search-box">
                    <svg viewBox="0 0 24 24" class="icon-sm"><path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    <input type="text" placeholder="Search any devices here" />
                </div>

                <div class="theme-toggle" id="themeToggle">
                    <button type="button" class="theme-btn active" data-theme="light">&#9728; Light</button>
                    <button type="button" class="theme-btn" data-theme="dark">&#9789; Dark</button>
                </div>

                <button type="button" class="bell-btn" aria-label="Notifications">&#128276;</button>
            </header>

            <!-- Main glass panel -->
            <div class="panel">

                <!-- Row 1: date / humidity / consumption -->
                <div class="row row-top">
                    <div class="card date-card">
                        <div class="date-label"><%= TodayDate %></div>
                        <div class="date-time">
                            <%= TodayTime %> <span class="temp"><%= OutsideTempC %>&deg;C</span>
                        </div>
                    </div>

                    <div class="card humidity-card">
                        <div class="card-title"><span class="badge badge-blue">&#128167;</span> Humidity</div>
                        <div class="humidity-row">
                            <div class="donut" style="--pct: <%= HumidityPercent.ToString("0.0") %>"></div>
                            <div class="humidity-value"><%= HumidityPercent.ToString("0.0") %>%</div>
                        </div>
                    </div>

                    <div class="card consumption-card">
                        <div class="card-title"><span class="badge badge-orange">&#9889;</span> Total Consumption</div>
                        <div class="bars">
                            <span class="scale">150</span>
                            <span class="scale">100</span>
                            <span class="scale">50</span>
                            <% foreach (var m in Consumption) { %>
                                <div class="bar-col">
                                    <div class="bar <%= m.Label == "Apr" ? "bar-active" : "" %>" style="height:<%= m.Value %>px">
                                        <% if (m.Label == "Apr") { %>
                                            <span class="bar-tip">Kwh</span>
                                        <% } %>
                                    </div>
                                    <span class="bar-label"><%= m.Label %></span>
                                </div>
                            <% } %>
                            <span class="scale scale-right">160</span>
                        </div>
                    </div>
                </div>

                <!-- Row 2: devices / lighting / thermostat -->
                <div class="row row-mid">
                    <div class="col-stack">
                        <div class="card device-card">
                            <div class="device-name">Smart<br />Light</div>
                            <button type="button" class="device-toggle on">&#128161; &raquo;&raquo;&raquo;</button>
                        </div>
                        <div class="card device-card">
                            <div class="device-name">Door<br />Lock</div>
                            <button type="button" class="device-toggle on">&#128274; &raquo;&raquo;&raquo;</button>
                        </div>
                    </div>

                    <div class="col-stack">
                        <div class="card device-card">
                            <div class="device-name">Air<br />Conditioner</div>
                            <button type="button" class="device-toggle on">&#128161; &raquo;&raquo;&raquo;</button>
                        </div>
                        <div class="card device-card">
                            <div class="device-name">Cleaning<br />Vacuum</div>
                            <button type="button" class="device-toggle off">&laquo;&laquo;&laquo; &#129529;</button>
                        </div>
                    </div>

                    <div class="card lighting-card">
                        <div class="card-title"><span class="badge badge-yellow">&#9728;</span> Smart Lighting</div>
                        <div class="watt-row">
                            <button type="button" class="watt-btn">8 watt</button>
                            <button type="button" class="watt-btn">9 watt</button>
                            <button type="button" class="watt-btn active">12 watt</button>
                        </div>
                        <div class="lighting-gauge">
                            <div class="ring" style="--pct: <%= LightingIntensity %>">
                                <div class="ring-center">
                                    <div class="ring-value"><%= LightingIntensity %>%</div>
                                    <div class="ring-label">Intensity</div>
                                </div>
                            </div>
                        </div>
                        <div class="minmax-row">
                            <span>Min &#8853;</span>
                            <span>&#8854; Max</span>
                        </div>
                        <div class="mode-row">
                            <button type="button" class="mode-btn active" title="Auto">A</button>
                            <button type="button" class="mode-btn" title="Day">&#9728;</button>
                            <button type="button" class="mode-btn" title="Night">&#9789;</button>
                        </div>
                        <div class="mode-labels">
                            <span>Auto</span><span>Day</span><span>Night</span>
                        </div>
                    </div>

                    <div class="card thermostat-card">
                        <div class="card-title-row">
                            <div class="card-title"><span class="badge badge-orange">&#9728;</span> Thermostat</div>
                            <button type="button" class="device-toggle on">&#128161; &raquo;&raquo;&raquo;</button>
                        </div>
                        <div class="thermo-gauge">
                            <div class="thermo-ring" style="--pct: <%= ThermoPct %>">
                                <div class="thermo-center">&#127785;</div>
                            </div>
                            <span class="thermo-value"><%= ThermostatTempC %>&deg;</span>
                            <span class="thermo-min"><%= ThermostatMin %>&deg;</span>
                            <span class="thermo-max"><%= ThermostatMax %>&deg;</span>
                        </div>
                        <div class="swing-auto-row">
                            <div class="switch-item">
                                <span>&#12336; Swing</span>
                                <label class="switch">
                                    <input type="checkbox" checked="checked" />
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div class="switch-item">
                                <span>&#9888; Auto</span>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="watt-panel">
                            <div>
                                <div class="watt-panel-value"><%= ThermostatWatts %> W</div>
                                <div class="watt-panel-sub">&#9889; Active since 2 hour ago</div>
                            </div>
                            <span class="chevron">&rsaquo;</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Room tabs -->
            <nav class="room-tabs">

                <% for (int i = 0; i < Rooms.Length; i++) { %>
                    <button type="button" class="room-tab <%= i == 0 ? "active" : "" %>"><%= Rooms[i] %></button>
                <% } %>
                <button type="button" class="room-add" aria-label="Add room">+</button>
            </nav>
        </div>
    </div>
    </form>

    <script src="JavaScript.js"></script>

     
</body>
</html>
