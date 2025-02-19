
let counter = 0;
function loop(){
    if (counter<0){
        return
    }
    console.clear()
    console.log(counter)
    counter++
    setTimeout(loop, 1000)
}


loop()



