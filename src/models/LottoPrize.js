import OPTION from '../constants/option.js';

class LottoPrize {
  #status;

  constructor() {
    this.#status = {
      firstPrizeCount: 0,
      secondPrizeCount: 0,
      thirdPrizeCount: 0,
      fourthPrizeCount: 0,
      fifthPrizeCount: 0,
    };
  }

  calculatePrize(matchLottoCount, isBonusMatch) {
    if (matchLottoCount === 6) this.#addPrize(1);
    if (matchLottoCount === 5 && isBonusMatch) this.#addPrize(2);
    if (matchLottoCount === 5 && !isBonusMatch) this.#addPrize(3);
    if (matchLottoCount === 4) this.#addPrize(4);
    if (matchLottoCount === 3) this.#addPrize(5);
  }

  #addPrize(prizeNumber) {
    if (prizeNumber === 1) this.#status.firstPrizeCount += 1;
    if (prizeNumber === 2) this.#status.secondPrizeCount += 1;
    if (prizeNumber === 3) this.#status.thirdPrizeCount += 1;
    if (prizeNumber === 4) this.#status.fourthPrizeCount += 1;
    if (prizeNumber === 5) this.#status.fifthPrizeCount += 1;
  }

  getStatus() {
    return this.#status;
  }

  static getPrizeAmount(status) {
    const prizeAmount =
      status.firstPrizeCount * OPTION.prize.firstPrizeAmount +
      status.secondPrizeCount * OPTION.prize.secondPrizeAmount +
      status.thirdPrizeCount * OPTION.prize.thirdPrizeAmount +
      status.fourthPrizeCount * OPTION.prize.fourthPrizeAmount +
      status.fifthPrizeCount * OPTION.prize.fifthPrizeAmount;

    return prizeAmount;
  }
}

export default LottoPrize;
