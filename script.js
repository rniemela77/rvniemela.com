// Handle opening/closing nav menu
const navIcon = document.getElementById('nav-checkbox')
const body = document.getElementById('body')

navIcon.addEventListener('click', () => toggleNav())

const toggleNav = (navState) => {
  if (navState === true) {
    body.classList.add('nav-open')
  } else if (navState === false) {
    body.classList.remove('nav-open')
  } else body.classList.toggle('nav-open')
}

// Make clicking nav links close nav menu
const navLinks = document.getElementsByClassName('nav-item-link')
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    if (window.innerWidth <= 950) {
      navIcon.click()
    }
  })
}
