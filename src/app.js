var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var Velocity = require('velocity-animate');
var $ = require('jquery');


var App = React.createClass({

    getInitialState: function () {
        return {
            numberOfItems: 5
        }
    },

    render: function () {

        var i = 3;

        return (
            <div className="my-root">
                <div>

                </div>
                <div>
                    <div>Hello World</div>
                </div>
                <h1>
                    Pages
                    <button onClick={this._onAddPostButtonClick}>Push Post</button>
                </h1>
                <div>
                    //TODO: add method to render posts
                    {this._renderPosts() }
                </div>
            </div>
        )
    },

    _onAddPostButtonClick: function () {

        //TODO: With dummy server get the post, eventually this func will listen for push from server instead of button click

        //var pageId = Math.floor(Math.random() * 5) + 1;

       // var pageManager = PageManager.getInstance();

        //var pageName;
        //if (pageManager.pageExists(pageId))
        //{
        //    pageName = pageManager.getPage(pageId) + "!";
        //}
        //else
        //{
        //    pageName = `Page ${pageId}`;
        //}

        //pageManager.addPage(pageId, pageName);
    },

    _renderPosts: function () {
        //return _.map(PageManager.getInstance().getPages(), function (item, key) {
        //    return <PageItem key={key} pageName={item}></PageItem>
        //})
    }


});

var PostItem = React.createClass({

        componentDidMount: function () {
            Velocity(this._root, "fadeIn", { duration: 500 });
        },

        shouldComponentUpdate: function (nextProps) {
            //TODO: maybe add test case so item with same id as existing item cant be added
            return true;
        },

        componentDidUpdate: function () {
            //TODO: customize to some kind of border animation if adding editing logic
            $(this._root).css({
                backgroundColor: 'red'
            });

            Velocity(this._root, {backgroundColorAlpha: 0}, { duration: 500 });
        },

        render: function () {
            return <div ref={(root) => {
                    this._root = root;
                    }}>{}</div>
         }

});


ReactDOM.render(<App></App>, document.getElementById('app'));