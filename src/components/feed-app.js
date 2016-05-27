import PostsManager from '../managers/posts-manager.js'
window.PostsManager = PostsManager;

var React = require('react');
var _ = require('lodash');
var DummyServer = require('../dummy-server.js').DummyServer;


module.exports.FeedApp = React.createClass({

    getInitialState: function () {
        var postsManager = PostsManager.getInstance();
        var postsData = postsManager.getPosts();
        return {
            postsData: postsData
        }
    },

    render: function () {
        return (
            <div className="my-root">
                <h1>
                    Posts
                    <button onClick={this._onAddPostButtonClick}>Push Post</button>
                </h1>
                <div>
                    {this._renderPosts() }
                </div>
            </div>
        )
    },

    _onAddPostButtonClick: function () {
        var postsManager = PostsManager.getInstance();
        var newPost = DummyServer.generatePostData(1)[0];
        postsManager.addPost(newPost.id, newPost);
    },

    _renderPosts: function () {
        //TODO: Adapt to map data from model to post item
        //return _.map(PostsManager.getInstance().getPosts(), function (post, id) {
        //    return <PostItem id={id} post={post}></PostItem>
        //})
    }


});
