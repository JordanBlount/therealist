import PubSub from 'pubsub-js';

var project = (function () {

    let name;    
    let color;
    let dateCreated;
    let todos = [];

    function setName(newName) {
        name = newName;
        PubSub.publish('project.nameUpdated', newName);
    }

    function setColor(newColor) {
        color = newColor;
        PubSub.publish('project.colorUpdated', newColor);
    }

    function setDateCreated(date) {
        dateCreated = date;
    }

    function addTodoItem(todoItem) {
        todos.push(todoItem);
        //Update project list here
        PubSub.publish('project.todoListUpdated', todos);
    }
});