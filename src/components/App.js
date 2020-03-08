import React, {Component} from 'react';
import './App.css';
import Result from "./Result";
import Form from "./Form";

const key="d915e24e3566a267d28c54b548bd2ca5";

class App extends Component {
    state = {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        pressure: '',
        wind: '',
        error: '',
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    };

    handleCitySubmit = (e) => {
        e.preventDefault();
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value},pl&APPID=${key}&units=metric`;

        fetch(API)
            .then(response => {
                if(response.ok) {
                    return response;
                }
                throw Error ("Nie udało się, kod błędu: " + response.status);
            })
            .then(response => response.json())
            .then(data => {
                const date = new Date().toLocaleString();
                this.setState({
                    city: data.name,
                    date,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    error: false,
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    value: '',
                    date: '',
                    sunrise: '',
                    sunset: '',
                    temp: '',
                    pressure: '',
                    wind: '',
                    error: err,
                    city: this.state.value,
                })
            })
    };

    render() {
        return (
            <div className="App">
                <Form value={this.state.value} change={this.handleChange} submit={this.handleCitySubmit}/>
                <Result state={this.state} error={this.state.error}/>
            </div>
        );
    };
}

export default App;
