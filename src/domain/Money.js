export class Money {
  /**
   * @type {number}
   *
   */
  #amount;

  /**
   *
   * @param {number} amount
   */
  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  /**
   *
   * @return {boolean}
   */
  get isZero() {
    return this.#amount === 0;
  }

  /**
   *
   * @param {number} amount
   * @description Money 객체의 잔액에 돈 추기
   * @return {void}
   */
  add(amount) {
    const sum = this.#amount + amount;
    //항상 음수인지 검증해 이상한 데이터 안들어오게
    this.#validateAmount(sum);
    this.#amount = sum;
  }

  /**
   *
   * @param {number} amount
   * @description Money 객체의 잔액에 돈 빼기
   * @return {void}
   */
  subtract(amount) {
    const sum = this.#amount - amount;
    //항상 음수인지 검증해 이상한 데이터 안들어오게
    this.#validateAmount(sum);
    this.#amount = sum;
  }

  /**
   *
   * @param {number} amount
   * @return {void}
   */

  #validate(amount) {
    //1000원으로 나누어떨어지지 않을 경우
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000원 단위로 입력되어야합니다.");
    }
  }

  #validateAmount() {
    if (this.#amount < 0) {
      throw new Error("[ERROR] 잔액은 0 미만이 될 수 없음");
    }
  }
}
