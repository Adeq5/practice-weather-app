import { useState, useEffect } from "react";
import CurrentDateTime from "./CurrentDateTime";
import { displayIcon } from "./WeatherIcons";

export interface WeatherData {
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: DayData[];
}
export interface DayData {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  humidity: number;
  preciptype: string[] | null;
  snow: number;
  snowdepth: number;
  windspeed: number;
  pressure: number;
  sunrise: string;
  sunset: string;
  conditions: string;
  description: string;
  icon: string;
  hours: HourData[];
}

export interface HourData {
  datetime: string;
  temp: number;
  feelslike: number;
  humidity: number;
  snow: number;
  snowdepth: number;
  preciptype: string | null;
  windspeed: number;
  pressure: number;
  cloudcover: number;
  conditions: string;
  icon: string;
}

interface Props {
  city: string;
  numberOfDays: number;
}

const Data = ({ city, numberOfDays }: Props) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=XKWWMSZ5FZNQHWEX3D6C7P44U&contentType=json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError("Error fetching weather data");
        console.error(error);
      }
    };

    fetchWeather();
  }, [city]);

  if (error) return <div>{error}</div>;
  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="data-container">
      <section className="weather-section">
        <h1 className="location">Weather in {weatherData.resolvedAddress}</h1>
        <h2 className="current-date-time">
          <CurrentDateTime />
        </h2>
        <div className="weather-info">
          <h2 className="temperature">{weatherData.days[0].temp}°C</h2>
          <p className="condition">{weatherData.description}</p>
          <div className="details">
            <p>Humidity: {weatherData.days[0].humidity}%</p>
            <p>Wind Speed: {weatherData.days[0].windspeed} km/h</p>
          </div>
        </div>
      </section>

      <h2 className="forecast-header">{numberOfDays}-Day Forecast</h2>
      <div className="forecast-container">
        {weatherData.days.slice(0, numberOfDays).map((day, index) => (
          <div key={index} className="day-forecast">
            <p className="date">{day.datetime}</p>
            <div className="weather-icon">{displayIcon(day.conditions)}</div>
            <div className="icons-container">
              <div className="icon-child">
                <img
                  className="small-icon"
                  src="src/components/WeatherApp/img/icons8-thermometer-48.png"
                ></img>
                {day.temp}°C{" "}
              </div>
              <div className="icon-child">
                <img
                  className="small-icon"
                  src="src/components/WeatherApp/img/icons8-dew-point-48.png"
                ></img>
                {day.humidity}%
              </div>
            </div>
            <p>Wind Speed: {day.windspeed} km/h</p>
            <p>{day.conditions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
