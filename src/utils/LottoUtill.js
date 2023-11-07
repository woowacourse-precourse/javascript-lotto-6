import { LottoRate, utillConst } from '../constants/Constant.js';

class LottoUtill {
  #calcNumber;

  #staticObject;

  constructor(
    calcNumber,
    staticObject = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0,
    },
  ) {
    this.#calcNumber = calcNumber;
    this.#staticObject = staticObject;
  }

  howManyToBuy() {
    return utillConst.buyCalc(this.#calcNumber);
  }

  checkLottoCorrect(userNumber, winNumber, bonusNumber) {
    userNumber.forEach((lotto) => {
      const correctAmount = this.#compareWin(lotto, winNumber);
      if (correctAmount === 5) {
        this.#compareBonus(lotto, bonusNumber);
      }
      if (correctAmount >= 3 && correctAmount !== 5) {
        this.#staticObject[correctAmount] += 1;
      }
    });
    return this.#staticObject;
  }

  #compareWin(lotto, winNumber) {
    const count = [];
    lotto.forEach((number) => {
      if (winNumber.includes(number)) {
        count.push(true);
      }
    });
    return count.length;
  }

  #compareBonus(lotto, bonusNumber) {
    if (lotto.includes(bonusNumber)) {
      this.#staticObject.bonus += 1;
      return;
    }
    this.#staticObject[5] += 1;
  }

  getRate() {
    const earnMoney = Object.entries(this.#staticObject)
      .map((status) => this.#earnMoneyCheck(status))
      .reduce((earn, each) => earn + each);
    return utillConst.calcRate(earnMoney, this.#calcNumber);
  }

  #earnMoneyCheck(status) {
    if (status[1] !== 0) {
      return LottoRate[status[0]];
    }
    return 0;
  }
}

export default LottoUtill;
