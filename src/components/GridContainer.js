import React from "react";
import Immutable from "immutable";

import Grid from "./Grid";
import History from "./History";

class GridContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: this.createGrid(this.props.rows, this.props.columns),
            history: Immutable.List(),
            future: Immutable.List()
        };

        this.onCellClick = this.onCellClick.bind(this);
        this.undo = this.undo.bind(this);
        this.redo = this.redo.bind(this);
        this.clear = this.clear.bind(this);
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


        this.setState({
            grid: newGrid,
            history: this.state.history.push(this.state.grid)
        });
    }

    undo() {
        if (this.state.history.size < 1) return;
        this.setState({
            grid: this.state.history.last(),
            history: this.state.history.pop(),
            future: this.state.future.push(this.state.grid)
        });
    }

    redo() {
        if (this.state.future.size < 1) return;
        this.setState({
            grid: this.state.future.last(),
            history: this.state.history.push(this.state.grid),
            future: this.state.future.pop()
        });
    }

    clear() {
        this.setState({
            grid: this.createGrid(this.props.rows, this.props.columns),
            history: Immutable.List(),
            future: Immutable.List(),
        });
    }

    render() {
        return (
            <div className="app">
                <Grid grid={this.state.grid} onCellClick={this.onCellClick}/>

                <History undo={this.undo}
                         undoDisabled={this.state.history.size === 0}
                         redo={this.redo}
                         redoDisabled={this.state.future.size === 0}
                         clear={this.clear}
                         clearDisabled={this.state.history.size === 0 && this.state.future.size === 0}
                />
            </div>
        );
    }
}

export default GridContainer;