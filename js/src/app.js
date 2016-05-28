import FeedApp from './components/feed-app';
import Main from './views/main-view';
import ProfileView from './views/profile-view';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component = {FeedApp}></IndexRoute>
            <Route path="profile/:profileId" component={ProfileView}></Route>
        </Route>
    </Router>,
app);

