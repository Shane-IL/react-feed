import React from 'react';
import PostsManager from '../managers/posts-manager';
import _ from 'lodash';
import PostItem from '../components/post-item';
import Mobx from 'mobx';
import {observer} from "mobx-react";
window.PostsManager = PostsManager;

var DummyServer = require('../dummy-server.js').DummyServer;

@observer export default class FeedApp extends React.Component{

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
        //TODO: Find better way to reverse order so new posts render at top, this feels hackey.
        return _.reverse(_.map(PostsManager.getInstance().getPosts(), function (post, id) {
            return <PostItem key= {id} post={post}/>
        }))
    }


};