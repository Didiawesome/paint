const container = document.querySelector('.container')
const input = document.querySelector('#input')
const eraser = document.querySelector('#eraser')
const reset = document.querySelector('#reset')
const SQUARES_COUNT = 900
let inputColor
let activeColor
let erasing = false

for (let i = 0; i < SQUARES_COUNT; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('click', () => {
    setColor(square)
  })

  container.append(square)
}

input.addEventListener('change', (event) => {
  inputColor = event.target.value
  activeColor = event.target.value
  erasing = false
  eraser.classList.remove('active')
})

function setColor(el) {
  const color = erasing ? activeColor : inputColor
  el.style.background = color
  erasing
    ? (el.style.boxShadow = '0 0 2px #000')
    : (el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`)
}

eraser.addEventListener('click', () => {
  erasing = !erasing
  activeColor = '#393939'
  eraser.classList.toggle('active')
})

reset.addEventListener('click', () => {
  erasing = false
  container.childNodes.forEach((child) => {
    child.style.background = '#393939'
    child.style.boxShadow = '0 0 2px #000'
  })
  eraser.classList.remove('active')
})
