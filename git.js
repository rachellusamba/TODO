document.getElementById('addTask').addEventListener('click', function () {
    let newTask = document.getElementById('newTask').value;

    if (newTask !== '') {
        let taskList = document.getElementById('taskList');
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(newTask));
        taskList.appendChild(li);

        document.getElementById('newTask').value = '';

        li.addEventListener('click', function () {
            this.remove();
        })
    }

})

