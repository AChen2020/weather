import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Label = (props) => {
    return (<span className="weatherLable">{props.text}</span>);
}

const Content = (props) => {
    return (<span className="weatherContent">{props.text}</span>);
}

export default function WeatherDetail(props) {
    return (
        <Container>
            <Row>
                <Col><Label text={props.data?.weather[0]?.main}/> - <Content text={props.data?.weather[0]?.description} /></Col>
                <Col><Label text="Wind:"/>  <Content text={props.data?.wind?.speed} /></Col>
            </Row>
            <Row>
                <Col><Label text="Temperature:"/> <Content text={props.data?.main?.temp} />  &deg;C </Col>
                <Col><Label text="Humidity:"/> <Content text={props.data?.main?.humidity} /></Col>
            </Row>
        </Container>

    )
}
