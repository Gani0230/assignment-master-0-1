let d = new Date()

let hrs = d.getHours()
let min = d.getMinutes()
let sec = d.getSeconds() + 2

function counter(){
    console.clear()
    if(sec > 59){
        min++
        sec = 0
    }
    if(min > 59){
        hrs++
        min = 0
        sec = 0
    }
    console.log(hrs,":",min,":",sec)
    sec++
}

let i = setInterval(counter, 1000)