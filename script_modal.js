var myModal = document.getElementById('staticBackdrop')
var myInput = document.getElementById('staticBackdrop')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
