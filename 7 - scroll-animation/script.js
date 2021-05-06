const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 3
  console.log('TTTTT', triggerBottom)

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    console.log('BBBB', boxTop)
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
