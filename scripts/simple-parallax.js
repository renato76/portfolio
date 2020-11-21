const simpleParallax = require('simple-parallax-js')

const image = document.getElementsByClassName('skills')
new simpleParallax(image, {
  scale: 1.5
})