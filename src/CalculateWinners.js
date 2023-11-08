class CalculateWinners {
  constructor() {
    this.countWinners = { 3: 0, 4: 0, 5: 0, '5+1': 0, 6: 0 };
  }
  countMatchingNumbers(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number)).length;
  }

  increaseWinners(numberEqual, haveBonus) {
    switch (numberEqual) {
      case 5:
        haveBonus ? this.countWinners['5+1']++ : this.countWinners[5]++;
        break;
      case 3:
      case 4:
      case 6:
        this.countWinners[numberEqual]++;
        break;
      default:
        break;
    }
  }

  manageWinners(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const numberEqual = this.countMatchingNumbers(lotto.numbers, winningNumbers);
      const haveBonus = numberEqual === 5 && lotto.numbers.includes(bonusNumber);
      this.increaseWinners(numberEqual, haveBonus);
    });

    return this.countWinners;
  }
}

export default CalculateWinners;
