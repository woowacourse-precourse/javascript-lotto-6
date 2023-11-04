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
    return parseInt(this.#calcNumber / 1000, 10);
  }

  sortingNumber() {
    this.#calcNumber.sort((a, b) => a - b);
    return this.#calcNumber.join(', ');
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
}

export default LottoUtill;
