$(() => {

})

$('.about-scroll').click(function () {
  $('html, body').animate({
    scrollTop: $('.about-me').offset().top
  }, 1000)
})

$('.current-skill-scroll').click(function () {
  $('html, body').animate({
    scrollTop: $('.skills').offset().top
  }, 1000)
})

$('.project-scroll').click(function () {
  $('html, body').animate({
    scrollTop: $('.project').offset().top
  }, 1000)
})

$('.to-top-scroll').click(function () {
  $('html, body').animate({
    scrollTop: $('.top').offset().top
  }, 1000)
})

$('.to-bottom-scroll').click(function () {
  $('html, body').animate({
    scrollTop: $('.bottom').offset().top
  }, 1000)
})

$('.contact-scroll').click(function () {
  $('html, body').animate({
    scrollTop: $('.contact').offset().top
  }, 1000)
})

$(document).ready(function () {
  $('.button-collapse').sideNav()
})
