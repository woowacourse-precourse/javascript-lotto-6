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
    if (matchLottoCount.length === 6) this.#addPrize(1);
    if (matchLottoCount.length === 5 && isBonusMatch) this.#addPrize(2);
    if (matchLottoCount.length === 5 && !isBonusMatch) this.#addPrize(3);
    if (matchLottoCount.length === 4) this.#addPrize(4);
    if (matchLottoCount.length === 3) this.#addPrize(5);
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
}

export default LottoPrize;
