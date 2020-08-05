// Code your solutions in this file
function writeCards (nameList, eventName) {
    let cards = []
    for(let i = 0; i < nameList.length; i++) {
      cards.push("Thank you, ${nameList[i}, for the wonderful ${eventName} gift!")
    }
    return cards
  }
  
  function countDown(positiveInteger) {
    let i = positiveInteger
    while (i > 0) {
      console.log(i)
      i--
    }
  }