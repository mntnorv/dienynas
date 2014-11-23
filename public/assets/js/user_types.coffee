#
# Valid user types:
#  - student
#  - parent
#  - teacher
#  - school_admin
#  - system_admin
#

setUserType = (type) ->
  localStorage.setItem('usertype', type)
  $('.usertype').hide()
  $(".usertype[data-type~='#{type}']").show()

$ ->
  type = localStorage.getItem('usertype') or 'student'
  setUserType(type)

  $('.set-usertype').click ->
    self = $(this)
    type = self.attr('data-type')
    setUserType(type)
