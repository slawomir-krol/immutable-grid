import React from "react";
import Immutable from "immutable";

import Grid from "./Grid";
import History from "./History";


class GridContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: this.createGrid(this.props.rows, this.props.columns)
        };

        this.onCellClick = this.onCellClick.bind(this);
    }

    createGrid(rows, columns) {
        return rows.map((title, index) => {
            return {
                id: index,
                title: title,
                cells: this.createCells(columns)
            };
        });
    }

    createCells(numOfCells) {
        let cells = [];
        for (var i = 0; i < numOfCells; i++) {
            cells.push({
                id: i,
                active: false
            });
        }
        return cells;
    }

    onCellClick(rowId, columnId) {
        const immutableGrid = Immutable.fromJS(this.state.grid);
        const newGrid = immutableGrid.updateIn([rowId, 'cells', columnId, 'active'], active => !active).toJS();

        this.updateGrid(newGrid);
    }

    updateGrid(grid) {
        this.setState({grid});
    }

    render() {
        return (
            <div className="app">
                <Grid grid={this.state.grid} onCellClick={this.onCellClick}/>

                <History/>
            </div>
        );
    }
}

export default GridContainer;