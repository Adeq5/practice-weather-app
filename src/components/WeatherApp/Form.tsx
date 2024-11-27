import React, { useState } from "react";
import Data from "./Data";
const Form = () => {
  const [city, setCity] = useState<string>("NowySacz");
  const [numberOfDays, setNumberOfDays] = useState<number>(1);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityValue = e.target.value;
    setCity(cityValue);
  };
  const handleNumberOfDays = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dayValue = Number(e.target.value);
    setNumberOfDays(dayValue);
  };
  return (
    <div className="form-container">
      <form className="styled-form">
        <label htmlFor="select" className="form-label">
          Select city:
        </label>
        <select
          name="select"
          id="select"
          className="form-select"
          aria-label="Select city"
          onChange={handleSelectChange}
        >
          <option value="NowySacz" selected>
            Nowy Sącz
          </option>
          <option value="Krakow">Kraków</option>
          <option value="Warsaw">Warszawa</option>
          <option value="Katowice">Katowice</option>
          <option value="LosAngeles">Los Angeles</option>
          <option value="New_York">New York</option>
          <option value="Valencia">Walencja</option>
          <option value="Sydney">Sydney</option>
          <option value="Boston">Boston</option>
          <option value="Miami">Miami</option>
        </select>

        <label htmlFor="quantity" className="form-label">
          Select number of days for forecast (1-15):
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={handleNumberOfDays}
          className="form-input"
          pattern="^(0|[1-9]|1[0-5])$"
          placeholder="1-15"
        />
      </form>
      <div className="data-section">
        <Data city={city} numberOfDays={numberOfDays} />
      </div>
    </div>
  );
};

export default Form;
