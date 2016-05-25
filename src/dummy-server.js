var DummyServer = new function () {
    var _totalCount = 0;
    var _namePool = {names:[
        "Bob","Jim","Ned","Bill","Tim","Joe","Johnny","Simon"   
    ],
    surnames: [
        "Smith", "Johnson", "Murray", "MacFly", "Goldberg", "Jones", "Potter"
    ]};
    
    
    this.generatePostData = function (num) {
        var data = {};
        for(var i =0; i < num; i++){
            _totalCount++;
            data[_totalCount] =  {
                id: _totalCount,
                firstName: _namePool.names[Math.floor((Math.random() * _namePool.names.length+1))],
                lastName: _namePool.surnames[Math.floor((Math.random() * _namePool.surnames.length+1))]
            }
        }

    }
}();
