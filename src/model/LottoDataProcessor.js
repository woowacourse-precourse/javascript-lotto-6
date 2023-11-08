import RandomNumberGenerator from "../utils/RandomNumberGenerator";

class LottoDataProcessor {
  #random;
  #lottoResultArr;

  constructor() {
    this.#lottoResultArr = [];
    this.#random = new RandomNumberGenerator();
  }

  lottoResults(count) {
    for (let i = 0; i < count; i++) {
      this.#lottoResultArr.push(this.#random.generateRandomNumber(1, 45, 6));
    }
    return this.#lottoResultArr;
  }
}

export default LottoDataProcessor;
