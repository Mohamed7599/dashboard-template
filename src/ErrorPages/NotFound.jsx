import { Link } from "react-router-dom";
import React from 'react';
const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no, this route does not exist!</h1>
            <Link to="/">
                You can go back to the home page by clicking here, though!
            </Link>
        </div>
    );
};

export default ErrorPage;