export const timeConverter = (unixTime) => {
  const milliSecs = unixTime
  const dateObject = new Date(milliSecs)
  return dateObject.toLocaleDateString('en-GB')
}
