import React from 'react';
import './Result.css';

const Result = (props) => {
    const {city, date, sunrise, sunset, temp, pressure, wind, error} = props.state;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const content = () => {
        if (!city) {
            return null;
        } else if (city && !error) {
            return (
                <>
                    <p>Miejscowość: <strong>{city}</strong></p>
                    <p>Data: {date}</p>
                    <p>Wschód słońca: {sunriseTime}</p>
                    <p>Zachód słońca: {sunsetTime}</p>
                    <p>Temperatura: {temp} &#176;C</p>
                    <p>Ciśnienie: {pressure}</p>
                    <p>Wiatr: {wind}</p>
                </>
            );
        } else if (error) {
            return (
                <>
                    <p>Nie ma takiej miejscowości! Kod błędu: { String(error) }</p>
                </>
            )
        }

    };
    return (
        <div className="content">
            {content()}
        </div>
    )
};

export default Result;