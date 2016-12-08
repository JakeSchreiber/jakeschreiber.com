// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  percentPosition: true,
  layoutMode: 'masonry',
  masonry: {
    columnWidth: '.element-item'
  }
  //getSortData: {
  //  name: '.name',
  //  symbol: '.symbol',
  //  number: '.number parseInt',
  //  category: '[data-category]',
  //  weight: function( itemElem ) {
  //    var weight = $( itemElem ).find('.weight').text();
  //    return parseFloat( weight.replace( /[\(\)]/g, '') );
  //  },
  //  sortBy : 'random'
  //},
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  $('html, body').animate({ scrollTop: 0 }, 'slow');
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// Shuffle button
$('.shuffle-button').on( 'click', function() {
  $grid.isotope('shuffle');
});

//// change is-checked class on buttons
//$(window).resize(function() {
//  $('.grid').isotope('shuffle', function() {});
//});

/* Set the width of the side navigation to 200px */
//function openNav() {
//  document.getElementById("filters").style.width = "200px";
//}

/* Set the width of the side navigation to 0 */
//function closeNav() {
//  document.getElementById("filters").style.width = "0";
//}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("filters").style.width = "50%";
  //document.getElementById("main").style.marginLeft = "150px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("filters").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}