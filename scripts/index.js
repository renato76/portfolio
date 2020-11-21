window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset
  const background = document.querySelector('.interests')
  background.style.top = - (scrolled - 10700 * 0.50) + 'px'
})

window.addEventListener('scroll', function() {
  const parallax = window.pageYOffset
  const background = document.querySelector('.parallax')
  background.style.top = - (parallax * 1.4) + 'px'
})
