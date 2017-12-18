import React from "react";

class History extends React.Component {
    render() {
        return (
            <div className="history">
                <button className="btn btn-default"
                        onClick={() => this.props.undo()}
                        disabled={this.props.undoDisabled}>Undo
                </button>
                <button className="btn btn-default"
                        onClick={() => this.props.redo()}
                        disabled={this.props.redoDisabled}>Redo
                </button>
                <button className="btn btn-default"
                        onClick={() => this.props.clear()}
                        disabled={this.props.clearDisabled}>Clear
                </button>
            </div>
        );
    }
}

export default History;