// app.mjs

import { TodoList } from './todo.mjs';

const myTodos = new TodoList();

// Add tasks
myTodos.addTask("Buy groceries");
myTodos.addTask("Walk the dog");
myTodos.addTask("Study ES6 modules");

// Mark the 2nd task (index 1) as complete
myTodos.completeTask(1);

// List all tasks
console.log("📋 Your Todo List:");
myTodos.listTasks();
