import {  LOTTO_PRIZE } from '../constant/constant.js';
import { PRIZE_MESSAGE } from '../constant/mesaageFormat.js';

class Result {
  #prizeCount;
  #resultMessages;
  #totalPrize;

  constructor(userLottos, winLotto, bonusLotto) {
    this.userLottos = userLottos;
    this.winLotto = winLotto;
    this.bonusLotto = bonusLotto;
    this.#prizeCount = this.#initializePrizeCount();
    this.#setResults();
  }

  #initializePrizeCount() {
    return {
      firstPrize: 0,
      secondPrize: 0,
      thirdPrize: 0,
      fourthPrize: 0,
      fifthPrize: 0,
    };
  }

  getTotalPrize() {
    return this.#totalPrize;
  }

  #setTotalPrize() {
    const { firstPrize, secondPrize, thirdPrize, fourthPrize, fifthPrize } = this.#prizeCount;
    const totalPrize =
      firstPrize * LOTTO_PRIZE.firstPrize +
      secondPrize * LOTTO_PRIZE.secondPrize +
      thirdPrize * LOTTO_PRIZE.thirdPrize +
      fourthPrize * LOTTO_PRIZE.fourthPrize +
      fifthPrize * LOTTO_PRIZE.fifthPrize;

    this.#totalPrize = totalPrize;
  }

  #setResults() {
    this.userLottos.forEach((userLotto) => {
      const { matchedCount, hasBonusNumber } = this.#calculateMatchResult(userLotto);
      this.#calculatePrize(matchedCount, hasBonusNumber);
    });
    this.#setResultMessages();
    this.#setTotalPrize();
  }

  getResultMessages() {
    return this.#resultMessages;
  }

  #setResultMessages() {
    const prizeInfo = [
      { count: this.#prizeCount.fifthPrize, message: PRIZE_MESSAGE.fifth },
      { count: this.#prizeCount.fourthPrize, message: PRIZE_MESSAGE.fourth },
      { count: this.#prizeCount.thirdPrize, message: PRIZE_MESSAGE.third },
      { count: this.#prizeCount.secondPrize, message: PRIZE_MESSAGE.second },
      { count: this.#prizeCount.firstPrize, message: PRIZE_MESSAGE.first },
    ];

    this.#resultMessages = prizeInfo.map(({ count, message }) => `${message} - ${count}개`);
  }

  #calculateMatchResult(userLotto) {
    const matchedNumbers = userLotto.filter((number) => this.winLotto.includes(number));
    const matchedCount = matchedNumbers.length;
    const hasBonusNumber = userLotto.includes(this.bonusLotto);

    return { matchedCount, hasBonusNumber };
  }

  #calculatePrize(matchedCount, hasBonusNumber) {
    if (matchedCount === 6) {
      this.#prizeCount.firstPrize += 1;
    } else if (matchedCount === 5 && hasBonusNumber) {
      this.#prizeCount.secondPrize += 1;
    } else if (matchedCount === 5 && !hasBonusNumber) {
      this.#prizeCount.thirdPrize += 1;
    } else if (matchedCount === 4) {
      this.#prizeCount.fourthPrize += 1;
    } else if (matchedCount === 3) {
      this.#prizeCount.fifthPrize += 1;
    }
  }
}

export default Result;
