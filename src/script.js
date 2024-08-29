const task = document.getElementById('task');
const tasklist = document.getElementById('task-list');
var time = document.getElementById('time-left');
var startPause = document.getElementById('start');
var stop = false;
var pause = false;

console.log(stop);
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

function setTimer(newTime) {
    time.innerHTML = newTime;
    time.innerHTML = newTime + ':00';
    clearInterval(time);
}

function Timer() {
    var timeArray = time.innerHTML.split(':');
    var minutes = parseInt(timeArray[0]);
    var seconds = parseInt(timeArray[1]);
    var audio = new Audio('sounds/microwave-timer-117077.mp3');
    var prevTime = time.innerHTML;

    startPause.innerHTML = 'Pause';
    var countdown = setInterval(function() {
        if (stop) {
            clearInterval(countdown);
            stop = false;
            time.innerHTML = prevTime;
            startPause.innerHTML = 'Start';
            return;
        }
        if (minutes === 0 && seconds === 0) {
            clearInterval(countdown);
            audio.play();
            startPause.innerHTML = 'Start';
            time.innerHTML = prevTime;
        } else if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        time.innerHTML = minutes + ':' + seconds;
    }, 1000);
}

function resetTimer() {
    stop = true;
}