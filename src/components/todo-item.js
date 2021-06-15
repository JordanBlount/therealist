var todoItem = (function () {

    let name;
    let description;
    let priority;
    let dueDate;
    let notes;

    let completed;
    let dateCreated;

    let tags = [];

    function setName(newName) {
        name = newName;

        PubSub.publish('todoItem.changeName', newName);
    }

    function setDescription(newDescription) {
        description = newDescription;

        PubSub.publish('todoItem.updateDescription', newDescription);
    }

    function setPriority(value) {
        priority = value;
        PubSub.publish('todoItem.priority', value);
    }

    function setDueDate(date) {
        dueDate = date;

        PubSub.publish('todoItem.changeDueDate', date);
    }

    function setNotes(currentText) {
        notes = currentText;

        PubSub.publish('todoItem.updateNotes', currentText);
    }

    function addTag(...values) {
        values.forEach(newTag => tags.push(newTag));

        PubSub.publish('todoItem.newTags', values);
    }

    function setCompleted(value) {
        completed = value;

        PubSub.publish('todoItem.completed', value);
    }

    function isCompleted() { return completed === true; }

    function dateCreated()  { return dateCreated; }
});