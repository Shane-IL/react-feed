import $ from 'jquery';
import _ from 'lodash';
import {observer} from "mobx-react";
import Infinite from "react-infinite";
import io from 'socket.io-client/socket.io';
import Mobx from 'mobx';
import PostItem from '../components/post-item';
import PostsManager from '../managers/posts-manager';
import React from 'react';
window.PostsManager = PostsManager;

var socket;

@observer export default class FeedApp extends React.Component{

    componentDidMount() {
        socket = io.connect('http://localhost:8080');

        socket.on('connect', function(){
            console.log('feed connected');
            socket.emit('pullCollection');

            socket.on('newPost', function (newPost) {
                console.log(newPost);
                var postsManager = PostsManager.getInstance();
                postsManager.addPost(newPost.id, newPost);
            });

            socket.on('initCollection', function (collection) {
                var postsManager = PostsManager.getInstance();
                $.each(collection, function (i, post) {
                    postsManager.addPost(post.id, post);
                })
            });
        });
    }

    getInitialState() {
        var postsManager = PostsManager.getInstance();
        var postsData = postsManager.getPosts();
        return {
            postsData: postsData
        }
    }

    render() {
        return (
            <div className="feed-container">
                <button onClick={this._onAddPostButtonClick}>Push Post</button>
                <br/>
                <Infinite containerHeight={200} elementHeight={16}>
                    {this._renderPosts() }
                </Infinite>
            </div>
        )
    }

    _onAddPostButtonClick() {
        socket.emit('generatePost');
    }

    _renderPosts() {
        //TODO: Find better way to reverse order so new posts render at top, this feels hacky.
        return _.reverse(_.map(PostsManager.getInstance().getPosts(), function (post, id) {
            return <PostItem key= {id} post={post}/>
        }))
    }


};