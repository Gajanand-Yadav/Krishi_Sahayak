import react from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "./WeatherAlerts.css";
const WeatherAlerts = () => {
  return (
    <div className="weatheralerts">
      <p className="weatheralerts-discription">
        {" "}
        Protect your crops from adverse weather. Get timely, hyper-local
        forecasts and alerts for your specific farm to prevent losses.
      </p>
    </div>
  );
};

export default WeatherAlerts;
