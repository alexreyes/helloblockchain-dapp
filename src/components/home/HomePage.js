import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className="jumbotron">
        <h1>Hello Blockchain</h1>
        <p>React, React Router and Drizzle for ultra responsive hello world app.</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;