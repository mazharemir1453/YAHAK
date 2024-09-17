document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const mazhar = document.getElementById('mazhar');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Lütfen bir görev girin.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        mazhar.appendChild(listItem);

        taskInput.value = ''; 
        taskInput.focus();    
    });
});
