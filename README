## Example usage:
    $('.row').equalizeHeight({
      selector: '.box, figure',
      setPadding: function(box, delta) {
        if ( box.children('.highlight').length ) {
          box.find('.highlight').css({ 
            'paddingTop': delta 
          });
        } else {
          box.css({ 
            'paddingBottom': delta 
          });
        }
      }
    });