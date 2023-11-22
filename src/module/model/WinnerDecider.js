class WinnerDecider {
  #winNumber;
  #bonus;
  #lottoList;
  #score = {
    zero: 0,
    three: 0,
    four: 0,
    five: 0,
    bonus: 0,
    six: 0,
  };

  constructor(winNumber, bonus, lottoList) {
    this.#winNumber = winNumber;
    this.#bonus = bonus;
    this.#lottoList = lottoList;
    this.#countAllMatchedNumber();
  }

  #countAllMatchedNumber() {
    let count = 0, bonus = 0;

    for (let i = 0; i < this.#lottoList.length; i += 1) {
      count = this.#countMatchedNumber(i);
      bonus = this.#matchBonus(this.#lottoList[i].numbers);
      this.#checkWinner(count, bonus);
    }
  }

  #countMatchedNumber(i) {
    let count = 0;

    this.#lottoList[i].numbers.forEach((e) => {
      if (this.#winNumber.includes(e)) count += 1;
    });

    return count;
  }

  #matchBonus(lotto) {
    return lotto.includes(this.#bonus) ? 1 : 0;
  }

  #checkWinner(number, bonus) {
    switch (number) {
      case 3 :
        this.#score.three += 1;
        break;
      case 4 :
        this.#score.four += 1;
        break;
      case 5 :
        bonus === 1 ? this.#score.bonus += 1 : this.#score.five += 1;
        break;
      case 6 :
        this.#score.six += 1;
        break;
      default :
        this.#score.zero += 1;
        break;
    }
  }

  get score() {
    return this.#score;
  }
}

export default WinnerDecider;
