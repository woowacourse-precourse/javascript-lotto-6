class MatchNumber {
  constructor(userLottoNumbers) {
    this.userLottoNumbers = userLottoNumbers;
  }

  findMatchingNumbers(winnings) {
    return this.userLottoNumbers.filter((lotto) => winnings.includes(lotto)).length;
  }

  findMatchingBonus(bonus) {
    return this.userLottoNumbers.includes(bonus);
  }

  printUserLottoNumbers() {
    return this.userLottoNumbers;
  }
}

export default MatchNumber;
