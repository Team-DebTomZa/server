class Journal{
    constructor(id, title, content, gifUrl){
        let date = new Date();
        
        this.id = id;
        this.title = title;
        this.content = content;
        this.gifUrl = gifUrl;
        this.emojis = [0, 0, 0]; //array with each element representing number of that emoji reactions the journal has
        this.comments = [];
        this.date = date.toDateString();
    }
}


module.exports = { Journal };