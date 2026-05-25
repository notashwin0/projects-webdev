const task_input = document.getElementById("task-input") 
const task_list = document.getElementById("task-list") // List of Tasks

task_input.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        const text = task_input.value; // grabs the task input
        if (text !== "") { 
            const taskToAppend = document.createElement("div");
            taskToAppend.classList.add("task-item") // Gives the DIV a class of task-item
            
            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.classList.add("task-checkbox")

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
            taskToAppend.appendChild(checkbox)
            taskToAppend.appendChild(taskText)
            taskToAppend.appendChild(editButton)
            taskToAppend.appendChild(deleteButton)

            // appends the task div to the list of tasks
            task_list.appendChild(taskToAppend)

            task_input.value = ""

        }
    }
});

task_list.addEventListener("click", function(event){
    const target = event.target 

    // checkbox logic

    if (target.classList.contains("task-checkbox")) {
        const taskItem = target.closest(".task-item");
        const textSpan = taskItem.querySelector("span");
        textSpan.classList.toggle("completed");
    }

    // delete button logic

    if (target.classList.contains("delete-Button")){
        const taskItem = target.closest(".task-item")
        taskItem.remove()
    }

    // edit button logic

    if (target.classList.contains("edit-Button")){ // checks if clicked element has this class
        const taskItem = target.closest(".task-item"); // finds the parent div with this class
        const textSpan = taskItem.querySelector("span") // finds the span in the task item
        const currentText = textSpan.textContent; // gets the current task text
        const updatedText = prompt("Edit the task :", currentText) // opens a prompt with the text already previewed

        if (updatedText !== null && updatedText.trim() !== ""){ // check if user didnt cancel and new text isnt empty or white space
            textSpan.textContent = updatedText;
        }
    }
})