var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

    title: {
        type: String,
        unique: true,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },

    summary: {
        type: String,
        required: true
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;