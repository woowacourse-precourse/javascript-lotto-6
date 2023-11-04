class LottoTicket {
  #purchaseAmount;

  constructor(inputValue) {
    this.#validate(inputValue);
    this.#purchaseAmount = inputValue;
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
}

export default LottoTicket;
