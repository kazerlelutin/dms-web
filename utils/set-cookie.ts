export const COOKIE_NAME = 'dms_co'
export const setCookie = (cvalue: string) => {
  const d = new Date()
  d.setTime(d.getTime() + 24 * 60 * 60 * 52 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = COOKIE_NAME + '=' + cvalue + ';' + expires + ';path=/'
}
