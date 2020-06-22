const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
// Pagina Home
router.get("/", (req, res) => {
   
                res.render("index");
           
    
});
router.post("/page1", (req, res) => {
    var index = req.body.index;
    res.render("page1",{index})
});
router.post("/page2", (req, res) => {
    var index = req.body.index;
    var page1 = req.body.page1;
    res.render("page2",{index:index, page1:page1})
});

router.post("/page3", (req, res) => {
    var index = req.body.index;
    var page1 = req.body.page1;
    var page2 = req.body.page2;
    res.render("page3", {index:index, page1:page1, page2:page2})
});
router.post("/page4", (req, res) => {
    var index = req.body.index;
    var page1 = req.body.page1;
    var page2 = req.body.page2;
    var page3 = req.body.page3;
    res.render("page4", {index:index, page1:page1, page2:page2, page3:page3})
});

module.exports = router;




/*
toLocaleString()
*/