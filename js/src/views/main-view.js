import io from '../../../node_modules/socket.io-client/socket.io'
import PostsManager from '../managers/posts-manager';
import React from 'react';
window.PostsManager = PostsManager;

export default class Main extends React.Component{

    static getInitialState() {
        var postsManager = PostsManager.getInstance();
        var postsData = postsManager.getPosts();
        return {
            postsData: postsData
        }
    }

    render() {
        return (
            <div className="main-root">
                <h1>
                    People Feeder
                </h1>
                <br/>
                {this.props.children}
            </div>
        )
    }

};
