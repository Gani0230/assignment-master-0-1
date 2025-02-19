let fs = require("fs");

setTimeout(function(){
    console.log("hi there..")
},20000)

setTimeout(function(){
    console.log("hi there..in 2 seconds")
},2000)

fs.readFile("a.txt","utf-8",function(err, data){
    console.log(data)
})

let sum = 0;
for (let i = 0; i<10000000000; i++){
    sum += i
}
console.log(sum)