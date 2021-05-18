import {Component} from "react";
import {Button, Card} from "react-bootstrap";
import {HandThumbsDown, HandThumbsUp} from "react-bootstrap-icons";
import {createStore} from "redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const context = (state = 10, action) => {
  /* 
    action.type - название действия 
    action.value - значение действия
  */
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default: 
      return state;
  }
}

const store = createStore(context);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0
    }
  }
  decrement() {
    return store.dispatch({type: "DEC"});
  }
  increment() {
    return store.dispatch({type: "INC"});
  }
  render() {
    return (
      <div className="App">
        <Card className="w-25">
          <Card.Body>
            <Card.Title>Like me</Card.Title>
            <Card.Text className="d-flex justify-content-center align-items-center">
              <Button onClick={this.decrement()}><HandThumbsDown/></Button>
              <div className="w-25">{store.getState()}</div>
              <Button onClick={this.increment()}><HandThumbsUp/></Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
