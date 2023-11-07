export default class LottoValidator {
  constructor(setting) {
    this.setting = setting;
  }

  validateNumbers(numbers) {
    this.#validateSize(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
  }

  #validateSize(numbers) {
    if (numbers.length !== this.setting.NUMBERS_PER_TICKET) {
      throw new LottoError(
        `로또 번호는 ${this.setting.NUMBERS_PER_TICKET}개여야 합니다.`
      );
    }
  }

  #validateDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new LottoError(`중복된 번호가 있습니다.`);
    }
  }

  #validateRange(numbers) {
    const isAnyNumberInvalid = numbers.some(
      (number) =>
        number < this.setting.NUMBER_RANGE.MIN ||
        number > this.setting.NUMBER_RANGE.MAX
    );

    if (isAnyNumberInvalid) {
      throw new LottoError(
        `로또 번호는 ${this.setting.NUMBER_RANGE.MIN}이상 ${this.setting.NUMBER_RANGE.MAX}이하여야 합니다.`
      );
    }
  }
}
