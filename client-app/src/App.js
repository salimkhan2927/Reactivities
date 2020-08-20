import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Header, Icon, List } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      console.log(response);
      this.setState({
        values: response.data,
      });
    });
  }
  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
