import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GridContainer from "./components/GridContainer";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            rows: ['apple', 'banana', 'peach'],
            columns: 3
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Grid with history</h1>
                </header>
                <div className="App-intro">
                    <GridContainer rows={this.state.rows} columns={this.state.columns}/>
                </div>
            </div>
        );
    }
}

export default App;
