import { Link } from 'react-router';
import PostsManager from '../managers/posts-manager';
import React from 'react';
window.PostsManager = PostsManager;


export default class ProfileView extends React.Component{
    render() {
        var postsManager = PostsManager.getInstance();
        var postsData = postsManager.getPost(this.props.params.profileId);
        return (
            <div className="profile">
                <span>{postsData.firstName}</span>
                <br/>
                <Link to="/">Back to feed</Link>
            </div>
        )
    }
};
