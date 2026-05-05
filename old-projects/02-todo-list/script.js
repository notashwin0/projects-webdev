const myButton = document.getElementById("mainButton")
const mainList = document.getElementById("orderList")

count = 0

function addTask(){
    count++
    newTask = document.createElement('li')
    newTask.textContent = `${count} Custom Task`
    mainList.appendChild(newTask)

    newTask.addEventListener('click', function(){
        this.remove()
    })
}

myButton.addEventListener('click', addTask)

// todo list 
// 1. Add a text field to add custom tasks
// 2. Each task must have an Edit and Delete button, possibly as icons
// 3. (?) Do checked tasks get deleted
// 4. (?) When editing a task, do I use the Pop Up or edit through the text itself (if that is possible)
// 5. Use CSS
// 6. Research Local Storage 
// 7. (?) Research if this uses forms
// ?