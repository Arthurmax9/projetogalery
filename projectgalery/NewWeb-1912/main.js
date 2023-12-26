

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });

  // jQuery for page scrolling feature
  $(function() {
    $('body').on('click', 'a.scrollable', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // Function to show overlay
  function showOverlay(figure) {
    const overlay = figure.querySelector('.overlay');
    overlay.style.opacity = '1';
  }

  // Function to hide overlay
  function hideOverlay(figure) {
    const overlay = figure.querySelector('.overlay');
    overlay.style.opacity = '0';
  }

  // Adiciona um event listener para cada figure na galeria
  const figures = document.querySelectorAll('.galery figure');
  figures.forEach((figure) => {
    // Adiciona eventos de mouseenter e mouseleave
    $(figure).hover(
      () => showOverlay(figure),
      () => hideOverlay(figure)
    );
  });

