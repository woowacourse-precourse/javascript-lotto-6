class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = Number(amount);
  }

  #validate(amount) {
    if (!Number.isInteger(Number(amount))) {
      throw new Error('[ERROR] 금액에 숫자 이외의 다른 문자는 올수 없습니다.');
    }

    if (amount.length !== Number(amount).toString().length) {
      throw new Error('[ERROR] 0으로 시작하는 금액은 입력할 수 없습니다.');
    }

    if (Number(amount) < 1000) {
      throw new Error('[ERROR] 금액은 1000이상 이어야 합니다.');
    }

    if (Number(amount) % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1000단위 이어야 합니다.');
    }
  }

  getLottoCount() {
    return this.#amount / 1000;
  }
}

export default PurchaseAmount;
