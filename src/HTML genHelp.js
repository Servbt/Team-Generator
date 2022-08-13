const fs = require('fs');

fs.writeFile("./dist/index.html", generatedContent,(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("team Generated");
    }
});