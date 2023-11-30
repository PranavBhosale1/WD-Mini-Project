function addTask() {
    const taskInput = document.getElementById('task');
    const deadlineInput = document.getElementById('deadline');
    const taskList = document.getElementById('taskList');

    const task = taskInput.value;
    const deadline = new Date(deadlineInput.value);

    if (task === '' || isNaN(deadline)) {
        alert('Please enter valid task and deadline.');
        return;
    }

    const now = new Date();
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${task}</span>
        <span>${deadline.toLocaleString()}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    if (deadline < now) {
        taskItem.classList.add('alert');
    }

    taskList.appendChild(taskItem);
    taskInput.value = '';
    deadlineInput.value = '';
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
