(function($) {

	'use strict';

  $('.site-menu-toggle').click(function(){
    var $this = $(this);
    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


  // aos
  AOS.init({
    duration: 1000
  });

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    autoHeight: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        dots: true,
        nav:true,
        loop:false
      }
  	}
	});

  var siteStellar = function() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  }
  siteStellar();

  var smoothScroll = function() {
    var $root = $('html, body');

    $('a.smoothscroll[href^="#"]').click(function () {
      $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });
  }
  smoothScroll();

  var dateAndTime = function() {
    $('#m_date').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
    });
    $('#checkin_date, #checkout_date').datepicker({
      'format': 'd MM, yyyy',
      'autoclose': true
    });
    $('#m_time').timepicker();
  };
  dateAndTime();


  var windowScroll = function() {

    $(window).scroll(function(){
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-site-header').addClass('scrolled');
      } else {
        $('.js-site-header').removeClass('scrolled');
      }

    });

  };
  windowScroll();


  var goToTop = function() {

    $('.js-gotop').on('click', function(event){
      
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');
      
      return false;
    });

    $(window).scroll(function(){

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });
  
  };

  $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    console.log('scrolling');
  });

  
  // navigation
  var OnePageNav = function() {
    var navToggler = $('.site-menu-toggle');
    // .smoothscroll[href^='#'],
    $("#templateux-navbar .navbar-nav li a[href^='#'], .smoothscroll[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      
      // navToggler.trigger('click');

      // setTimeout(function(){
        $('html, body').animate({

          scrollTop: $(hash).offset().top
        }, 400, 'easeInOutExpo', function(){
          window.location.hash = hash;
        });
        
      // }, 500);
      

      

    });

    // $("#menu li a[href^='#']").on('click', function(e){
    //   e.preventDefault();
    //   navToggler.trigger('click');
    // });

    $('body').on('activate.bs.scrollspy', function () {
      // console.log('nice');
      // alert('yay');
    })
  };
  OnePageNav();


  // scroll
  var scrollWindow = function() {
    $(window).scroll(function(){
      var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.pb_navbar'),
          sd = $('.js-scroll-wrap'), 
          toggle = $('.site-menu-toggle');

      if ( toggle.hasClass('open') ) {
        $('.site-menu-toggle').trigger('click');
      }
      

      if (st > 150) {
        if ( !navbar.hasClass('scrolled') ) {
          navbar.addClass('scrolled');  
        }
      } 
      if (st < 150) {
        if ( navbar.hasClass('scrolled') ) {
          navbar.removeClass('scrolled sleep');
        }
      } 
      if ( st > 350 ) {
        if ( !navbar.hasClass('awake') ) {
          navbar.addClass('awake'); 
        }
        
        if(sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if ( st < 350 ) {
        if ( navbar.hasClass('awake') ) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if(sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();


})(jQuery);

/* Funciones - Formulario */

// Funci??n - Buscar tipo de viaje
function buscaTipoViaje(){
  window.location.href = 'secciones/formulario.html';
}

// Funci??n - Cambiar de secci??n
function cambiarSeccion(actualPage, otherPage){
  if(actualPage != '' && otherPage != ''){
      $('#' + actualPage).hide();
      $('#' + otherPage).show();
  }else{
      window.location.href = '../index.html';
  }
}

// Funci??n - Seleccionar compa??ia
function seleccionaCompania(id){
  $('.carousel-caption .btn').removeClass('btn-success');
  $('.carousel-caption .btn').addClass('btn-primary');
  $('.carousel-caption .btn').html('Select');
  $('#' + id).removeClass('btn-primary');
  $('#' + id).addClass('btn-success');
  $('#' + id).html('Select<i class="bi bi-check-circle-fill ms-2 icn-white"></i>');
  $('#btn-continuar-seleccion-destino').removeAttr('disabled');
}

// Funci??n - Selecciona el tipo de nave
function seleccionTipoViaje(id){
  $('.card-body .contenedor-boton .btn').removeClass('btn-success');
  $('.card-body .contenedor-boton .btn').addClass('btn-primary');
  $('.card-body .contenedor-boton .btn').html('Select');
  $('#seleccion-viaje-' + id).removeClass('btn-primary');
  $('#seleccion-viaje-' + id).addClass('btn-success');
  $('#seleccion-viaje-' + id).html('Select<i class="bi bi-check-circle-fill ms-2 icn-white"></i>');
  $('#btn-continuar-asientos').removeAttr('disabled');
}

// Funci??n - Selecci??n asiento
function seleccionAsiento(idTipo, idAsiento){
  console.log(idTipo);
  console.log(idAsiento);
  var arrAsientos = [];

  if(arrAsientos.length < 1){
    console.log(arrAsientos);
    arrAsientos.push(idAsiento);

    if(idTipo == 'nave'){
      $('#asientos-nave').html('<i class="bi bi-chevron-double-right me-2"></i>' + idAsiento);
    }else if(idTipo == 'nave-caja'){
      $('#asientos-nave-caja').html('<i class="bi bi-chevron-double-right me-2"></i>' + idAsiento);
    }else if(idTipo == 'teletransportacion'){
      $('#asientos-teletransportacion').html('<i class="bi bi-chevron-double-right me-2"></i>' + idAsiento);
    }

    $('#btn-continuar-pago').removeAttr('disabled');

  }else if(arrAsientos.length > 1){

    arrAsientos.push(idTipo);
    console.log(arrAsientos)

    if(idTipo == 'nave'){
      var asiento = $('#asientos-nave-caja').html();
    $('#asientos-nave').html('<i class="bi bi-chevron-double-right me-2"></i>' + asiento + ', ' + idAsiento);
    }else if(idTipo == 'nave-caja'){
      var asiento = $('#asientos-nave-caja').html();
    $('#asientos-nave-caja').html('<i class="bi bi-chevron-double-right me-2"></i>' + asiento + ', ' + idAsiento);
    }else if(idTipo == 'teletransportacion'){
      var asiento = $('#asientos-nave-caja').html();
    $('#asientos-teletransportacion').html('<i class="bi bi-chevron-double-right me-2"></i>' + asiento + ', ' + idAsiento);
    }

  }  

}

// Funci??n - Valida campos de texto
function validaCampoTexto(idCampo){
  console.log(idCampo);
  var valorCampo = $('input#'+idCampo).val();

    if(valorCampo == ''){

      $('input#'+idCampo).removeClass('valid'); // Agrega clase "Invalid"
      $('input#'+idCampo).addClass('invalid'); // Agrega clase "Invalid"

    }else{

      $('input#'+idCampo).removeClass('invalid'); // Agrega clase "Invalid"
      $('input#'+idCampo).addClass('valid'); // Elimina clase "Valid"

    }

  }

// Funci??n - Realizar pago
function realizarPago(){

  document.getElementById('btn-continuar-detalles').disabled = true;

  setTimeout(() => {

    $('.gif-carga').hide();
    $('.aviso-confirmacion').show();
    document.getElementById('btn-continuar-detalles').disabled = false;
    
  }, "3000");

}
