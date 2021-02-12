export function setCookie (cookieName, cookieValue, expire = 30) {
  const d = new Date()
  d.setTime(d.getTime() + (expire * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cookieName + '=' + JSON.stringify(cookieValue) + ';' + expires + ';path=/'
}

export function getCookie (cookieName) {
  let object
  let c
  const name = cookieName + '='
  try {
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) !== -1) {
        object = JSON.parse(c.substring(name.length, c.length))
        if (object) {
          return object
        }
      }
    }
    return null
  } catch (e) {
    console.log(e)
    // noinspection JSUnusedAssignment
    object = c.substring(name.length, c.length)
    /* eslint-disable-next-line no-unneeded-ternary */
    return object ? object : null
  }
}

export function deleteCookie (cookieName) {
  if (getCookie(cookieName)) {
    document.cookie = cookieName + '=;Thu, 01 Jan 1970 00:00:00 UTC;path=/'
  }
}

export default { getCookie, setCookie, deleteCookie }
