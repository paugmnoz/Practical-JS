var price = 15.00; //hammer price
var money = 20; //how much money

if (money>=price) {
  console.log("Buy the hammer");
} else {
  console.log("Don't buy the hammer");
}

var todos  = ["item 1","item 2","item 3"];

function displayTodos() {
  console.log("My todos:", todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

function  changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo (position) {
  todos.splice(position,1);
  displayTodos;
}
