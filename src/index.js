import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import "./index.css";
import { Drizzle } from '@drizzle/store';
import HelloBlockchain from './contracts/HelloBlockchain.json';

const options = {
    contracts: [HelloBlockchain],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:8545"
        }
    }
};

const drizzle = new Drizzle(options);

render(
    <Router>
        <App drizzle={drizzle} />
    </Router>,
    document.getElementById("app")
);