const contents = document.querySelectorAll('.content')
const listItem = document.querySelectorAll('nav .nav-inner')

listItem.forEach((item, phone) => {
  item.addEventListener('click', () => {
       hideAllContents()
       hideAllItems()

      item.classList.add('active')
      contents[phone].classList.add('show')
  })
})

function hideAllContents() {
      contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItem.forEach(item => item.classList.remove('active'))
}