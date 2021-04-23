import Table from "./components/Table";
import React from "react";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
    searched: []
  };

  async componentDidMount() {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results, searched: data.results });
  }

  handleSort = () => {
    const sortedArr = this.state.searched.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
    this.setState({searched: sortedArr})
  }

  handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    const searchedArr = this.state.employees.filter(emp => emp.name.first.toLowerCase().startsWith(value))
    this.setState({
      searched: searchedArr,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Enter a name!
          </label>
          <input
            name="searchText"
            type="search"
            class="form-control"
            id="searchText"
            onChange={this.handleInputChange}
          />
          <div id="emailHelp" class="form-text">
            Click the button to put names in alphabetic order
          </div>
          <button onClick={this.handleSort}>Sort</button>
        </div>
        <Table users={this.state.searched} />
      </div>
    );
  }
}

export default App;
