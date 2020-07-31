import React from 'react';

import WeatherCard from './WeatherCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WeatherApp() {
    return (
        <Container>
            <Row>
                <Col>
                    {
                        ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Hobart", "Canberra", "Darwin"]
                        .map((r,i) => <WeatherCard city={r} key={i}/>)
                    }   
                </Col>
            </Row>
          
        </Container>
    )
}
