import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/scss/bootstrap.scss";
import "./styles/index.scss";

import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App/>
);
