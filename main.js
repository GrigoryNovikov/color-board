const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'violet']

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('touchstart', () => setColor(square))
   square.addEventListener('touchmove', () => setColor(square))
   square.addEventListener('touchend', () => removeColor(square))

   square.addEventListener('mouseover', () => setColor(square))
   square.addEventListener('mouseleave', () => removeColor(square))

   board.append(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.backgroundColor = color
}
function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d'
}

function getRandomColor () {
   const index = Math.floor(Math.random() * colors.length)

   return colors[index]
}