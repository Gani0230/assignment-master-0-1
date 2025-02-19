let date = new Date()

let s = date.getTime()
let sum = 0
for(let i = 0; i<=1000; i++){
  sum += i;
}

let end_time = date.getTime()

console.log(s,end_time)