Drupal.behaviors.popover = function(context) {
  var popovers = $('.popover-popup');
  $.each(popovers, function(i, v) {
    var popover = $(v);
    var classes = popover.attr('class').split(' ');
    $.each(classes, function(k, w) {
      if (w.indexOf('popover-uid-') == 0) {
        var uid = w.substring(12);
        var $dest = $('.popover-dest.'+ w);
        $y = $dest.slice(i, i+1);
        if ($y.get().length > 0) {
          popover.css({
            'position': 'absolute',
            'top': $dest.offset().top - popover.outerHeight()
            'left': $dest.offset().left
          });
        }
        return;
      }
    });
  });
}
