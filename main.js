$(document).ready(function() {

      var venue, map;
      map = $('.ct-map');
      venue = map.find('.ct-venue');
      venue.each(function() {
        var button, that;
        that = $(this);
        button = that.find('.ct-venue__button');
        return button.on('click', function() {
          venue.not(that).removeClass('active');
          if (that.hasClass('active')) {
            that.removeClass('active');
            return map.removeClass('popup-open');
          } else {
            that.addClass('active');
            return map.addClass('popup-open');
          }
        });
      });

});