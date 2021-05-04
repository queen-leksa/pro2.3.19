import React from "react";
import {Card} from "react-bootstrap";

export default class Dish extends React.Component {
    render() {
        let info = this.props.info;
        return <Card>
            <Card.Img variant="top" src={info.img} />
            <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <Card.Text>{info.intro}</Card.Text>
            </Card.Body>
        </Card>
    }
}