let fs = require("fs")

fs.readFile("a.txt","utf-8",function (err,data) { 
    let fdata = data.replace(/ +/g," ")
    fs.writeFile('a.txt',fdata, function(err){
        console.log("file is clean now")
    })
})

