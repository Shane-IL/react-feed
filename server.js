var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



var _collection = [
    {id: "Post1", firstName: "Bob", lastName: "Smith", age: 21, avatar: "http://media-elerium.cursecdn.com/avatars/thumbnails/37/990/55/55/635959738381142622.jpeg"},
    {id: "Post2", firstName: "Johnny", lastName: "MacFly", age: 42, avatar: "http://media-hearth.cursecdn.com/avatars/thumbnails/256/504/55/55/635762192493373586.png"},
    {id: "Post3", firstName: "Bill", lastName: "MacFly", age: 16, avatar: "http://media-curse.cursecdn.com/avatars/thumbnails/149/64/55/55/635839250935672518.jpg"},
    {id: "Post4", firstName: "Jim", lastName: "Jones", age: 19, avatar: "http://media-diablofans.cursecdn.com/avatars/thumbnails/200/76/55/55/635884250354639819.jpeg"},
    {id: "Post5", firstName: "Tim", lastName: "MacFly", age: 30, avatar: "http://media-elerium.cursecdn.com/avatars/thumbnails/10/494/55/55/635457676097658445.jpeg"}

];

var _avatarPool = [
    "http://media-elerium.cursecdn.com/avatars/thumbnails/37/990/55/55/635959738381142622.jpeg",
    "http://media-hearth.cursecdn.com/avatars/thumbnails/256/504/55/55/635762192493373586.png",
    "http://media-curse.cursecdn.com/avatars/thumbnails/149/64/55/55/635839250935672518.jpg",
    "http://media-diablofans.cursecdn.com/avatars/thumbnails/200/76/55/55/635884250354639819.jpeg",
    "http://media-curse.cursecdn.com/avatars/thumbnails/70/474/55/55/635122246198927542.png",
    "http://media-hearth.cursecdn.com/avatars/thumbnails/156/847/55/55/635550214790288633.png",
    "http://media-elerium.cursecdn.com/avatars/thumbnails/10/494/55/55/635457676097658445.jpeg"
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

    var postGenerator = setInterval(function () {
        generatePost(socket, postGenerator);
    }, 60000);

    socket.on('generatePost', function () {
       generatePost(socket, _totalCount, postGenerator);
    });

    socket.on('pullCollection', function () {
        socket.emit('initCollection', _collection);
    });
});


http.listen(8080, function(){
    console.log('listening on *:8080');
});

function generatePost(socket, postGenerator){
    if(_totalCount < 5000){
        _totalCount++;
        var newPost = {
            id: "Post"+_totalCount,
            avatar: _avatarPool[Math.floor(Math.random() * _avatarPool.length)],
            firstName: _namePool.names[Math.floor(Math.random() * _namePool.names.length)],
            lastName: _namePool.surnames[Math.floor(Math.random() * _namePool.surnames.length)],
            age: Math.floor((Math.random() * 99)+1)
        };
        _collection.push(newPost);
        socket.emit('newPost', newPost);
        console.log('post added');
    }
    else{
        clearInterval(postGenerator);
        console.log("Server full, generator stopped.");
        socket.emit('newPost', {error: "server capacity reached"});
    }
}

