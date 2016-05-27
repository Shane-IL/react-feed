var React = require('react');
import Velocity from 'velocity-animate';

export default class PostItem extends React.Component{

    componentDidMount() {
        Velocity(this._root, "fadeIn", { duration: 500 });
    }

    shouldComponentUpdate(nextProps) {
        //TODO: maybe add test case so item with same id as existing item cant be added
        return true;
    }

    componentDidUpdate() {
        //TODO: customize to some kind of border animation if adding editing logic
        $(this._root).css({
            backgroundColor: 'red'
        });

        Velocity(this._root, {backgroundColorAlpha: 0}, { duration: 500 });
    }

    render() {
        return <div class="post-item" ref={(root) => {this._root = root;}}>
            <div class="avatar-placeholder"></div>
            <span class="profile-details-text">{this.props.firstName}{this.props.lastName}</span>
        </div>
    }

};
