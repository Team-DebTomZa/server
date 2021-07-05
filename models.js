class Journal{
    constructor(id, title, content){
        let date = new Date();
        this.id = id;
        this.title = title;
        this.content = content;
        this.emojis = [0, 0, 0]; //array with each element representing number of that emoji reactions the journal has
        this.comments = [];
        this.date = date.toLocaleDateString();
    }
}


module.exports = { Journal };