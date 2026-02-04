const body = document.body
const switchbtn = document.getElementById("switch-mode")
const todoInput = document.getElementById("todo-input")
const addbtn = document.getElementById("add-btn")
const todoListContainer = document.getElementById("todo-list")


let todos = [
    
]


switchbtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode") 
    
    const isdarkmode = body.classList.contains("dark-mode")

if (isdarkmode) {
    switchbtn.innerText = "Light Mode"
} else {
    switchbtn.innerText = "Dark Mode"
}
})

function renderTodolist() {
    todoListContainer.innerHTML = ""

    const todoElement = todos.map((item, index) => {
        const li = document.createElement("li")
        const span = document.createElement("span")
        const deletebtn = document.createElement("button")
        const delay = index * 0.1;

        span.textContent = item.text
        deletebtn.textContent = "Delete"
        deletebtn.classList.add("btn", "btn-error")

        li.style.animationDelay = `${delay}s`

        // 🔥 EVENT DELETE
        deletebtn.addEventListener("click", () => {
            todos.splice(index, 1) // hapus dari array
            renderTodolist()   // render ulang
        })

        li.appendChild(span)
        li.appendChild(deletebtn)

        return li
    }) 

   todoListContainer.append(...todoElement)
}

renderTodolist()

addbtn.addEventListener("click", () => {
    const newText = todoInput.value.trim() 

    if (newText === ""){
        alert("Masukkan Kegiatan!")
        return;
    }

    const newData = {
        id: todos.length + 1,
        text:newText
    }

    todos.push(newData)

    todoInput.value = ""

    renderTodolist()
})





