$ ->
  $('[data-toggle="tooltip"]').tooltip()
  $('.clockpicker').clockpicker()

  emptyGradeNotes = $('.grade-note.empty')
  emptyGradeNotes.popover()

  emptyGradeNotes.click ->
    self = $(this)
    self.popover('show')
    self.addClass('active')
    self.parent().tooltip('hide')

    self.on 'shown.bs.popover', ->
      textarea = $('.popover textarea')
      textarea.blur ->
        self.popover('hide')
        self.removeClass('active')

      textarea.focus()
