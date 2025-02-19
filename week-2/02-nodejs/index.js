let todos = [{ID:404,
    title: "study",
    description: "i do study whole day"
  },
  {
    ID:410,
    title: "slep",
    description: "sleep at 10 pm"
  }]
let cur_id = 41

let present = todos.findIndex((i)=>{
    return cur_id == i.ID;
}) 

console.log(present)