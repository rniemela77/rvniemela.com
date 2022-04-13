// Handle opening/closing nav menu
const navIcon = document.getElementById('nav-checkbox')
const nav = document.getElementById('nav')

navIcon.addEventListener('click', () => toggleNav())

const toggleNav = (navState) => {
  if (navState === true) {
    nav.classList.add('nav-open')
  } else if (navState === false) {
    nav.classList.remove('nav-open')
  } else nav.classList.toggle('nav-open')
}

// Make clicking nav links close nav menu
const navLinks = document.getElementsByClassName('nav-item-link')
for (let i = 0; i < navLinks.length; i++) {
  console.log(navLinks[i])
  navLinks[i].addEventListener('click', () => {
    toggleNav(false)
  })
}
