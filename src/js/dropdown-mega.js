(function ($) {
  var DATA_KEY     = 'bs.dropdown';
  var EVENT_KEY    = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';

  var Event = {
    CLICK_DATA_API : 'click' + EVENT_KEY + DATA_API_KEY
  };

  var Selector = {
    MEGA_MENU : '.dropdown-menu-auto, .dropdown-menu-fluid'
  };

  $(document)
    .on(Event.CLICK_DATA_API, Selector.MEGA_MENU, function (event) {
      event.stopPropagation();
    });
})(jQuery);