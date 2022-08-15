// $('.button').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
  
    var $grid = $('.gallery');
    // init
    $grid.isotope({
    // options
    itemSelector: '.image',
    masonry: {
    columnWidth: 40,
    isFitWidth: true
    }
    });
      
      // change is-checked class on buttons
      var $buttonGroup = $('.controls');
      $buttonGroup.on( 'click', 'li', function( event ) {
        $buttonGroup.find('.active').removeClass('active');
        var $button = $( event.currentTarget );
        $button.addClass('active');
        var filterValue = $button.attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });