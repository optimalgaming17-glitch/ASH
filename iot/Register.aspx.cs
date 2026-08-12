using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace iot
{
   
    public partial class Register : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["connstr"].ConnectionString);
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                email2.Text=Request.QueryString["email"];
                
            }

        }

        protected void submit_info_login(object sender, EventArgs e)
        {
      
            SqlCommand sql = new SqlCommand("select *from Login where Username=@username and Password=@password", con);

            con.Close();

            sql.Parameters.AddWithValue("@username", email2.Text);
            sql.Parameters.AddWithValue("@password", password2.Text);

            con.Open();

            SqlDataReader sdr = sql.ExecuteReader();

            if(sdr.HasRows)
            {
                sdr.Read();
                Session["login"] = sdr.GetValue(0);
                Session["Email"] = email2.Text.Trim();
                Response.Redirect("DashBoard.aspx");

            }
            else
            {
                Response.Write("<script>alert('Invalid Credentials');</script>");
            }


        }

    }
}