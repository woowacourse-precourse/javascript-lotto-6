class LottoGame {
  constructor(price) {
    this.price = price;
    this.count = this.calculateLottoCount(price);
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = '';
    this.lottoPrize = 0;
    this.first = 0;
    this.seccond = 0;
    this.third = 0;
    this.fourth = 0;
    this.fifth = 0;
  }

  calculateLottoCount(price) {
    return price / 1000;
  }

  addLotto(lotto) {
    this.lottos.push(lotto);
  }

  addWinningNumbers(numberArray) {
    this.winningNumbers = numberArray.map(str => Number(str));
  }

  addBonusNumber(number) {
    this.bonusNumber = number;
  }

  calculateLottoResult() {
    const resultArray = this.lottos.map(lotto =>
      lotto.findMatchingNumbers(this.winningNumbers),
    );

    console.log(`리턴된 ${resultArray}`);

    resultArray.forEach(result => {
      switch (result.length) {
        case 3:
          this.fifth += 1;
          break;
        case 4:
          this.fourth += 1;
          break;
        case 5:
          this.checkBonusNumber(result);
          break;
        case 6:
          this.first += 1;
          break;
        default:
          break;
      }
    });
  }

  checkBonusNumber(result) {
    if (result.includes(this.bonusNumber)) {
      this.seccond += 1;
    } else {
      this.third += 1;
    }
  }
}

export default LottoGame;
