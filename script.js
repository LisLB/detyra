function addTask() {
var taskInput = document.getElementById("taskInput");
var tasktext = taskInput.value ;

if (tasktext === '') {
    alert("Please write a task");
    return;
    
}

// .value e merr vleren
// .innerHTML = e shton ose modifikon vleren

// .createElement

// pe e krijojme nje element li
// pe marrum veleren qe e ka shenu po ja bashkangjitur nje buton "X"
var li = document.createElement("li");
li.innerHTML = tasktext + '<button onclick="removeTask(this)">X</button>';

// apendchild e shton elementin e krijuar ne fund te nje elementi tjeter
document.getElementById("taskList").appendChild(li);
taskInput.value = '';

}

function removeTask() {
    var li = this.parentElement;
    li.remove();
}