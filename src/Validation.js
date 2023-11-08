const Validation = {
  /**
   * @param {number} number
   * @returns {boolean}
   */
  isNaturalNumber: (number) => number >= 1 && number % 1 === 0,

  /**
   * @param {number} number
   * @returns {boolean}
   */
  isInRange: (number) => number >= 1 && 45,

  /**
   * @param {number} number
   */
  validateLottoNumber: (number) => {
    if (!Validation.isNaturalNumber(number)) {
      throw new Error("[ERROR] 로또 번호는 1 이상의 정수만 입력해 주세요.");
    }
    if (!Validation.isInRange(number)) {
      throw new Error("[ERROR] 1이상 45 이하의 로또 번호를 입력해 주세요.");
    }
  },

  /**
   * @param {number[]} numbers
   * @returns {boolean}
   */
  isDuplicate: (numbers) => new Set(numbers).size !== numbers.length,

  /**
   * @param {number[]} numbers
   */
  validateLottoNumbers: (numbers) => {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개입니다.");
    }
    if (this.isDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호는 6개입니다.");
    }
    numbers.forEach((number) => this.validateLottoNumber(number));
  },

  /**
   * @param {number[]} numbers
   * @param {number} bonus
   */
  validateLottoNumbersWithBonus: (numbers, bonus) => {
    const concattedNumber = [...numbers, bonus];

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개입니다.");
    }
    if (this.isDuplicate(concattedNumber)) {
      throw new Error("[ERROR] 로또 번호는 6개입니다.");
    }
    concattedNumber.forEach((number) =>
      Validation.validateLottoNumbers(number)
    );
  },

  /**
   * @param {number} money
   */
  validateMoney: (money) => {
    if (!Number.isSafeInteger(Number(money)) || money < 0) {
      throw new Error("[ERROR] 올바른 구입금액을 입력해 주세요.");
    }
  },
};
export default Validation;
