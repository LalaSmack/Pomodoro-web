const task = document.getElementById('task');
const tasklist = document.getElementById('task-list');
var time = document.getElementById('time-left');
var start = document.getElementById('start');

tasklist.addEventListener('click', checkTask);
var stop = false;
var pause = false;
var change = false;
var prevTime = time.innerHTML;
var ongoing = false;
    
function addTask() {
    if (task.value === '') {
        alert('Please enter a task');
    } else {
        const newTask = document.createElement('li');
        newTask.innerHTML = task.value;
        tasklist.appendChild(newTask);
        task.value = '';
    }
}

function setTimer(newTime) {
    if (ongoing) {
        change = true;
    }
    time.innerHTML = newTime + ':00';
    prevTime = newTime + ':00';
    
}

function Timer() {
    var timeArray = time.innerHTML.split(':');
    var minutes = parseInt(timeArray[0]);
    var seconds = parseInt(timeArray[1]);
    var audio = new Audio('src/sounds/microwave-timer-117077.mp3');
    ongoing = true;
    console.log(ongoing);
    var countdown = setInterval(function() {
        if (pause) {
            clearInterval(countdown);
            pause = false;
            ongoing = false;
            time.innerHTML = minutes + ':' + seconds;
            console.log('pause',pause);
            return;
            
        }
        if (change) {
            clearInterval(countdown);
            change = false;
            ongoing = false;
            console.log('change',change);
            return;
        }
        if (stop) {
            clearInterval(countdown);
            stop = false;
            ongoing = false;
            console.log('stop',stop);
            return;
        }
        if (minutes === 0 && seconds === 0) {
            clearInterval(countdown);
            audio.play();
            time.innerHTML = prevTime;
        } else if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        if (seconds < 10) {
            time.innerHTML = minutes + ':' + '0' + seconds;
        }
        else {time.innerHTML = minutes + ':' + seconds;
        }
    }, 1000);
}

function resetTimer() {
    if (ongoing) {
        stop = true;
    }
    time.innerHTML = prevTime;

    // stop = false;
    console.log(prevTime);
}

function pauseTimer() {
    if (ongoing) {
        pause = true;
    }
}

function checkTask(e) {
    let item = e.target;
    if (item === tasklist) {
        return;
    }
    if (item.style.textDecoration === 'line-through') {
        item.style.backgroundColor = '#f0a5a5';
        item.style.textDecoration = 'none';
    } else {
        item.style.textDecoration = 'line-through';
        item.style.backgroundColor = '#ceeeae';
    }
}

function deleteTasks() {
    for (let i = tasklist.children.length - 1; i >= 0; i--) {
        tasklist.children[i].remove();
    }
}