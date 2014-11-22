$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  var emptyGradeNotes = $('.grade-note.empty');
  emptyGradeNotes.popover();

  emptyGradeNotes.click(function() {
    var self = $(this);
    self.popover('show');
    self.addClass('active');
    self.parent().tooltip('hide');

    self.on('shown.bs.popover', function() {
      var textarea = $('.popover textarea');
      textarea.blur(function() {
        self.popover('hide');
        self.removeClass('active');
      });
      textarea.focus();
    });
  });
});
