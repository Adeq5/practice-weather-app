export const displayIcon = (weatherCondition: string): JSX.Element | null => {
  const firstCondition = weatherCondition.split(",")[0].trim().toLowerCase();

  if (firstCondition === "cloudy") {
    return (
      <img
        src="src/components/WeatherApp/img/icons8-cloud-96.png"
        alt="Cloudy"
      />
    );
  } else if (firstCondition === "partially cloudy") {
    return (
      <img
        src="src/components/WeatherApp/img/icons8-partly-cloudy-day-96.png"
        alt="Partially Cloudy"
      />
    );
  } else if (firstCondition === "rain") {
    return (
      <img
        src="src/components/WeatherApp/img/icons8-heavy-rain-96.png"
        alt="Rain"
      />
    );
  } else if (firstCondition === "snow") {
    return (
      <img src="src/components/WeatherApp/img/icons8-snow-96.png" alt="Snow" />
    );
  } else if (firstCondition === "clear") {
    return (
      <img src="src/components/WeatherApp/img/icons8-sun-96.png" alt="Clear" />
    );
  } else if (firstCondition === "overcast") {
    return (
      <img
        src="src/components/WeatherApp/img/icons8-clouds-96.png"
        alt="Overcast"
      />
    );
  } else {
    return (
      <img
        src="src/components/WeatherApp/img/icons8-rainbow-96.png"
        alt="Default"
      />
    );
  }
};
