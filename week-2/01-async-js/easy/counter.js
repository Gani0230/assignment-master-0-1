let hrs = 2
let min = 0
let sec = 10

function counter(){
    console.clear()
    if (sec == 0 && min == 0 && hrs == 0){
        console.log("alarm")
        clearInterval(i)
    }
    if(sec < 0 && min>=0){
        min--
        sec = 59
    }
    if(min < 0 && hrs>=0){
        hrs--
        min = 59
        sec = 59
    }
    console.log(hrs,":",min,":",sec)
    sec--
}

let i = setInterval(counter, 1000)