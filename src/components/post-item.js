import $ from 'jquery'
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
        return <div class="post-item" ref={(root) => {this._root = root;}}>
            <div class="avatar-placeholder"></div>
            <span class="profile-details-text">{this.props.post.firstName}{this.props.post.lastName}</span>
        </div>
    }

};
