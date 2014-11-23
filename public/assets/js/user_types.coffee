#
# Valid user types:
#  - student
#  - parent
#  - teacher
#  - school_admin
#  - system_admin
#

setUserType = (type, redirect) ->
  localStorage.setItem('usertype', type)

  if redirect
    document.location.href = redirect
  else
    $('.usertype').hide()
    $(".usertype[data-type~='#{type}']").show()

$ ->
  type = localStorage.getItem('usertype') or 'student'
  setUserType(type)

  if window.location.pathname == '/'
    firstItem = $('.sidebar-item:visible').first()
    document.location.href = firstItem.attr('href')

  $('.set-usertype').click ->
    self = $(this)
    type = self.attr('data-type')
    setUserType(type, '/')
