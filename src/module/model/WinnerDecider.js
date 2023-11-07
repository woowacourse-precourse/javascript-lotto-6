import WinNumber from "./WinNumber.js";
import LottoGenerator from "./LottoGenerator.js";

class WinnerDecider {
  #winNumber;
  #lottoList;
  #score = {
    zero: 0,
    three: 0,
    four: 0,
    five: 0,
    bonus: 0,
    six: 0,
  };

  constructor(count, numbers, bonusNumber) {
    this.#generateLottoList(count);
    this.#generateWinNumber(numbers, bonusNumber);
    this.#decideWinner();
  }

  #generateWinNumber(numbers, bonusNumber) {
    this.#winNumber = new WinNumber(numbers, bonusNumber);
  }

  #generateLottoList(count) {
    const tmp = new LottoGenerator(count);
    this.#lottoList = tmp.lottoList;
  }

  #decideWinner() {
    let matchedNumberCount, matchedBonus;

    for (let i = 0; i < this.#lottoList.length; i += 1) {
      matchedNumberCount = this.#matchNumber(this.#lottoList[i]);
      matchedBonus = this.#matchBonus(this.#lottoList[i]);
      this.#checkWinner(matchedNumberCount, matchedBonus);
    }
  }

  #matchNumber(lotto) {
    let count = 0;

    for (let i = 0; i < 6; i += 1) {
      if (lotto.includes(this.#winNumber.numbers[i])) count += 1;
    }

    return count;
  }

  #matchBonus(lotto) {
    return lotto.includes(this.#winNumber.bonus) ? 1 : 0;
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
        if (bonus === 1) {
          this.#score.bonus += 1;
          break;
        }
        this.#score.five += 1;
        break;
      case 6 :
        this.#score.six += 1;
        break;
      default :
        this.#score.zero += 1;
        break;
    }
  }
}