class Task {
    constructor(name, check, time){
        this.name = name;
        this.check = check;
        this.time = time;
    }
}

class TaskList {
    tasks = [];

    // TODO: modify addTask to update task with existing name

    taskExists(taskName) {
        return this.tasks.some(task => task.name === taskName);
    }
    addTask(task) {
        if (!this.taskExists(task.name)) {
            this.tasks.push(task);
            console.log("Task added successfully.");
        } else {
            console.log("Task with the same name already exists.");
        }
            // this.tasks.push(task);
    }
    removeTask(index){
        this.tasks.splice(index, 1);
    }

    
    getTask(index) {
        return this.tasks[index];
    }
    
    // TODO: Implement toggleTask method 
    // (it will toggle the check property of the given task)
    // let it return the toggeled task
}

const tasks = new TaskList();

const task1 = new Task("Task 1", false, new Date());
const task2 = new Task("Task 2", true, new Date());
const task3 = new Task("Task 3", true, new Date());
const task4 = new Task("Task 3", true, new Date());

tasks.addTask(task1)
tasks.addTask(task3)
tasks.addTask(task2)
tasks.addTask(task4)

console.log(tasks);


console.log(tasks.getTask(1));