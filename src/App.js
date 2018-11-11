import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    tableDataValues: []
  };
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

    return (
      <div className="App">
        {heading}
        <Table
          tableData={this.state.tableDataValues}
          removeTableData={this.removeTableData}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
