var express = require('express');
var router = express.Router();
var fs = require("fs");

router.post('/', function(req, res, next) {
  var subtitleData = req.body.subtitles;
  console.log(subtitleData);
  var data = subtitleData.dialogueNumber.trim()+"\n"+subtitleData.inTime.trim()+" --> "+subtitleData.outTime.trim()+"\n"+subtitleData.dialogue.trim()+"\n";
  fs.appendFile("subtitles.txt", data+"\n",(err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
  res.send('respond with a resource');
});

module.exports = router;