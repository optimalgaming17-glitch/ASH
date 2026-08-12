using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Runtime.Remoting.Messaging;
using System.Web;
using System.Web.Services.Description;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace iot
{
    public partial class Site2 : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void sendMail(object sender, EventArgs e)
        {
           String useremail = Session["Email"]?.ToString();

            String message = txtEmail.Text;

           if(String.IsNullOrEmpty(useremail))
            {
                return;
            }
           if(String.IsNullOrEmpty(message))
            {
                return;
            }

            // Create email
            MailMessage mail = new MailMessage();

            // Your Gmail account (sender)
            mail.From = new MailAddress(useremail);

            // Your email where you want to receive messages
            mail.To.Add("ashnova.inno@gmail.com");

            mail.Subject = "New Message from ASH Website";

            // Include user's email + message
            mail.Body =
                "User Email: " + useremail + "\n\n" +
                "Message:\n" + message;

            // Gmail SMTP
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);

            smtp.EnableSsl = true;

            smtp.Credentials = new NetworkCredential(
                "ashnova.inno@gmail.com",
                "odxn txge kpya vkht"
            );

            // Send
            smtp.Send(mail);

            // Clear textbox
            txtEmail.Text = "";
        }


    }
}