(function ($) {
  $.fn.customPhotoViewer = function () {
    // Plugin logic for photo viewer

    // Handle thumbnail click event to open the modal
    this.on('click', '.thumbnail-anchor', function (e) {
      e.preventDefault();
      var imageUrl = $(this).attr('href');

      // Open modal with the clicked image
      // Implement modal display logic here
      // You can use a pre-existing modal library or create a custom modal

      // Example of opening a modal with jQuery UI (ensure jQuery UI is included)
      // $('#modal').html('<img src="' + imageUrl + '">').dialog({ modal: true });

      // For a custom modal, you might need to create your own modal HTML structure and styles
    });

    // Ensure method chaining
    return this;
  };
})(jQuery);
