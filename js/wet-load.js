/**
 * @file
 */

(function ($, Drupal) {

  'use strict';

//  Drupal.behaviors.Highlight = {
//    attach: function (context, settings) {
      $(document).ready(function() {
        // load CDTS Head reference
        $('head').append(wet.builder.refTop({
          "cdnEnv" : "prod",
          "isApplication": true
        }));

        // load CDTS Top Reference
        let defTop = document.getElementById("def-top");
        defTop.outerHTML = wet.builder.top({
          "lngLinks": false,
          "breadcrumbs": false
        });

        // load CDTS PreFooter Reference
        let defPreFooter = document.getElementById("def-preFooter");
        defPreFooter.outerHTML = wet.builder.preFooter({
          "showFeedback" : "/forms/contact-us",
          "showShare": true,
          "dateModified": "{{ date_modified }}"
        });

        // load CDTS Footer refernce
        let defFooter = document.getElementById("def-footer");
        defFooter.outerHTML = wet.builder.footer();
      });
//    }
//  };
})(window.jQuery, window.Drupal, window.drupalSettings);

