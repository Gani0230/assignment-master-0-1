/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo_list = []
  }

  add(todo){
    this.todo_list.push(todo)
  }

  remove(indexOfTodo){
    if(this.todo_list.length-1 < indexOfTodo || indexOfTodo<0){
      return null
    }
      this.todo_list.splice(indexOfTodo,1)
    }
  

  update(indexOfTodo, updatedTodo){
    if(this.todo_list.length-1 < indexOfTodo || indexOfTodo<0){
      return null
    }
    this.todo_list[indexOfTodo] = updatedTodo
    return this.todo_list

  }
  getAll(){
    return this.todo_list
  }
  get(indexOfTodo){
    if (indexOfTodo > this.todo_list.length-1 || indexOfTodo < 0 ){
      return null
    }
    else{
      return this.todo_list[indexOfTodo]
    }
  }
  clear(){
    this.todo_list = []
  }
}

module.exports = Todo;
