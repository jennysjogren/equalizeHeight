$.fn.equalizeHeight = function(options) {
  var config = $.extend({}, {
    selector: '.box',
    setPadding: setPadding
  }, options);

  function setPadding(col, pad) {
    col.css({ 'paddingBottom' : pad });
  }

  function adjust(rowNo, row) {
    var boxes = $(config.selector, row),
        max = 0;

    boxes.each(function(i, col) {
      col = $(this);
      config.setPadding(col, 0);
      if ( col.outerHeight() > max ) {
        max = col.outerHeight();
      }
    });
        
    boxes.each(function(i, box) {
      var gap = max - $(box).outerHeight();
      config.setPadding($(box), gap);
    });
  }

  return $(this).each(adjust);
};