export default class Compare {
  #winningNumber;
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber.getNumbers();
    this.#bonusNumber = bonusNumber;
  }

  getMachedThreeNumber(boughtLottos) {
    let mached = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (matchedNumbers.length === 3) mached += 1;
    });

    return mached;
  }

  getMachedFourNumber(boughtLottos) {
    let mached = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (matchedNumbers.length === 4) mached += 1;
    });

    return mached;
  }

  getMachedFiveNumber(boughtLottos) {
    let mached = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (matchedNumbers.length === 5) mached += 1;
    });

    return mached;
  }

  getMachedBonusNumber(boughtLottos) {
    let mached = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (
        matchedNumbers.length === 5 &&
        lottoNumbers.includes(this.#bonusNumber)
      ) {
        mached += 1;
      }
    });

    return mached;
  }

  getMachedSixNumber(boughtLottos) {
    let mached = 0;

    boughtLottos.forEach((Lotto) => {
      const lottoNumbers = Lotto.getNumbers();
      const matchedNumbers = lottoNumbers.filter((number) =>
        this.#winningNumber.includes(number)
      );
      if (matchedNumbers.length === 6) mached += 1;
    });

    return mached;
  }

  getMatchedAllNumber(boughtLottos) {
    const result = [];

    result.push(this.getMachedThreeNumber(boughtLottos));
    result.push(this.getMachedFourNumber(boughtLottos));
    result.push(this.getMachedFiveNumber(boughtLottos));
    result.push(this.getMachedSixNumber(boughtLottos));
    result.push(this.getMachedBonusNumber(boughtLottos));
    return result;
  }
}
