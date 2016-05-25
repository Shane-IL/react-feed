var PostItem = React.createClass({

        componentDidMount: function () {
            Velocity(this._root, "fadeIn", { duration: 500 });
        },

        shouldComponentUpdate: function (nextProps) {
            return nextProps.pageName !== this.props.pageName;
        },

        componentDidUpdate: function () {
            $(this._root).css({
                backgroundColor: 'red'
            });

            Velocity(this._root, {backgroundColorAlpha: 0}, { duration: 500 });
        },

        render: function () {
            return <div ref={(root) => {
                this._root = root;
            }}>{this.props.pageName}</div>
    }

});