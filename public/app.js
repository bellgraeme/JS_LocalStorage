var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;

  populate(list, state);
}

var populate = function(list, state){
  state.forEach(function(item){
    addItem(list, item);
  }) //for each item in the state, invoke addItem
}

var addItem = function(list, input){
  var toDoLi = document.createElement("li");
  toDoLi.innerText = input;
  list.appendChild(toDoLi);
  //add an item to the list
}

var handleClick = function(){
  var input = document.querySelector('#new-item') ;//get the value of the input box
  var listItem = document.querySelector('#todo-list');//get the "todo-list" element from the DOM
  console.log(listItem)
  addItem(listItem, input.value); //invoke addItem
    save(input.value);   //invoke save
}

var save = function(item){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];//save the item to localStorage 
  state.push(item) //NOTE You'll have to use JSON.stringify
  localStorage.setItem('todoList', JSON.stringify(state));
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
