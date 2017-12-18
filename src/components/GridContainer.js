import React from "react";
import Grid from "./Grid";
import History from "./History";

class GridContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: this.createGrid(this.props.rows, this.props.columns)
        };
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


    render() {
        return (
            <div className="app">
                <Grid grid={this.state.grid}/>

                <History/>
            </div>
        );
    }
}

export default GridContainer;