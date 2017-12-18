import React from "react";

class Cell extends React.Component {
    get classNames() {
        return [
            this.props.title ? 'cell-title' : 'cell',
            this.props.active ? 'active' : ''
        ].join(' ');
    }

    render() {
        return (
            <div className={this.classNames}>
                {this.props.title || ''}&nbsp;
            </div>
        );
    }
}

export default Cell;