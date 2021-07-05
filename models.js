class Journal{
    constructor(id, title, content, emojis, comments){
        this.id = id;
        this.title = title;
        this.content = content;
        this.emojis = [0, 0, 0]; //array with each element representing number of that emoji reactions the journal has
        this.comments = []; 
    }
}

module.exports = { Journal };