import React from "react";

import Cell from "./Cell";

class Row extends React.Component {

    renderCells(row, cells) {
        return cells.map((cell, index) => {
            return (
                <Cell key={index}
                      active={cell.active}
                      rowId={row.id}
                      columnId={cell.id}/>
            );
        });
    }

    renderTitleCell(title) {
        return <Cell title={title}/>;
    }

    render() {
        const {row} = this.props;

        return (
            <div className="row">
                {this.renderTitleCell(row.title)}
                {this.renderCells(row, row.cells)}
            </div>
        );
    }
}

export default Row;