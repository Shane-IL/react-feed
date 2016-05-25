module.exports = FeedApp = React.createClass({

    getInitialState: function () {
        return {
            numberOfItems: 5
        }
    },

    render: function () {

        var i = 3;

        return (
            <div className="my-root">
                <h1>
                    Posts
                    <button onClick={this._onAddPostButtonClick}>Push Post</button>
                </h1>
                <div>
                    {this._renderPosts() }
                </div>
            </div>
        )
    },

    _onAddPostButtonClick: function () {
        //TODO: With dummy server get the post, eventually this func will listen for push from server instead of button click
    },

    _renderPosts: function () {
        //TODO: Adapt to map data from "server" to post item
        //return _.map(PostsManager.getInstance().getPosts(), function (post, id) {
        //    return <PostItem id={id} post={post}></PostItem>
        //})
    }


});
