// SLIDER

$(function() {
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220); 
    $clientslider.css('width', clientwidth);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    $(document).on({
        mouseenter: function() {
            rotating = false;
        },
        mouseleave: function() {
            rotating = true;
        }
    },'#ourclients');

    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clientlogo li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 2000, function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clientlogo li:last').after($first);
        });
      }
    }
  });

// MARCA DACADA BOTON A MEDIDA QUE ME DESPLAZO

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
      }
  });
}

// SHOW HIDE SEGUROS DESCRIPTION

var cards = document.querySelectorAll('.card');
var contenedor = document.querySelector('.page-content');
var descripciones = document.querySelectorAll('.descripcion');

cards.forEach(function(card, index) {
    card.addEventListener('click', function() {
        // Remover la clase 'active' de todas las tarjetas
        cards.forEach(function(card) {
            card.classList.remove('active');
        });

        // Agregar la clase 'active' a la tarjeta clickeada
        cards[index].classList.add('active');

        // Verificar si la descripción correspondiente a la card clickeada está visible
        if (descripciones[index].classList.contains('visible')) {
            // Si está visible, ocultarla
            cards[index].classList.remove('active');
            contenedor.style.height = '20rem'; // Altura mínima
            descripciones[index].classList.remove('visible');
        } else {
                // Si no está visible, ocultar todas las descripciones y luego mostrar la descripción correspondiente a la card clickeada
                descripciones.forEach(function(descripcion) {
                descripcion.classList.remove('visible');
            });
            contenedor.style.height = '45rem'; // Altura máxima
            descripciones[index].classList.add('visible');
        }
    });
});

// CONTACT

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if(this.value == ""){
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

