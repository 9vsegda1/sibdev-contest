import 'normalize.css'
import './scss/main.scss'
import generateItems from './generate-items'
import coupons from './coupons'
// import './fonts/Gilroy-ExtraBold.woff'

window.addEventListener('load', () => {
  const content = document.getElementById('content')
  content.innerHTML = generateItems(coupons)
  showItems(content.querySelectorAll('.content__item_new'))
  
  


  content.addEventListener('click', (event) => {
    let item = event.target.closest('.content__item'); // (1)

    if (!item) return; // (2)
    content.querySelector('.content__item_active').classList.toggle('content__item_active')
    item.classList.toggle('content__item_active')
    
    
    
  }, true)

  
  // ================

  const menu = document.querySelector('.sidebar__menu')
  menu.addEventListener('click', (event) => {
    let item = event.target.closest('.menu__item'); // (1)

    if (!item) return; // (2)
    menu.querySelector('.menu__item_active').classList.toggle('menu__item_active')
    item.classList.toggle('menu__item_active')
    content.innerHTML = generateItems(coupons.reverse())
    showItems(content.querySelectorAll('.content__item_new'))
  })

  // ================= sticky + svg remove

  window.onscroll = function() {removeAndResize()};
})
console.log('hello')

async function showItems(items = []) {
  setTimeout(() => 
    Array.prototype.map.call(items, item => {
      item.classList.toggle('content__item_new')
    })
  , 500)
}

function removeAndResize() {
  const header = document.querySelector('.header')
  let sticky = header.offsetTop
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    
  } else {
    header.classList.remove("sticky");
  }
}