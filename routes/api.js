const router = require("express").Router()
const Article = require("../models/Article")


router.post("/save", function(req, res){
    var article = req.body
    Article.create(article).then(function(dbArticle) {
        console.log(dbArticle);
    }).catch(function(err) {
        return res.json(err);
    });
})

router.get("/saved", function(req, res){

    Article.find({}).then(function(dbArticle){
        res.json(dbArticle)
    })
})





module.exports = router;