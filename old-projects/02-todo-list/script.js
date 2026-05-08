const tasksAdder = document.querySelector(".tasks-adder")
const tasksDiv = document.querySelector(".tasks")

tasksAdder.addEventListener('keypress', function(event){
    if(event.key === 'Enter' && this.value.trim() !== ''){
        const p = document.createElement('p')
        p.textContent = this.value

        tasksDiv.appendChild(p)

        this.value = ''
    }
})


// todo list 
// 1. add checkbox
// 2. Each task must have an Edit and Delete button, possibly as icons
// 3. (?) Do checked tasks get deleted
// 4. (?) When editing a task, do I use the Pop Up or edit through the text itself (if that is possible)
// 5. Use CSS
// 6. Research Local Storage 
// 7. (?) Research if this uses forms
