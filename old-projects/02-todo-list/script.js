const task_input = document.getElementById("task-input")
const task_list = document.getElementById("task-list")

task_input.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        const text = task_input.value;
        
        const taskToAppend = document.createElement("p");
        taskToAppend.textContent = text

        task_list.appendChild(taskToAppend)

        input.value = "" 
    }
});