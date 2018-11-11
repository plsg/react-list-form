import React, { Component } from "react";

class Table extends Component {
    render() {
        const { tableData, removeTableData } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody
                    tableData={tableData}
                    removeTableData={removeTableData}
                />
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th></th>
            </tr>
        </thead>
    );
}
const TableBody = props => {
    const rows = props.tableData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeTableData(index)}>Delete</button></td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>;
}

export default Table;