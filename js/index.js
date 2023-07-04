/*var acc = document.getElementsByClassName('btnReadMore')
var ler = document.getElementsByClassName('ler')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')

    if (ler[i].style.display === 'block') {
      ler[i].style.display = 'none'
    } else {
      ler[i].style.display = 'block'
    }
  })
}*/

const js = 'ebsagide'

const acc = document.getElementsByClassName('sections')

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

/*const acc = document.querySelector('[ data-js="btnReadMore" ]')

acc.addEventListener('click', e => {
  console.log(e.target)
})*/
