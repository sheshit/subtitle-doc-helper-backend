var fs = require("fs");

fs.readFile("subtitles.txt", 'utf8',(err, data) => {
   var str = data.toString();
   var newStr = str.replace(/\./g,":");
   console.log(newStr);
});