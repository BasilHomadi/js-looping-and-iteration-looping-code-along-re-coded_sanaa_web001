// Code your solutions in this file
Function writeCards(nameList, eventName) {
  let cards = []
  for(let i = 0; i < nameList.length; i++) {
    cards.push("Thank you, ${nameList[i}, for the wonderful ${eventName} gift!")
  }
  return cards
}