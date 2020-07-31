import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WeatherDetail(props) {
    return (
        <Container>
            <Row>
                <Col>{props.data?.weather[0]?.main} - {props.data?.weather[0]?.description}</Col>
                <Col>Wind:  {props.data?.wind?.speed}</Col>
            </Row>
            <Row>
                <Col>Temperature: {props.data?.main?.temp} </Col>
                <Col>Humidity: {props.data?.main?.humidity}</Col>
            </Row>
        </Container>

    )
}
