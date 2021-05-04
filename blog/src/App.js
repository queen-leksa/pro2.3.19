import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import Cuisine from './components/Сuisine';

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
            <Link to="/">Главная</Link>
            <Link to="/ru">Русская</Link>
            <Link to="/eu">Европейская</Link>
            <Link to="/as">Восточная</Link>
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
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
