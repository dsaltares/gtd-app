import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = function App() {
    var color = "blue";
    var name = "ishmael";
    var number = 123;

    var arr = [color, name];

    if (arr.indexOf("blue") > 0) { // Noncompliant
        console.log('hello');
    }
    if (arr[0].indexOf("ish") > 0) { // Noncompliant
        console.log('blah');
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
