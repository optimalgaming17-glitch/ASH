using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.IO;
using System.Web.Services;
using System.Net.Http;
using System.Web;
using System.Web.Configuration;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace iot
{
    public partial class DashBoard : System.Web.UI.Page
    {
        private static readonly HttpClient client = new HttpClient();
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["login"] == null)
            {
                Response.Redirect("LoginPage.aspx");
            }

        }

        [WebMethod]
        public static string BulbON()
        {
            try
            {
                using (WebClient wc = new WebClient())
                {
                    return wc.DownloadString("http://10.207.67.101/bulbon");
                }
            }
            catch
            {
                return "ESP32 Offline";
            }
        }

        [WebMethod]
        public static string BulbOFF()
        {
            try
            {
                using (WebClient wc = new WebClient())
                {
                    return wc.DownloadString("http://10.207.67.101/bulboff");
                }
            }
            catch
            {
                return "ESP32 Offline";
            }
        }

        [WebMethod]
        public static string BulbStatus()
        {
            try
            {
                using (WebClient wc = new WebClient())
                {
                    return wc.DownloadString("http://10.207.67.101/bulbstatus");
                }
            }
            catch
            {
                return "ESP32 Offline";
            }
        }


    }

}