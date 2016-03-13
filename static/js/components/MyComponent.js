var React = require('react');
var MyAction = require("../actions/MyAction");
var PersonProfileStore = require("../stores/PersonProfileStore");
var MatchStore = require("../stores/MatchStore");

/*
Renders the photo for this person
*/
var PhotoView = React.createClass({
    getInitialState: function() {
        return {personProfile: PersonProfileStore.getPersonProfile()};
    },

    componentDidMount: function() {
        PersonProfileStore.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function() {
        PersonProfileStore.removeChangeListener(this.onStoreChange);
    },

    onStoreChange: function() {
        this.setState({personProfile: PersonProfileStore.getPersonProfile()});
    },

    render: function() {
        return (<div className="flix_display_image_container">
                <img className="flix_display_image"
                     src={"img/profilePictures/" +
                           this.state.personProfile.photoLink} />
                </div>);
    },
})

/*
A left or right arrow to indicate whether to like this person
*/
var Arrow = React.createClass({
    render: function() {
        if (this.props.option === "like"){
            return (<button onClick={this.handleClick.bind(this,
                                                           this.props.view,
                                                           this.props.option)}
                            className="flix_arrow flix_arrow_right
                                       glyphicon glyphicon-thumbs-up">
                    </button>);
        }else{
            return (<button onClick={this.handleClick.bind(this,
                                                           this.props.view,
                                                           this.props.option)}
                            className="flix_arrow flix_arrow_left glyphicon
                                       glyphicon-thumbs-down">
                    </button>);
        }
    },

    handleClick: function(view, option) {
        MyAction.swipe(view, option);
    },
})

/*
A button to unmatch the current match
*/
var Unmatch = React.createClass({
    render: function() {
        return (<button onClick={this.unmatch} className="flix_unmatch">
                Unmatch
                </button>);
    },

    unmatch: function() {
        MyAction.unmatch();
    },
})

/*
A display of movies to choose from
*/
var MovieView = React.createClass({
    getInitialState: function() {
        return {movie: PersonProfileStore.getMovie()};
    },

    componentDidMount: function() {
        PersonProfileStore.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function() {
        PersonProfileStore.removeChangeListener(this.onStoreChange);
    },

    onStoreChange: function() {
        this.setState({movie: PersonProfileStore.getMovie()});
    },

    render: function() {
        return (<div className="flix_display_image_container">
                    <img className="flix_display_image"
                         src={"img/movies/" + this.state.movie.photoLink} />
                </div>);
    },

})

/*
Main content container for the app
*/
var AppContainer = React.createClass({
    getInitialState: function() {
        return {match: MatchStore.getMatchStatus()};
    },

    componentDidMount: function() {
        MatchStore.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function() {
        MatchStore.removeChangeListener(this.onStoreChange);
    },

    onStoreChange: function() {
        this.setState({match: MatchStore.getMatchStatus()});
    },

    render: function() {
        var app_content;

        if (this.state.match){
            app_content = (
                <div id="flix_app_content">
                    <MovieView />
                    <Arrow option="dislike" view="movie"/>
                    <Unmatch />
                    <Arrow option="like" view="movie"/>
                </div>
                );
        }else{
            app_content = (
                <div id="flix_app_content">
                    <PhotoView />
                    <Arrow option="dislike" view="person"/>
                    <Arrow option="like" view="person"/>
                </div>
                    );
        }
        return (
                <div>
                {app_content}
                </div>
            );
    },
});

module.exports = AppContainer;
