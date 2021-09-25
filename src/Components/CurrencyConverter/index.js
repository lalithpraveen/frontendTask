import React, { useEffect, useState } from "react";

import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

const API_URL = "https://api.fastforex.io";
const API_KEY = "api_key=5749cd8114-c82dc5bf9f-qzz0ey";
// api key expires on 2nd october

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [firstInput, setFirstInput] = useState(1);
  const [secondInput, setSecondInput] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("INR");

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    convertCurrency(firstInput, secondInput, firstCurrency, secondCurrency);
  });

  const fetchCurrencies = async () => {
    const response = await axios.get(`${API_URL}/currencies?${API_KEY}`);
    const currencies = response.data.currencies;
    const currencyArr = Object.keys(currencies);
    setCurrencies(currencyArr);
  };

  const handleInputChange = (e) => {
    if (e.target.name === "first") {
      setFirstInput(e.target.value);
      convertCurrency(
        e.target.value,
        secondInput,
        firstCurrency,
        secondCurrency,
        false
      );
    } else {
      setSecondInput(e.target.value);
      convertCurrency(
        e.target.value,
        firstInput,
        secondCurrency,
        firstCurrency,
        true
      );
    }
  };

  const convertCurrency = async (amountFrom, amountTo, from, to, isReverse) => {
    if (amountFrom > 0) {
      const response = await axios.get(
        `${API_URL}/convert?from=${from}&to=${to}&amount=${amountFrom}&${API_KEY}`
      );

      isReverse
        ? setFirstInput(response.data.result[`${to}`])
        : setSecondInput(response.data.result[`${to}`]);
    }
  };
  return (
    <div className="form-group">
      <p>From</p>
      <select
        value={firstCurrency}
        onChange={(e) => setFirstCurrency(e.target.value)}
        className="select mb-3"
      >
        {currencies.map((curr) => {
          return (
            <option key={curr} value={curr}>
              {curr}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        name="first"
        min={1}
        onChange={handleInputChange}
        value={firstInput}
        onKeyDown={(event) => event.key === "e" && event.preventDefault()}
        className="input"
      />
      <br />
      <p>To</p>
      <select
        value={secondCurrency}
        onChange={(e) => setSecondCurrency(e.target.value)}
        className="select"
      >
        {currencies.map((curr) => {
          return (
            <option key={curr} value={curr}>
              {curr}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        name="second"
        min={1}
        onChange={handleInputChange}
        value={secondInput}
        className="input"
        onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
      />
    </div>
  );
};

export default CurrencyConverter;
