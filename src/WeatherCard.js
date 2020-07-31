import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import WeatherDetail from './WeatherDetail';

const Loading = () => {
    return (<Spinner animation="border" variant="primary" />)
}

export default function WeatherCard(props) {
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState({weather: []});

    useEffect(() => {
        setLoading(true);
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + props.city + "&appid=82f64da34251b0e58e057d344f3307a1&units=metric", {
            method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setWeatherData(data);
            })
            .catch(e => {
                console.error(e);        
            });   
    }, [props.city])

    return (
        <Card style={{ width: '50rem' }}>
            <Card.Title>{props.city}</Card.Title>
            <Card.Body>
                {loading && <Loading/>}
                <WeatherDetail data={weatherData} />
            </Card.Body>
        </Card>
    )
}
