import React from "react";

class Cell extends React.Component {

    constructor(props) {
        super(props);

        this.onCellClick = this.onCellClick.bind(this);
    }

    onCellClick(event) {
        event.preventDefault();

        this.props.onCellClick && this.props.onCellClick(this.props.rowId, this.props.columnId);
    }

    get classNames() {
        return [
            this.props.title ? 'cell-title' : 'cell',
            this.props.active ? 'active' : ''
        ].join(' ');
    }

    render() {
        return (
            <div className={this.classNames} onClick={this.onCellClick}>
                {this.props.title || ''}&nbsp;
            </div>
        );
    }
}

export default Cell;