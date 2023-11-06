class LottoGame {
  constructor(price) {
    this.validatePrice(price);
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

  validatePrice(price) {
    if (Number.isNaN(Number(price))) {
      throw Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
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

  calculateResultArray() {
    const resultArray = this.lottos.map(lotto => {
      return lotto.findMatchingNumbers(this.winningNumbers, this.bonusNumber);
    });
    return resultArray;
  }

  calculateLottoResult() {
    const resultArray = this.calculateResultArray();
    // console.log(`리턴된 ${resultArray}`);

    resultArray.forEach(result => {
      if (result.includes(this.bonusNumber) && result.length === 6) {
        this.checkBonusNumber(result);
      } else {
        const withoutBonus = result.filter(
          eachResult => eachResult !== this.bonusNumber,
        );
        switch (withoutBonus.length) {
          case 3:
            this.fifth += 1;
            break;
          case 4:
            this.fourth += 1;
            break;
          case 5:
            this.third += 1;
            break;
          case 6:
            this.first += 1;
            break;
          default:
            break;
        }
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

  calculateLottoPrize() {
    const prize =
      this.fifth * 5000 +
      this.fourth * 50000 +
      this.third * 1500000 +
      this.seccond * 30000000 +
      this.first * 2000000000;
    this.lottoPrize = prize;
  }

  calculateProfitability(price, prize) {
    return (prize / price) * 100;
  }
}

export default LottoGame;
