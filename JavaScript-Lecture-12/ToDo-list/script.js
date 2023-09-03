function addTask(event) {
    event.preventDefault()
    // fetch task
    const inputNode = document.getElementsByClassName('todo-input')[0]
    const task = inputNode.value
    // create a div
    const divNode = document.createElement('div') //<div></div>
    // create li element
    const listNode = document.createElement('li') //<li></li>
    listNode.innerText = task //<li>task</li>
    listNode.setAttribute('class', 'todo-item') // <li class="todo-item">task</li>
    // create complete button
    const comleteButton = document.createElement('button')
    comleteButton.innerText = 'Complete'
    comleteButton.setAttribute('class','complete-btn')
    // create delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.setAttribute('class','trash-btn')
    // push li and buttons inside div
    divNode.appendChild(listNode)
    divNode.appendChild(comleteButton)
    divNode.appendChild(deleteButton)
    // fetch ul and append the div node
    const ulNode = document.getElementsByClassName('todo-list')[0]
    ulNode.appendChild(divNode)
}

const addButton = document.getElementsByClassName('todo-button')[0]
addButton.addEventListener('click', addTask)