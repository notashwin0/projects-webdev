const task_input = document.getElementById("task-input") 
const task_list = document.getElementById("task-list") // List of Tasks

task_input.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        const text = task_input.value; // grabs the task input
        if (text !== "") { 
            const taskToAppend = document.createElement("div");
            taskToAppend.classList.add("task-item") // Gives the DIV a class of task-item

            const taskText = document.createElement("span") // inline container
            taskText.textContent = text
            
            // EDIT BUTTON
            const editButton = document.createElement("button");
            editButton.textContent = "Edit"
            editButton.classList.add ("edit-Button")

            // DELETE BUTTON
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete"
            deleteButton.classList.add ("delete-Button")

            // appends the text and two buttons to the task DIV
            taskToAppend.appendChild(taskText)
            taskToAppend.appendChild(editButton)
            taskToAppend.appendChild(deleteButton)

            // appends the task div to the list of tasks
            task_list.appendChild(taskToAppend)

            task_input.value = ""

        }
    }
});