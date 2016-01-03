/*
Renders the photo for this person
*/
var PhotoView = React.createClass({
    render: function() {
        return (<img className="flix_display_image" src={"img/img1.jpg"} />)
    }
})

/*
A left or right arrow to indicate whether to like this person
*/
var Arrow = React.createClass({
    render: function() {
        if (this.props.option === "like"){
            return (<button className="flix_arrow flix_arrow_left glyphicon glyphicon-thumbs-down"></button>)
        }else{
            return (<button className="flix_arrow flix_arrow_right glyphicon glyphicon-thumbs-up"></button>)
        }
    }
})

/*
Main content container for the app
*/
var AppContainer = React.createClass({
    render: function() {
        return (
            <div id="flix_app_content">
                <Arrow option="like"/>
                <PhotoView />
                <Arrow option="dislike"/>
            </div>)
    }
});

ReactDOM.render(
    <AppContainer />,
    document.getElementById('container')
);