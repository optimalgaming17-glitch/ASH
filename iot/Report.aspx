<%@ Page Title="" Language="C#" MasterPageFile="~/ASHMASTER.Master" AutoEventWireup="true" CodeBehind="Report.aspx.cs" Inherits="iot.Report" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Report.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <div class="container-fluid p-5">
        <div class="hero">

            <h1>
                <i class="bi bi-file-earmark-bar-graph-fill"></i>
                Reports Dashboard
            </h1>

            <p>
                Monitor, Search & Export Complete IoT Reports

            </p>

        </div>
        <div class="row mt-4">

            <div class="col-lg-3">

                <div class="report-card">

                    <h5>Total Reports</h5>

                    <h2 id="totalReports">248</h2>

                    <p>Generated</p>

                </div>

            </div>

            <div class="col-lg-3">

                <div class="report-card">

                    <h5>Temperature</h5>

                    <h2 id="tempReports">74</h2>

                    <p>Records</p>

                </div>

            </div>

            <div class="col-lg-3">

                <div class="report-card">

                    <h5>Smoke</h5>

                    <h2 id="smokeReports">53</h2>

                    <p>Records</p>

                </div>

            </div>

            <div class="col-lg-3">

                <div class="report-card">

                    <h5>Motion</h5>

                    <h2 id="motionReports">121</h2>

                    <p>Records</p>

                </div>

            </div>

        </div>

        <div class="filter-card mt-4">

            <div class="row">

                <div class="col-lg-3">

                    <label>Report Type</label>

                    <select class="form-select">

                        <option>All Reports</option>

                        <option>Temperature</option>

                        <option>Smoke</option>

                        <option>Motion</option>

                        <option>Smart Bulb</option>

                    </select>

                </div>

                <div class="col-lg-3">

                    <label>From Date</label>

                    <input type="date" class="form-control" />

                </div>

                <div class="col-lg-3">

                    <label>To Date</label>

                    <input type="date" class="form-control" />

                </div>

                <div class="col-lg-3 d-flex align-items-end">

                    <button class="btn btn-primary w-100">

                        <i class="bi bi-search"></i>

                        Search

                    </button>

                </div>

            </div>

        </div>

        <div class="table-card mt-4">

            <h3>Recent Reports

            </h3>

            <div class="table-responsive">

                <table class="table table-hover align-middle">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Type</th>

                            <th>Status</th>

                            <th>Date</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>#1001</td>

                            <td>Temperature</td>

                            <td>

                                <span class="badge bg-success">Normal

                                </span>

                            </td>

                            <td>27-07-2026</td>

                            <td>

                                <button class="btn btn-sm btn-primary">
                                    View

                                </button>

                            </td>

                        </tr>

                        <tr>

                            <td>#1002</td>

                            <td>Smoke</td>

                            <td>

                                <span class="badge bg-danger">Danger

                                </span>

                            </td>

                            <td>27-07-2026</td>

                            <td>

                                <button class="btn btn-sm btn-primary">
                                    View

                                </button>

                            </td>

                        </tr>

                        <tr>

                            <td>#1003</td>

                            <td>Motion</td>

                            <td>

                                <span class="badge bg-warning text-dark">Detected

                                </span>

                            </td>

                            <td>27-07-2026</td>

                            <td>

                                <button class="btn btn-sm btn-primary">
                                    View

                                </button>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

       

    </div>
    <script src="Report.js"></script>
</asp:Content>
