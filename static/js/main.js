var React = require("react")
var ReactDOM = require("react-dom")
var MyAction = require("./actions/MyAction.js")
var PersonProfileStore = require("./stores/PersonProfileStore.js")

/*
Renders the photo for this person
*/
var PhotoView = React.createClass({
    getInitialState: function() {
        return {personProfile: PersonProfileStore.getPersonProfile()}
    },

    componentDidMount: function() {
        PersonProfileStore.addChangeListener(this.onStoreChange)
    },

    componentWillUnmount: function() {
        PersonProfileStore.removeChangeListener(this.onStoreChange);
    },

    render: function() {
        return (<img className="flix_display_image" src={"img/" + this.state.personProfile.photoLink} />)
    },

    onStoreChange: function() {
        this.setState({personProfile: PersonProfileStore.getPersonProfile()})
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
        MyAction.swipe()
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