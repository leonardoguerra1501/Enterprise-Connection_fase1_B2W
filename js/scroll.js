const linkExplorar = document.querySelector('a[href^="#"]')

function scrollToSection(event) {
  event.preventDefault()
  const section = document.querySelector('.sectionCards')

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

linkExplorar.addEventListener('click', scrollToSection)