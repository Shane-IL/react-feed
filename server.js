var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



var _collection = [
    {id: "Post1", firstName: "Bob", lastName: "Smith"},
    {id: "Post2", firstName: "Johnny", lastName: "MacFly"},
    {id: "Post3", firstName: "Bill", lastName: "MacFly"},
    {id: "Post4", firstName: "Jim", lastName: "Jones"},
    {id: "Post5", firstName: "Tim", lastName: "MacFly"}

];
var _namePool = {
    names:[
        "Bob","Jim","Ned","Bill","Tim","Joe","Johnny","Simon"
    ],
    surnames: [
        "Smith", "Johnson", "Murray", "MacFly", "Goldberg", "Jones", "Potter"
    ]
};

var _totalCount = _collection.length;



io.on('connection', function(socket){
    console.log('client app connected');
    socket.on('generatePost', function () {
        _totalCount++;
        var newPost = {
            id: "Post"+_totalCount,
            firstName: _namePool.names[Math.floor(Math.random() * _namePool.names.length)],
            lastName: _namePool.surnames[Math.floor(Math.random() * _namePool.surnames.length)]
        };
        _collection.push(newPost);
        socket.emit('newPost', newPost);
        console.log('post added:');
    });

    socket.on('pullCollection', function () {
        socket.emit('initCollection', _collection);
    });
});


http.listen(8080, function(){
    console.log('listening on *:8080');
});

