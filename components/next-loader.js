export const nextLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
