import $ from 'jquery';
import _ from 'lodash';
import {observer} from "mobx-react";
import Infinite from "react-infinite";
import io from '../../../node_modules/socket.io-client/socket.io'
import Mobx from 'mobx';
import PostItem from '../components/post-item';
import React from 'react';

var socket;

@observer export default class FeedApp extends React.Component{

    componentDidMount() {
        socket = io.connect('http://localhost:8080');

        socket.on('connect', function(){
            console.log('feed connected');
            socket.emit('pullCollection');

            socket.on('newPost', function (newPost) {
                if(newPost.error){
                    console.log(newPost.error);
                }
                else{
                    var postsManager = PostsManager.getInstance();
                    postsManager.addPost(newPost.id, newPost);
                }
            });

            socket.on('initCollection', function (collection) {
                var postsManager = PostsManager.getInstance();
                $.each(collection, function (i, post) {
                    postsManager.addPost(post.id, post);
                })
            });
        });
    }



    render() {
        return (
            <div className="app-container">
                <button className="generate-button" onClick={this._onAddPostButtonClick}>I can't wait for the damn interval! Push Post NOW!</button>
                <br/>
                <div className="feed-container">
                    <Infinite containerHeight={335} elementHeight={67}>
                        {this._renderPosts() }
                    </Infinite>
                </div>
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