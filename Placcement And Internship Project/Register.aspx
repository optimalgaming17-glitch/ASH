<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="Placcement_And_Internship_Project.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Register Page</title>
     <link rel="stylesheet" href="Register.css" />
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>  
</head>
<body style=" background-color:black;" on-data="false">   
    <form id="form2" runat="server">

       <div class="container">

           <div class="logo">
            <img src="Images/perfect_logo.png" />
        </div>
    
           <div class="card">
               <div class="card-body">
                <div class="row">
                <div class="column-md-6">
                  <div class="form-group">
                      <asp:Label ID="name" runat="server">Enter Name</asp:Label>
                      <asp:TextBox cssClass="form-control" ID="Tname" runat="server"></asp:TextBox>
                  </div>
                </div>
                <div class="column-md-6">
                          <div class="form-group">
                            <asp:Label ID="Label1" runat="server">Enter Mobile Number</asp:Label>
                            <asp:TextBox cssClass="form-control" ID="TextBox1" runat="server"></asp:TextBox>
                        </div>
                </div>
                    </div>

                   <div class="form-group">
                         <asp:Label ID="Label2" runat="server">Enter Email</asp:Label>
                         <asp:TextBox cssClass="form-control container-fluid" ID="TextBox2" runat="server"></asp:TextBox>
                   </div>

                  <div class="form-group">
                         <asp:Label ID="Label3" runat="server">Enter Password</asp:Label>
                         <asp:TextBox cssClass="form-control container-fluid" ID="TextBox3" runat="server"></asp:TextBox>
                   </div>

                   <asp:Button runat="server" ID="submit" cssClass="btn btn-primary" Text="Register"/>
               </div>
           </div>
            
              
           
                    
       </div>
   </form>

</body>
</html>
