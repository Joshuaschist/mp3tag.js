
const TOAST_NONE = ''
const TOAST_SUCCESS = 'text-white bg-success'
const TOAST_INFO = 'text-white bg-info'
const TOAST_DANGER = 'text-white bg-danger'
const TOAST_WARNING = 'text-white bg-warning'
let toastCounter = 0

function toast (title, message, type = TOAST_NONE) {
  const temp = $('#toast-template').prop('content')
  const toast = $(temp).clone()
  const id = toastCounter++

  $(toast).find('.toast').attr('id', `toast-${id}`)
  $(toast).find('.toast *').addClass(type)
  $(toast).find('[data-temp=\'title\']').text(title)
  $(toast).find('[data-temp=\'body\']').text(message)
  $(toast).find('[data-temp]').removeAttr('data-temp')

  $('#toaster').append(toast)
  $(`#toast-${id}`).toast({ delay: 3000 })
  $(`#toast-${id}`).toast('show')
  $(`#toast-${id}`).click(function () {
    $(this).toast('hide')
  })
}

function imageURL (bytes, format) {
  let encoded = ''
  bytes.forEach(function (byte) {
    encoded += String.fromCharCode(buffer[i])
  })

  return `data:${format};base64,${btoa(encoded)}`
}

function loadFile (file) {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }

    reader.onerror = reject
    reader.readAsArrayBuffer(file)
  })
}
