
export function formatName(text) {
  if (text !== undefined) {
    if (text.includes('-')) {
      return text.replaceAll("-", " ");
    } else if (text.includes(" ")) {
      return text.replaceAll(" ", "-");
    }
  }
  return text
}

export function displayFetchResults(resultsObj, status) {
  return resultsObj[status]
}
