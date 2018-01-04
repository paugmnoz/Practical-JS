var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log('My todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },


  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //get number of completed todos
    for (var i = 0; i > totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      //Case 1: everything is done (true), make everything is false
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i] = false;
      }
    } else { //case 2: make everything true
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var displayTodosButton = document.getElementById('displayTodosBtn');
var toggleAllButton = document.getElementById('toggleAllBtn');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
