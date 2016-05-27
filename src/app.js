var React = require('react');
var ReactDOM = require('react-dom');
var Velocity = require('velocity-animate');
var FeedApp = require('./components/feed-app.js').FeedApp;
var PostItem = require('./components/post-item.js').PostItem;

ReactDOM.render(<FeedApp></FeedApp>, document.getElementById('app'));

