<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="Profile.aspx.cs" Inherits="iot.WebForm5" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Profile.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <div class="container-fluid p-5">

        <!-- HERO -->

        <div class="hero">

            <h1>

                <i class="bi bi-person-circle"></i>

                My Profile

</h1>

            <p>
                Manage your ASH INNOVATIES Account

            </p>

        </div>

        <div class="row g-4">

            <div class="col-lg-4">

                <div class="profile-card">

                    <img
                        src="Images/profile.png"
                        class="profile-image" />

                    <h2>Harsh

                    </h2>

                    <p>
                        Administrator

                    </p>

                    <button class="btn btn-primary">
                        Change Photo

                    </button>

                </div>

            </div>

            <div class="col-lg-8">

                <div class="details-card">

                    <h3>Personal Information

                    </h3>

                    <div class="row">

                        <div class="col-md-6">

                            <label>Full Name</label>

                            <input
                                type="text"
                                class="form-control"
                                value="Harsh" />

                        </div>

                        <div class="col-md-6">

                            <label>Email</label>

                            <input
                                type="email"
                                class="form-control"
                                value="harsh@gmail.com" />

                        </div>

                        <div class="col-md-6 mt-3">

                            <label>Phone</label>

                            <input
                                type="text"
                                class="form-control"
                                value="+91 9876543210" />

                        </div>

                        <div class="col-md-6 mt-3">

                            <label>Role</label>

                            <input
                                type="text"
                                class="form-control"
                                value="Administrator" />

                        </div>

                    </div>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="security-card">

                    <h3>Account Security

                    </h3>

                    <button class="btn btn-primary w-100">
                        Change Password

                    </button>

                    <button class="btn btn-warning w-100 mt-3">
                        Enable 2FA

                    </button>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="security-card">

                    <h3>Account Information

                    </h3>

                    <h5>Member Since

                    </h5>

                    <p>
                        January 2026

                    </p>

                    <h5>Last Login

                    </h5>

                    <p>
                        Today • 10:35 AM

                    </p>

                </div>

            </div>

        </div>

        <footer class="footer mt-5">

            <p>
                © 2026 ASH INNOVATIES • Profile Module

            </p>

        </footer>

    </div>
    <script src="Profile.js"></script>
</asp:Content>
