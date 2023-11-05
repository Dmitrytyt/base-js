"use strict";

function isObject(val) {
    return typeof val === 'object' && val !== null && !Array.isArray(val);
}

function isString(val) {
    return typeof val === 'string' || val instanceof String;
}

const ToDoList = {
    tasks: [
        {
            id: 1,
            title: 'Do the dishes',
            priority: 1,
        }
    ],
    add: function(task) {
        if (this.validate(task)) {
            this.tasks.push({
                id: Number(task.id),
                title: task.title,
                priority: Number(task.priority),
            });
        }
    },
    removeById: function(id) {
        try {
            this.validateId(id);
            const foundId = this.findById(id);
            
            if (foundId !== -1) {
                this.tasks.splice(foundId, 1);
            }
        } catch (e) {
            console.error("Remove Error: " + e.message);
        }
    },
    update: function(id, title, priority) {
        try {
            this.validateId(id);
            const taskKey = this.findById(id);

            if (taskKey !== -1) {
                if (title) {
                    this.validateTitle(title);
                    this.tasks[taskKey].title = title;
                }
    
                if (priority) {
                    this.validatePriority(priority);
                    this.tasks[taskKey].priority = priority;
                }
            }
        } catch (e) {
            console.error("Update Error: " + e.message);
        }
    },
    sortByPriority: function(){
        this.tasks.sort((a, b) => a.priority - b.priority);
    },
    findById: function(id) {
        return this.tasks.findIndex(elem => id === elem.id);
    },
    validate: function(task) {
        try {
            if (!isObject(task)) {
                throw new SyntaxError('The passed parameter is not an object!');
            }

            if (!task?.id || !task?.title || !task?.priority) {
                throw new SyntaxError('Object does not contain mandatory properties!');
            }

            this.validateId(task.id);
            this.validateTitle(task.title);
            this.validatePriority(task.priority);

            return true;
        } catch (e) {
            console.error("Add Error: " + e.message);
            return false;
        }
    },
    validateId: function(id) {
        if (isNaN(Number(id))) {
            throw new SyntaxError('ID not a number!');
        }

        if (Number(id) <= 0) {
            throw new SyntaxError('ID must be greater than zero!');
        }
    },
    validateTitle: function(title) {
        if (!isString(title)) {
            throw new SyntaxError('Title not a string!');
        }

        if (title.length === 0) {
            throw new SyntaxError('Title cannot be empty!');
        }
    },
    validatePriority: function(priority) {
        if (isNaN(Number(priority))) {
            throw new SyntaxError('Priority not a number!');
        }
    },
};

function func() {
    this.tasks = [{
        id: 1,
        title: 'Test',
        description: 'Another description!',
        priority: 1,
    }];

    this.add = function(task) {
        if (this.validate(task)) {
            this.tasks.push({
                id: Number(task.id),
                title: task.title,
                description: task.description,
                priority: Number(task.priority),
            });
        }
    };

    this.update = function(id, title, priority, description) {
        try {
            this.validateId(id);
            const taskKey = this.findById(id);

            if (taskKey !== -1) {
                if (title) {
                    this.validateTitle(title);
                    this.tasks[taskKey].title = title;
                }

                if (description) {
                    this.tasks[taskKey].description = description;
                }
    
                if (priority) {
                    this.validatePriority(priority);
                    this.tasks[taskKey].priority = priority;
                }
            }
        } catch (e) {
            console.error("Update Error: " + e.message);
        }
    }

    return this;
}

const ToDoList2 = func.bind(ToDoList)();
ToDoList2.add({id: 2, title: 'Go to the store', description:'Maybe later ...?',  priority: '0'});
ToDoList2.add({id: 3, title: 'Go to the store 2', description:'Maybe delivery ...?', priority: '0'});
ToDoList2.removeById(2);
ToDoList2.sortByPriority();
ToDoList2.update(3, 'Update store 2', 6, 'Update new description!');
console.log(ToDoList2);
