import {Component, createContext} from "react";
import {Card, Button} from "react-bootstrap";

const UserContex = createContext();

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Guest",
            edit: false,
            newName: "Guest"
        }
    }
    render() {
        return (
            <UserContex.Provider value={{
                state: this.state,
                change: () => {
                    if (this.state.edit) {
                        this.setState({
                            name: this.state.newName,
                            newName: "Guest"
                        });
                    }
                    this.setState({
                        edit: !this.state.edit
                    });
                },
                setName: (e) => {
                    this.setState({
                        newName: e.target.value
                    });
                }
            }}>
                <div>
                    <UserCard/>
                    <UserInput/>
                </div>
            </UserContex.Provider>
        )
    }
}

class UserCard extends Component {
    render() {
        return (
            <UserContex.Consumer>
                {(ctx) => (
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center display-3">{ctx.state.name}</Card.Title>
                            <Card.Text className="text-right">
                                <Button className="btn-dark" onClick={ctx.change}>Change</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </UserContex.Consumer>
        )
    }
}

class UserInput extends Component {
    render() {
        return (
            <UserContex.Consumer>
                {(ctx) => {
                    if (ctx.state.edit) {
                        return <input className="form-control mt-3" type="text" defaultValue={ctx.state.name} onChange={ctx.setName}/>
                    }
                }}
            </UserContex.Consumer>
        )
    }
}

export default User;