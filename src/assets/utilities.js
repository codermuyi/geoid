
export function formatName(text) {
  if (text.includes('-')) {
    return text.replaceAll("-", " ");
  } else if (text.includes(" ")) {
    return text.replaceAll(" ", "-");
  }
  return text
}
