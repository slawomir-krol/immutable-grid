import React from "react";

import Row from "./Row";

class Grid extends React.Component {

    renderRows(rows, onCellClick) {
        return rows.map(row => {
            return <Row key={row.id} row={row} onCellClick={onCellClick}/>
        });
    }

    render() {
        return (
            <div className="grid">
                {this.renderRows(this.props.grid, this.props.onCellClick)}
            </div>
        );
    }
}

export default Grid;