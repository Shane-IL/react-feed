import { Link } from 'react-router';
import React from 'react';


export default class ProfileView extends React.Component{
    render() {
        var postsManager = PostsManager.getInstance();
        var postData = postsManager.getPost(this.props.params.profileId);
        return (
            <div className="profile">
                <div className="avatar-container-profile">
                    <img src={postData.avatar} />
                </div>
                <div className="details-text-profile">
                    <span className="firstName">Name: {postData.firstName} {postData.lastName}</span>
                    <br/>
                    <span className="firstName">Age: {postData.age}</span>
                </div>
                <br/>
                <Link to="/">Back to feed</Link>
            </div>
        )
    }
};
