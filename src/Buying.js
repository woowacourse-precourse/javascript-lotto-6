export default class Buying {
  #amount;

  constructor(amount) {
      this.#validate(amount);
      this.#amount = amount;
  }

  #validate(amount) {
      if (!this.isNotNaN(amount)) {
          throw new Error("[ERROR] 숫자를 입력해주세요.");
      }
      if (!this.isOver1000(amount)) {
          throw new Error("[ERROR] 1000원 이상의 금액을 입력해주세요.");
      }

      if (!this.isMultipleOf1000(amount)) {
          throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
      }
      this.#amount = amount;
  }

  isNotNaN(amount) {
      return !isNaN(amount);
  }

  isOver1000(amount) {
      return amount >= 1000;
  }

  isMultipleOf1000(amount) {
      return amount % 1000 === 0;
  }

  getAmount() {
      return this.#amount;
  }
}