const elDarkModeButton= document.querySelector('.dark-mode-button');
elDarkModeButton.addEventListener('click', function () {
  document.body.classList.add('dark-mode')
  document.header.classList.add('dark-mode')
  document.input.classList.add('dark-mode')
  document.querySelector(option).classList.add('dark-mode')
})
// elDarkModeButton.addEventListener('click', function () {
//   document.body.classList.remove('dark-mode')
// })