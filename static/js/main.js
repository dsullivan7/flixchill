var PhotoView = React.createClass({
    render: function() {
        return (<img src={"img/img1.jpg"} />)
    }
})

var AppContainer = React.createClass({
    render: function() {
        return (<PhotoView />)
    }
});

ReactDOM.render(
    <AppContainer />,
    document.getElementById('container')
);