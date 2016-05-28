import $ from 'jquery'

module.exports.DummyServer = new function () {
    var _totalCount = 0;
    var _collection = [];
    var _namePool = {names:[
        "Bob","Jim","Ned","Bill","Tim","Joe","Johnny","Simon"   
    ],
    surnames: [
        "Smith", "Johnson", "Murray", "MacFly", "Goldberg", "Jones", "Potter"
    ]};
    
    
    this.generatePostData = function (num) {
        var newItems = [];
        for(var i =0; i < num; i++){
            _totalCount++;
            newItems.push({
                id: "Post"+_totalCount,
                firstName: _namePool.names[Math.floor(Math.random() * _namePool.names.length)],
                lastName: _namePool.surnames[Math.floor(Math.random() * _namePool.surnames.length)]
            });
        }
        $.each(newItems, function (i, item) {
            _collection.push(item)
        });
        return newItems;

    }
}();
