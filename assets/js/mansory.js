$(document).ready(function() {
  var $grid = $('.grid');
  if (!$grid.length) return;

  $grid.masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
    percentPosition: true
  });
  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });
});
