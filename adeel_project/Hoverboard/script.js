const container = document.getElementById('container')
const colors = ['#f16a6a', '#61e11a', 'white', '#d0e11a', 'blue','#08d2ef','#e1871d']
const SQUARES = 500

for(let i = 0; i < SQUARES ; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}
 
function setColor(element){
      const color = getRandomColor()
      element.style.background = color
      element.style.boxshadow = `0 0 2px ${color}, 0 0 14px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxshadow = '#000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}