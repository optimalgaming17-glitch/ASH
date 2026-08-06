using System;

namespace Placcement_And_Internship_Project
{
    public partial class WebForm1: System.Web.UI.Page
    {
        public string UserName = "James";
        public string UserName = "James";
        public string TodayDate = DateTime.Now.ToString("d MMMM, yyyy");
        public string TodayTime = DateTime.Now.ToString("HH:mm");
        public int OutsideTempC = 19;
        public double HumidityPercent = 65.0;
        public int LightingIntensity = 80;
        public int ThermostatTempC = 25;
        public int ThermostatMin = 18;
        public int ThermostatMax = 30;
        public int ThermostatWatts = 600;

        public class ConsumptionPoint
        {
            public string Label;
            public int Value;
            public ConsumptionPoint(string label, int value) { Label = label; Value = value; }
        }

        public ConsumptionPoint[] Consumption = new[]
        {
            new ConsumptionPoint("Jan", 60),
            new ConsumptionPoint("Feb", 70),
            new ConsumptionPoint("Mar", 55),
            new ConsumptionPoint("Apr", 150),
            new ConsumptionPoint("Mei", 65),
            new ConsumptionPoint("Jun", 90)
        };

        public string[] Rooms = new[] { "Living Room", "Bedroom", "Kitchen", "Dining Room", "Play Room" };

        public int ThermoPct
        {
            get { return (ThermostatTempC - ThermostatMin) * 100 / (ThermostatMax - ThermostatMin); }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            // TODO: replace the hardcoded fields above with real reads from your
            // IoT backend/database (e.g. a service call or a SQL query) here.
        }
    }
}