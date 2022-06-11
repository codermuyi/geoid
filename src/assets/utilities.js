
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
