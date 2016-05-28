import $ from 'jquery';
import { Link } from 'react-router';
import React from 'react';
import Velocity from 'velocity-animate';

export default class PostItem extends React.Component{

    componentDidMount() {
        Velocity(this._root, "fadeIn", { duration: 1000 });
    }

    shouldComponentUpdate(nextProps) {
        //TODO: maybe add test case so item with same id as existing item cant be added
        return true;
    }

    render() {
        var currentPost = this.props.post;
        var linkStr = "profile/"+currentPost.id;
        return <div className="post-item" ref={(root) => {this._root = root;}}>
                    <Link to={linkStr}>
                        <div className="avatar-placeholder">
                            <img src={currentPost.avatar} />
                        </div>
                        <span className="profile-details-text">{currentPost.firstName} {currentPost.lastName}</span>
                    </Link>
                </div>
    }

};
