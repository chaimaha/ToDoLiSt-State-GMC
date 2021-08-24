import "./App.css";
import ToDoList from "./assets/ToDoList";
import { Component } from "react";

class TODO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: Math.random(), name: "task 1" },
        { id: Math.random(), name: "task 2" },
        { id: Math.random(), name: "task 3" },
      ],
    };
  }
  handleDelete = (id) => {
    this.setState({ data: this.state.data.filter((el) => el.id !== id) });
  };
  handleAdd = (item) => {
    this.setState({
      data: this.state.data.concat({ name: item, id: Math.random() }),
    });
  };
  render() {
    return (
      <div>
        <ToDoList
          items={this.state.data}
          Add={this.handleAdd}
          Delate={this.handleDelete}
        ></ToDoList>
        {console.log(this.state.data)}
      </div>
    );
  }
}

export default TODO;
