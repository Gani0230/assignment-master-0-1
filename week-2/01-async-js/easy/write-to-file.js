let fs = require("fs")

fs.readFile("b.txt","utf-8",function(err,data){
    console.log(data)
})

fs.writeFile("b.txt", "my name is sakshi waigokar",function(err){

})
