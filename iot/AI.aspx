<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="AI.aspx.cs" Inherits="iot.AI" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="AI.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container-fluid p-5">

        <div class="hero">

            <h1>🤖 AI Assistant

            </h1>

            <p>
                Control your Smart Home using Artificial Intelligence

            </p>

        </div>
        <div class="chat-card">

            <div class="chat-header">

                <div>

                    <h3>ASH AI</h3>

                    <p>Online</p>

                </div>

                <div class="status-online">
                    🟢 Connected

                </div>

            </div>

            <div class="chat-body" id="chatBody">

                <div class="ai-message">
                    👋 Hello Harsh!

How can I help you today?

                </div>

            </div>
            <div class="chat-footer">

                <input
                    type="text"
                    id="userInput"
                    class="form-control"
                    placeholder="Ask something..." />

                <button
                    type="button"
                    id="sendBtn"
                    class="btn btn-primary">

                    <i class="bi bi-send-fill"></i>

                </button>

            </div>

        </div>
        <div class="row mt-4">

            <div class="col-lg-3">

                <div class="command-card">
                    💡 Turn ON Bulb

                </div>

            </div>

            <div class="col-lg-3">

                <div class="command-card">
                    🌡 Temperature

                </div>

            </div>

            <div class="col-lg-3">

                <div class="command-card">
                    💨 Smoke Status

                </div>

            </div>

            <div class="col-lg-3">

                <div class="command-card">
                    🚶 Motion Status

                </div>

            </div>

        </div>
        <div class="row mt-4">

            <div class="col-lg-6">

                <div class="status-card">

                    <h4>AI Status

                    </h4>

                    <h2>ONLINE

                    </h2>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="status-card">

                    <h4>Response Time

                    </h4>

                    <h2>0.4 sec

                    </h2>

                </div>

            </div>

        </div>

        <footer class="footer mt-5">

            <p>
                © 2026 ASH INNOVATIES

AI Assistant Module

            </p>

        </footer>

    </div>
    <script src="AI.js"></script>
</asp:Content>
