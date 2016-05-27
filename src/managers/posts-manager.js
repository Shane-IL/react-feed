var DummyServer = require('../dummy-server.js').DummyServer;
var data = DummyServer.generatePostData(5);
var  Mobx  =  require('mobx');

export default class PostsManager
{
    /**
     * @returns {PostsManager}
     */
    static getInstance () {
        if (PostsManager._instance === undefined)
        {
            PostsManager._instance = new PostsManager();
        }

        return PostsManager._instance;
    }

    constructor() {
        this.PostsData = Mobx.map({data});
    }

    addPost(id, data) {
        this.PostsData.set(id, data);
    }

    getPosts() {
        return this.PostsData.values();
    }

    postExists(id) {
        return this.PostsData.get(id) !== undefined;
    }

    getPost(id) {
        return this.PostsData.get(id);
    }
}

