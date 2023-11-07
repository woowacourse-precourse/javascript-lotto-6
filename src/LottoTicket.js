import RandomNumberGenerator from './utils/RandomNumberGenerator.js';

class LottoTicket {
  #purchaseAmount;

  #totalIssueLotto;

  #lottoList;

  constructor(inputValue) {
    this.#validate(inputValue);
    this.#purchaseAmount = inputValue;
    this.#totalIssueLotto = this.#purchaseAmount / 1000;
    this.#generate();
  }

  #validate(inputValue) {
    const valueToNumber = Number(inputValue);
    if (Number.isNaN(valueToNumber)) {
      throw new Error('[ERROR] 구매 금액은 숫자여야 합니다.');
    }
    if (valueToNumber < 1000) {
      throw new Error('[ERROR] 최소 구매 금액은 1000원입니다.');
    }
    if (valueToNumber % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 1000원 단위여야 합니다.');
    }
    this.#purchaseAmount = valueToNumber;
  }

  #generate() {
    const issuedLottoList = [];
    while (issuedLottoList.length < this.#totalIssueLotto) {
      const sortedRandomNumbers = RandomNumberGenerator().sort((a, b) => a - b);
      issuedLottoList.push(sortedRandomNumbers);
    }
    this.#lottoList = issuedLottoList;
  }

  get lottoList() {
    return this.#lottoList;
  }
}

export default LottoTicket;
