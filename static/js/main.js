var React = require("react")
var ReactDOM = require("react-dom")
var AppContainer = require("./components/MyComponent.js")

/*
Main entry point into the app
*/
ReactDOM.render(
    <AppContainer />,
    document.getElementById('container')
);