/**
 * Set `Key-Value` pair in browser storage
 * @param {String} key
 * @param {Object} value
 * @returns {void}
 */
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Get Object Data according to corresponding key
 * @param {String} key
 * @returns {undefined | Object}
 */
export const getLocalStorage = (key) => {
  if (!key) return undefined
  const data = localStorage.getItem(key)
  if (!data) return undefined
  const parsedData = JSON.parse(data)
  return parsedData
}

/**
 * Removes an Object corresponding to it's key
 * @param {String} key
 */
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key)
}

/**
 * Clears Browsers's storage
 */
export const clearLocalStorage = () => {
  localStorage.clear()
}
