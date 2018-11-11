import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    tableDataValues: [],
    data: []
  };
  componentDidMount() {
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
    // const url = "https://ghibliapi.herokuapp.com/films";
    // const url = "https://api.nasa.gov/planetary/apod?api_key=zLXx8dF0HBgIWlQ2txyzDODYZmjJ4PLAnMpkK0N5";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      });
  }
  removeTableData = index => {
    const { tableDataValues } = this.state;
    this.setState({
      tableDataValues: tableDataValues.filter((tableDataValues, i) => {
        return i !== index;
      })
    });
  }
  handleSubmit = tableDataValues => {
    this.setState({ tableDataValues: [...this.state.tableDataValues, tableDataValues] });
  }
  render() {
    // heading variables
    const name = "Tanya";
    const heading = <h1 className="site-heading">Hello, {name} variable!</h1>

    const { data } = this.state;
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return (
      <div className="App">
        {heading}
        <Table
          tableData={this.state.tableDataValues}
          removeTableData={this.removeTableData}
        />
        <Form handleSubmit={this.handleSubmit} />
        <ul>{result}</ul>;
      </div>
    );
  }
}

export default App;
