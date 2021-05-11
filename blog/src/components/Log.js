import {Component, createContext} from "react";
import {Row, Col, Form, Button} from "react-bootstrap";

export default class Log extends Component {
    render() {
        return (
            <Row className="justify-content-center">
                <Col xs={4} className="mt-5 pt-5">
                    <Form onSubmit="">
                        <Form.Group>
                            <Form.Label>Логин</Form.Label>
                            <Form.Control name="login" type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control name="pwd" type="password"/>
                        </Form.Group>
                        <Button>Войти</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}