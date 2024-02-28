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




document.addEventListener("DOMContentLoaded", function() {

  var contenedor = document.querySelector('.page-content');
  var contenedorHeight = contenedor.offsetHeight;

  var cards = document.querySelectorAll('.card');
  var card = document.querySelector('.card');
  var cardHeight = card.offsetHeight;

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

              contenedor.style.height = contenedorHeight +'px';

              descripciones[index].classList.remove('visible');
          } else {
                  // Si no está visible, ocultar todas las descripciones y luego mostrar la descripción correspondiente a la card clickeada
                  descripciones.forEach(function(descripcion) {
                  descripcion.classList.remove('visible');
              });
              if (window.innerWidth > 1024){
                contenedor.style.height = '57rem';
              }
              else{
                if(window.innerWidth > 768){
                  contenedor.style.height = contenedorHeight + 700 + 'px';
                }
                else{
                  if(window.innerWidth > 480){
                    contenedor.style.height = contenedorHeight + 600 + 'px';
                  }
                  else{
                    if(window.innerWidth > 320){
                      contenedor.style.height = contenedorHeight + 700 + 'px'
                    }
                  }
                }
                
              }

              descripciones[index].classList.add('visible');
          }
    });
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

/*==================== Typed JS ====================*/

const typed = new Typed('.multiple-text',{
  strings: ['Servicio al cliente', 'Seguridad y Transparencia'],
  startDelay: 200,
  typeSpeed: 25,
  backSpeed: 50,
  backDelay: 3000,
  loop: true
});

const typedContact = new Typed('.multiple-contact',{
  strings: ['Dejanos tu mensaje'],
  typeSpeed: 100,
  loop: false
});

/*==================== Scroll Reveal ====================*/

ScrollReveal().reveal('.home-text p', { origin: 'left', reset:true, distance:'120px', delay:100, duration:2000 });

ScrollReveal().reveal('.card-box .big-cont', { origin: 'top', reset:true, distance:'20px', delay:100, duration:1000 });
ScrollReveal().reveal('.card-box .subtitle', { origin: 'bottom', reset:true, distance:'40px', delay:100, duration:1000 });

ScrollReveal().reveal('.page-content .card:nth-child(1)', { origin: 'top', reset:false, distance:'50px', delay:200, duration:1000});
ScrollReveal().reveal('.page-content .card:nth-child(2)', { origin: 'top', reset:false, distance:'50px', delay:400, duration:1000 });
ScrollReveal().reveal('.page-content .card:nth-child(3)', { origin: 'top', reset:false, distance:'50px', delay:600, duration:1000 });
ScrollReveal().reveal('.page-content .card:nth-child(4)', { origin: 'top', reset:false, distance:'50px', delay:800, duration:1000 });
ScrollReveal().reveal('.page-content .card:nth-child(5)', { origin: 'top', reset:false, distance:'50px', delay:1000, duration:1000 });

ScrollReveal().reveal('.accidents-container .accidents-box:nth-child(1)', { origin: 'top', reset:false, distance:'100px', delay:200, duration:500});
ScrollReveal().reveal('.accidents-container .accidents-box:nth-child(2)', { origin: 'bottom', reset:false, distance:'100px', delay:200, duration:500});
ScrollReveal().reveal('.accidents-container .accidents-box:nth-child(3)', { origin: 'top', reset:false, distance:'100px', delay:200, duration:500});
ScrollReveal().reveal('.accidents-container .accidents-box:nth-child(4)', { origin: 'bottom', reset:false, distance:'100px', delay:200, duration:500});

ScrollReveal().reveal('.accidents-container .accidents-box:nth-child(5)', { origin: 'bottom', reset:false, distance:'100px', delay:200, duration:500});
ScrollReveal().reveal('.accidents-container .accidents-box:nth-child(6)', { origin: 'top', reset:false, distance:'100px', delay:200, duration:500});
ScrollReveal().reveal('.accidents-container .accidents-box:nth-child(7)', { origin: 'bottom', reset:false, distance:'100px', delay:200, duration:500});
ScrollReveal().reveal('.accidents-container .accidents-box:nth-child(8)', { origin: 'top', reset:false, distance:'100px', delay:200, duration:500});






let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== Remove Toggle Icon And Navbar When Click Navbar Link (Scroll) ====================*/

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

