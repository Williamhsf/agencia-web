$(document).ready(function() {
  // variaveis para progressbar
  let containerA = document.getElementById("circleA");
  let containerB = document.getElementById("circleB");
  let containerC = document.getElementById("circleC");
  let containerD = document.getElementById("circleD");

  // criar o objeto A
  let circleA = new ProgressBar.Circle(containerA, {
    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: {color: '#AAA'},
    to: {color: '#65DAF9'},

    // estrutura do circulo e animacao
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      // valor do circulo
      let value = Math.round(circle.value() * 60);

      circle.setText(value);
    }
  });

  // criar o objeto B
  let circleB = new ProgressBar.Circle(containerB, {
    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1600,
    from: {color: '#AAA'},
    to: {color: '#65DAF9'},

    // estrutura do circulo e animacao
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      // valor do circulo
      let value = Math.round(circle.value() * 254);

      circle.setText(value);
    }
  });

  // criar o objeto C
  let circleC = new ProgressBar.Circle(containerC, {
    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1800,
    from: {color: '#AAA'},
    to: {color: '#65DAF9'},

    // estrutura do circulo e animacao
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      // valor do circulo
      let value = Math.round(circle.value() * 32);

      circle.setText(value);
    }
  });

  // criar o objeto D
  let circleD = new ProgressBar.Circle(containerD, {
    color: '#65DAF9',
    strokeWidth: 8,
    duration: 2000,
    from: {color: '#AAA'},
    to: {color: '#65DAF9'},

    // estrutura do circulo e animacao
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      // valor do circulo
      let value = Math.round(circle.value() * 5423);

      circle.setText(value);
    }
  });


  // iniciando loader quandoa o usuario chega no elemento
  let dataAreaOffset = $('#data-area').offset(); //assim que acessa a secao data-area
  let stop = 0; //garante que ira parar

  $(window).scroll(function(e) {
    let scroll = $(window).scrollTop();

    // o loader acontecera quando atingir -500px
    if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
      // disparando animacao
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
  });

  // Parallax
  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
    $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
    $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
  }, 250);
  
  // Filtro do Portfolio
  $('.filter-btn').on('click', function() {
    // botoes atribuidos a ID
    let type = $(this).attr('id');
    // caixas onde estao cada projeto
    let boxes = $('.project-box');

    // removendo e adicionando a class active
    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if(type == 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes)
    }  
  });

  // aparecer e esconder as boxes
  function eachBoxes(type, boxes) {
    if(type == 'all') {
      $(boxes).fadeIn(); //aparecer
    } else {
      $(boxes).each(function () {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow'); //sumir
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  //scroll para as seções
  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let teamSection = $('#team-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });
});