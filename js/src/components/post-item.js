import $ from 'jquery';
import { Link } from 'react-router';
import React from 'react';
import Velocity from 'velocity-animate';

export default class PostItem extends React.Component{

    componentDidMount() {
        Velocity(this._root, "fadeIn", { duration: 1000 });
    }

    render() {
        var currentPost = this.props.post;
        var linkStr = "profile/"+currentPost.id;
        return <div className="post-item" ref={(root) => {this._root = root;}}>
                    <Link to={linkStr}>
                        <div className="profile-details">
                            <span className="avatar-container">
                                <img src={currentPost.avatar} />
                            </span>
                            <span className="details-text">
                                <span className="firstName">Name: {currentPost.firstName} {currentPost.lastName}</span>
                                <br/>
                                <span className="firstName">Age: {currentPost.age}</span>
                            </span>
                        </div>
                    </Link>
                </div>
    }

};
