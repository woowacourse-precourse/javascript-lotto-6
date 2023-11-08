function compareNumber(pickedWinningNumber, eachLottoTicket, matchCount) {
    for (let i = 0; i < 6; i++) {
        if (pickedWinningNumber == eachLottoTicket[i]) {
            matchCount++;
        }
    }
    return matchCount;    
}

export default compareNumber;
