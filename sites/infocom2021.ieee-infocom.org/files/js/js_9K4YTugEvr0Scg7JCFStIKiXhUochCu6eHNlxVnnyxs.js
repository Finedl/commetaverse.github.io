(function($) {

  Drupal.behaviors.cookieCompliance = {
    attach: function(context) {
      $('body', context).once('cookiecomp', function() {
        window.cookieconsent.initialise(json);
      });
    }
  };

}(jQuery));
;
