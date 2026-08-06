<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="iot.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Login Page</title>
    <link href="LoginPage.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/izitoast/dist/css/iziToast.min.css"/>

     <%--sweetalert referneces--%>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.0/sweetalert.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.0/sweetalert.min.css" rel="stylesheet" type="text/css" />

</head>
<body>
    <form id="form1" runat="server">
        <div>

                <div class="container">
     

        <div class="left">

            <div class="logo">
                <h1>ASH</h1>
                <h3>SMARTNOVA</h3>
                <p>Smart Home Automation System</p>
            </div>

        </div>

        <div class="right">

            <div class="login-box">

                <h2>Welcome Back 👋</h2>

                

                    <div class="inputBox">
                      <asp:Label cssClass="input_label" ID="email" runat="server">Enter Username(Email):</asp:Label>
                        <asp:TextBox ID="email2" runat="server"></asp:TextBox>
                    </div>

                     

                    <div class="inputBox">
                         <asp:Label cssClass="input_label" ID="password" runat="server">Enter Password</asp:Label>
                          <asp:TextBox ID="password2" TextMode="Password" runat="server"></asp:TextBox>
                    </div>

                   


                    <div class="remember">

                        <asp:Label ID="rem" runat="server">
                           <asp:CheckBox runat="server" state="false"/>
                            Remember Me
                        </asp:Label>

                       

                    </div>
                        
                    <asp:Button cssClass="btn" onClick="submit_info_login" ID="submit" runat="server" Text="Login" />

                    <p class="register">
                        Doesn't have an account?
                        <a href="LoginPage.aspx">Register</a>
                    </p>

                

            </div>

        </div>

    </div>
        </div>
    </form>
    <script src="https://cdn.jsdelivr.net/npm/izitoast/dist/js/iziToast.min.js"></script>
</body>
</html>
