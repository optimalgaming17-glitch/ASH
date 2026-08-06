<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Placcement_And_Internship_Project.WebForm3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <title>Login Page</title>
     <link rel="stylesheet" href="Login.css">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>  
</head>
<body data-on="false">

    <form ID="form1" runat="server" onsubmit="return false;">
        
    <div class="container">

            <div class="logo">
                <img src="Images/perfect_logo.png" />
            </div>
    
        

  <div class="lamp-wrapper" style="margin-top:100px;">
    <svg class="lamp-svg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
      <ellipse class="inner-glow" cx="100" cy="110" rx="60" ry="30" />

      <rect class="lamp-base" x="92" y="100" width="16" height="160" rx="8" />

      <rect class="lamp-base" x="60" y="250" width="80" height="12" rx="6" />

      <g class="pull-cord">
        <line class="cord-line" x1="130" y1="110" x2="130" y2="180" />
        <circle class="cord-bead" cx="130" cy="190" r="6" />
        <circle class="cord-hit" cx="130" cy="190" r="25" fill="transparent" />
      </g>

      <path class="lamp-shade" d="M30 110 C 30 50, 170 50, 170 110 C 170 125, 30 125, 30 110 Z" />
    </svg>
  </div>

  <div class="login-form">
   <h2>Welcome</h2>

   
     <div class="form-group">
       <asp:Label runat="server" cssClass="login-label">Username</asp:Label>
       <asp:TextBox ID="username" CssClass="login-input" runat="server" TextMode="SingleLine"></asp:TextBox>
     </div>

    <div class="form-group">
      <asp:Label runat="server" cssClass="login-label">Choose Your Role</asp:Label>
      <asp:DropDownList runat="server" CssClass="login-input">
          <asp:ListItem>Student</asp:ListItem>
          <asp:ListItem>Admin</asp:ListItem>
          <asp:ListItem>Company Admin</asp:ListItem>
      </asp:DropDownList>
   </div>
     <div class="form-group">
       <asp:Label runat="server" cssClass="login-label">Enter Password</asp:Label>
       <asp:TextBox runat="server" CssClass="login-input" TextMode="Password"></asp:TextBox>
     </div>

     
     <asp:Button cssClass="login-btn" runat="server" Text="Sign In"/>

       <center>
               <asp:Label ID="lblNewUser" Style="color:white;" runat="server" Text="New User?"></asp:Label>
            <asp:HyperLink ID="lnkCreate" runat="server" NavigateUrl="Register.aspx" Text="Create Account"></asp:HyperLink>

       </center>
    
 </div>
</div>
 </form>
<script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
<script src="https://unpkg.com/gsap@3/dist/Draggable.min.js"></script>
<script src="Login.js"></script>
   
</body>
</html>
