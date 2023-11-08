import RandomNumberGenerator from './utils/RandomNumberGenerator.js';

class Issuer {
  #lottoCount;

  #tickets;

  constructor(inputValue) {
    const purchaseAmount = Number(inputValue);
    this.#validate(inputValue);
    this.#lottoCount = purchaseAmount / 1000;
    this.#generate();
  }

  #validate(purchaseAmount) {
    if (Number.isNaN(purchaseAmount)) {
      throw new Error('[ERROR] 구매 금액은 숫자여야 합니다.');
    }
    if (purchaseAmount < 1000) {
      throw new Error('[ERROR] 최소 구매 금액은 1000원입니다.');
    }
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 1000원 단위여야 합니다.');
    }
  }

  #generate() {
    const issuedLottoList = [];
    while (issuedLottoList.length < this.#lottoCount) {
      const sortedRandomNumbers = RandomNumberGenerator().sort((a, b) => a - b);
      issuedLottoList.push(sortedRandomNumbers);
    }
    this.#tickets = issuedLottoList;
  }

  get tickets() {
    return this.#tickets;
  }
}

export default Issuer;
