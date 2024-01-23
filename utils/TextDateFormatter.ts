export const toReadableDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.toLocaleDateString('default', { day: 'numeric'})
  const dayWithSuffix = 
    +day > 3 ? `${day}th` :  
    +day > 2 ? `${day}rd` :
    +day > 1 ? `${day}nd` : `${day}st` 
  const month = date.toLocaleDateString('default', { month: 'long' })
  return `${month} ${dayWithSuffix}, ${date.getFullYear()}`
}