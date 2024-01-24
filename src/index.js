document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    console.log(taskDescription);

    
    taskInput.value = '';
  });
});
