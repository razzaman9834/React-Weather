import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);
            console.log(data);
            setWeather(data);
            setQuery('');
        }
    }


    function SwitchCase(props) {

        switch (props.value) {

            case 'clear sky' && "01d":

                return <div class="weather sunny"></div>;

            case 'broken clouds' && "04d":

                return <div class="weather brokenC"></div>;

            case 'few clouds' && "02d":

                return <div class="weather sunny"><div class="lesscloudy"></div></div>;

            case 'scattered clouds' && "03d":

                return <div class="weather lesscloudy"></div>;

            case 'shower rain' && "09d":

                return <div class="weather showerR"></div>;


            case 'rain' && "10d":

                return <div class="weather rainy"></div>;

            case 'thunderstorm' && "11d":

                return <div class="weather rainy"></div>;

            case 'snow' && "13d":

                return <div class="weather snowy"></div>;

            case 'mist' && "50d":

                return <div class="weather snowy"></div>;

            case 'broken clouds' && "04d":

                return <div class="weather sunny"></div>;

            case 'few clouds' && "02d":

                return <div class="weather sunny"></div>;

            case 'scattered clouds' && "03d":

                return <div class="weather cloudy"></div>;

            case 'shower rain' && "09d":

                return <div class="weather rainy"></div>;


            case 'rain' && "10d":

                return <div class="weather sunny"><div class="lesscloudy"></div><div class="rainyOnly"></div></div>;

            case 'thunderstorm' && "11d":

                return <div class="weather lesscloudy">
                    <div class="haze"></div>
                    <div class="haze_stripe"></div>
                    <div class="haze_stripe"></div>
                    <div class="haze_stripe"></div>
                    <div class="thunder"></div>
                </div>;

            case 'snow' && "13d":

                return <div class="weather snowy"></div>;

            case 'mist' && "50d":

                return <div class="weather mist"></div>;





            case 'clear sky' && "01n":

                return <div class="weather moon"><ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>


                </div>;

            case 'broken clouds' && "04n":

                return <div class="weather brokenC"></div>;

            case 'few clouds' && "02n":

                return <div class="weather moon"><ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul><div class="lesscloudy"></div></div>;

            case 'scattered clouds' && "03n":

                return <div class="weather lesscloudy"></div>;

            case 'shower rain' && "09n":

                return <div class="weather showerR"></div>;


            case 'rain' && "10n":

                return <div class="weather moon"><div class="lesscloudy"></div><ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul><div class="rainyOnly"></div></div>;

            case 'thunderstorm' && "11n":

                return <div class="weather lesscloudy">
                    <div class="haze"></div>
                    <div class="haze_stripe"></div>
                    <div class="haze_stripe"></div>
                    <div class="haze_stripe"></div>
                    <div class="thunder"></div>
                </div>;

            case 'snow' && "13n":

                return <div class="weather snowy"></div>;

            case 'mist' && "50n":

                return <div class="weather mist"></div>;

            default:

                return 'You are a User';

        }

    }

    return (
        <div>
        <div className="box">
            <div className="tempp">
                <div class="col-xs-12">
                    <input type="text" class="form-control" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}></input>
                </div> </div> {
                query ? (

                    <h2 className="temp">No data found</h2>
                ) : (
                    weather.main && (
                        <div className="temp">
                            <h2 className="temp">
                                <span>{weather.name}</span>
                                <sup>{weather.sys.country}</sup>

                            </h2>
                            <div className="temp">
                                {weather.main.temp}
                                <sup>&deg;C</sup>
                            </div>
                            <div className="info">

                                <p>{weather.weather[0].description}</p>
                            </div>
                            <h3 className="tempmin_max"> Min {weather.main.temp_min}°C | max {weather.main.temp_max}°C</h3>


                            <h3 className="city-icon"> <SwitchCase value={weather.weather[0].description, weather.weather[0].icon} /></h3>

                            <h2 className="humid"> Humidity : {weather.main.humidity} </h2>
                            <h2 className="windspeed"> Wind Speed : {weather.wind.speed} km/hr </h2>

                            <div>

                                <div className="wave -one"></div>
                                <div className="wave -two"></div>
                                <div className="wave -three"></div>

                            </div>
                            <h2 className="humid"> © Aman Raj </h2>
                        </div>

                    ))
            }  

        </div>

        
        </div>
    );
}

export default App;