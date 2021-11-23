/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if((s === goal) && Array.from(new Set(s.split(''))).length != s.length) return true
  if(s.length !== goal.length) return false

  let tempStr = ''
  let tempIndex = -1
  for(let i=0; i<s.length; i++){
    if(s[i] !== goal[i]){
      if(tempStr) {
        s = s.split('')
        s[tempIndex] = s[i]
        s[i] = tempStr
        s = s.join('')
        return s === goal
      }
      tempStr = s[i]
      tempIndex = i
      continue
    }
  }
  return false
};