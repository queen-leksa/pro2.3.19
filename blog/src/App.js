import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import {Container, Row, Col, Nav} from "react-bootstrap";
import Cuisine from './components/Сuisine';
import Log from './components/Log';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: []
    }
  }
  componentDidMount() {
    fetch("/data.json").then(res => res.json()).then(data => {
      this.setState({
        cuisine: data
      })
    })
  }

  setRoutes() {
    return this.state.cuisine.map(el => (
      <Route path={`/${el.path}`} >
        <Cuisine name={el.name} dishes={el.dishes}/>
      </Route>
    ));
  }
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row>
            <Col md={6}>
              <Nav>
                <Nav.Item>
                  <Link to="/" className="nav-link">Главная</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/ru" className="nav-link">Русская</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/eu" className="nav-link">Европейская</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/as" className="nav-link">Восточная</Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col  md={6}>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Link to="/log" className="nav-link">Войти</Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Switch>
            <Route path="/" exact>
              <Row>
                <Col xs="12">
                  <h1 className="display-1">Hello From Bootstrap</h1>
                </Col>
              </Row>
            </Route>
            {this.setRoutes()}
            <Route path="/log" exact>
              <Log/>
            </Route>
          </Switch>
          {/* <Row>
            <Col xs="3">
              <User/>
            </Col>
          </Row> */}
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
