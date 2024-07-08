document.addEventListener('DOMContentLoaded', function () {
  const todoInput = document.getElementById('todo-input')
  const addBtn = document.getElementById('add-btn')
  const todoList = document.getElementById('todo-list')

  addBtn.addEventListener('click', function () {
    const todoText = todoInput.value.trim()
    if (todoText !== '') {
      addTodoItem(todoText)
      todoInput.value = ''
    }
  })

  function addTodoItem(todoText) {
    const li = document.createElement('li')
    li.className = 'todo-item'

    const textSpan = document.createElement('span')
    textSpan.textContent = todoText
    textSpan.className = 'todo-item-text'
    li.appendChild(textSpan)

    const timerDisplay = document.createElement('span')
    timerDisplay.className = 'timer-display'
    timerDisplay.textContent = '0:00'
    li.appendChild(timerDisplay)

    const startBtn = document.createElement('button')
    startBtn.textContent = 'Start'
    startBtn.className = 'start-btn'
    startBtn.addEventListener('click', function () {
      startTimer(li)
    })
    li.appendChild(startBtn)

    const stopBtn = document.createElement('button')
    stopBtn.textContent = 'Stop'
    stopBtn.className = 'stop-btn'
    stopBtn.addEventListener('click', function () {
      stopTimer(li)
    })
    li.appendChild(stopBtn)

    const restartBtn = document.createElement('button')
    restartBtn.textContent = 'Restart'
    restartBtn.className = 'restart-btn'
    restartBtn.addEventListener('click', function () {
      restartTimer(li)
    })
    li.appendChild(restartBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.className = 'delete-btn'
    deleteBtn.addEventListener('click', function () {
      li.remove()
    })
    li.appendChild(deleteBtn)

    todoList.appendChild(li)

    let timerInterval
    let seconds = 0

    function startTimer(todoItem) {
      clearInterval(timerInterval)
      timerInterval = setInterval(function () {
        seconds++
        updateTimerDisplay(todoItem)
      }, 1000)
    }

    function stopTimer() {
      clearInterval(timerInterval)
    }

    function restartTimer(todoItem) {
      clearInterval(timerInterval)
      seconds = 0
      updateTimerDisplay(todoItem)
    }

    function updateTimerDisplay(todoItem) {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      todoItem.querySelector('.timer-display').textContent = `${minutes}:${
        remainingSeconds < 10 ? '0' : ''
      }${remainingSeconds}`
    }
  }
})
