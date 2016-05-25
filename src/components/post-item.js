module.exports = PostItem = React.createClass({

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
