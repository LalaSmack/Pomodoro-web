const task = document.getElementById('task');
const tasklist = document.getElementById('task-list');
const workTime = document.getElementById('work-time');
const shortBreak = document.getElementById('short');
const longBreak = document.getElementById('long');


function addTask() {
    if (task.value === '') {
        alert('Please enter a task');
    } else {
        const tasks = document.getElementById('tasks');
        const newTask = document.createElement('li');
        newTask.innerHTML = task.value;
        tasklist.appendChild(newTask);
        task.value = '';
    }
}

