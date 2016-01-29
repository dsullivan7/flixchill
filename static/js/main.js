var React = require("react")
var ReactDOM = require("react-dom")
var MyAction = require("./actions/MyAction.js")
var MyStore = require("./stores/MyStore.js")

/*
Renders the photo for this person
*/
var PhotoView = React.createClass({
    getInitialState: function() {
        return {photoLink: MyStore.getPhotoLink()}
    },

    componentDidMount: function() {
        MyStore.addChangeListener(this.onStoreChange)
    },

    componentWillUnmount: function() {
        MyStore.removeChangeListener(this.onStoreChange);
    },

    render: function() {
        return (<img className="flix_display_image" src={"img/" + this.state.photoLink} />)
    },

    onStoreChange: function() {
        this.setState({photoLink: MyStore.getPhotoLink()})
    }
})

/*
A left or right arrow to indicate whether to like this person
*/
var Arrow = React.createClass({
    render: function() {
        if (this.props.option === "like"){
            return (<button onClick={this.handleClick} className="flix_arrow flix_arrow_left glyphicon glyphicon-thumbs-down"></button>)
        }else{
            return (<button onClick={this.handleClick} className="flix_arrow flix_arrow_right glyphicon glyphicon-thumbs-up"></button>)
        }
    },

    handleClick: function() {
        MyAction.showMessage('Hello World!!')
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
    },
});

/*
Main entry point into the app
*/
ReactDOM.render(
    <AppContainer />,
    document.getElementById('container')
);