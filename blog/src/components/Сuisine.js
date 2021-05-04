import React from "react";
import {Row, Col} from "react-bootstrap";
import Dish from "./Dish";

export default class Cuisine extends React.Component {
    render() {
        return <Row>
            <Col xs="12" className="pb-5">
                <h1 className="display-1">{this.props.name}</h1>
            </Col>
            {this.props.dishes.map(d => <Col sm="3" xs="6"><Dish info={d}/></Col>)}
        </Row>
    }
}