function htmlEndTagByStartTag(startTag) {
  return `</${startTag.match(/\w+/)}>`;
}
