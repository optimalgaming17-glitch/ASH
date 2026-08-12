using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace iot
{
    public partial class LoginPage : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["connstr"].ConnectionString);
        protected void Page_Load(object sender, EventArgs e)
        {
          

        }

        public void sendEmail()
        {
            try
            {
                String useremail = email1.Text.Trim();

                String message = "You have successfully registered in ASHNOVA INNOVATIES......!!!!!!";

                if (String.IsNullOrEmpty(useremail))
                {
                    return;
                }
                if (String.IsNullOrEmpty(message))
                {
                    return;
                }

                // Create email
                MailMessage mail = new MailMessage();

                // Your Gmail account (sender)
                mail.From = new MailAddress("ashnova.inno@gmail.com");

                // Your email where you want to receive messages
                mail.To.Add(useremail);

                mail.Subject = "REGISTRATION INTO ASHNOVA";

                // Include user's email + message
                mail.Body =
                        message;

                // Gmail SMTP
                SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);

                smtp.EnableSsl = true;

                smtp.Credentials = new NetworkCredential(
                    "ashnova.inno@gmail.com",
                    "odxn txge kpya vkht"
                );

                // Send
                smtp.Send(mail);
            }
            catch(Exception e)
            {

            }
        }

        protected void submit_info(object sender, EventArgs e)
        {
            
            string mobile =Mobile_no1.Text.Trim();
            string email = email1.Text.Trim();
            string pass = password1.Text.Trim();

                  
                    
            if (string.IsNullOrWhiteSpace(email))
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal('Enter username..!','','warning');", true);
            }

            if (string.IsNullOrWhiteSpace(mobile))
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal('Enter mobile number..!','','warning');", true);
                return;
            }

            if (string.IsNullOrWhiteSpace(pass))
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal('Enter password..!','','warning');", true);
                return;
            }


            
            SqlCommand sql1 = new SqlCommand("select *from login where Username=@email", con);

            sql1.Parameters.AddWithValue("@email",email1.Text);

            con.Open();

            SqlDataReader sdr = sql1.ExecuteReader();

            if (sdr.HasRows)
            {
                sdr.Close();
                con.Close();
               ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal('Username already exists','','warning');", true);
                return;
            }

            sdr.Close();

            if (!Regex.IsMatch(email, @"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"))
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal('Enter valid email/username','','warning');", true);
                return;
            }

            if (!Regex.IsMatch(mobile, @"^[6-9]\d{9}$"))
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal('Enter valid mobile number','','warning');", true);
                return;
            }

            Session["Email"] = email;

            SqlCommand sql2 = new SqlCommand("insert into Login values(@username,@password,@mobile)", con);

            con.Close();

                sql2.Parameters.AddWithValue("@username", email1.Text);
                sql2.Parameters.AddWithValue("@password", password1.Text);
                sql2.Parameters.AddWithValue("@mobile", Mobile_no1.Text);


            con.Open();

           /* if (true)
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal('Registered Successfully..!','','success');", true);
                return;
            }*/


            sql2.ExecuteNonQuery();

            sendEmail();
            Response.Redirect("Register.aspx?email=" + email1.Text + "&password=" + password1.Text);
          
            email1.Text = "";
            password1.Text = "";
            Mobile_no1.Text = "";

            

            con.Close(); 
        }


    }
}