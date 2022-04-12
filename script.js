const navIcon = document.getElementById('nav-checkbox')
const nav = document.getElementById('nav')

navIcon.addEventListener('click', () => {
  console.log(nav)
  nav.classList.toggle('nav-open')
})
const navLinks = document.getElementsByClassName('nav-item-link')

console.log(navLinks)

for (let i = 0; i < navLinks.length; i++) {
  console.log(link)
  link.addEventListener('click', () => {
    closeNav()
  })
}

const closeNav = () => {
  nav.classList.remove('nav-open')
}
