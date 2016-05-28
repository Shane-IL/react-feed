import io from 'socket.io-client/socket.io'
import React from 'react';

var socket;

export default class Main extends React.Component{
    render() {
        return (
            <div className="main-root">
                <h1>
                    Posts
                </h1>
                <br/>
                {this.props.children}
            </div>
        )
    }

};
