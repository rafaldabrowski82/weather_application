import React, {Component} from 'react';
import './App.css';
import Result from "./Result";
import Form from "./Form";

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

        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value},pl&APPID=d915e24e3566a267d28c54b548bd2ca5`;

        fetch(API)
            .then(response => {
                if(response.ok) {
                    return response;
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="App">
                <Form value={this.state.value} change={this.handleChange} submit={this.handleCitySubmit}/>
                <Result/>
            </div>
        );
    };
}

export default App;
