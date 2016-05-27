import React from 'react'
import PostsManager from '../managers/posts-manager'
import _ from 'lodash'
import PostItem from '../components/post-item'
window.PostsManager = PostsManager;

var DummyServer = require('../dummy-server.js').DummyServer;


export default class FeedApp extends React.Component{

    getInitialState() {
        var postsManager = PostsManager.getInstance();
        var postsData = postsManager.getPosts();
        return {
            postsData: postsData
        }
    }

    render() {
        return (
            <div className="app-root">
                <h1>
                    Posts
                    <button onClick={this._onAddPostButtonClick}>Push Post</button>
                </h1>
                <div>
                    {this._renderPosts() }
                </div>
            </div>
        )
    }

    _onAddPostButtonClick() {
        var postsManager = PostsManager.getInstance();
        var newPost = DummyServer.generatePostData(1)[0];
        postsManager.addPost(newPost.id, newPost);
    }

    _renderPosts() {
        //TODO: Adapt to map data from model to post item
        return _.map(PostsManager.getInstance().getPosts(), function (post, id) {
            return <PostItem post={post}/>
        })
    }


};