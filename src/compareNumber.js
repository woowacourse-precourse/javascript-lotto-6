function compareNumber(pickedWinningNumber, eachLottoTicket, matchCount) {
  let newMatchCount = matchCount;
  for (let i = 0; i < 6; i++) {
    if (pickedWinningNumber === eachLottoTicket[i]) {
      newMatchCount++;
    }
  }
  return newMatchCount;
}

export default compareNumber;
