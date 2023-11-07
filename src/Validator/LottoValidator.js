import { LOTTO_SETTINGS } from "../config/gameSetting";

export default class LottoValidator {
  static validateNumbers(numbers) {
    this.#validateSize(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
  }

  static #validateSize(numbers) {
    if (numbers.length !== LOTTO_SETTINGS.NUMBERS_PER_TICKET) {
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBERS_PER_TICKET}개여야 합니다.`
      );
    }
  }

  static #validateDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new LottoError(`중복된 번호가 있습니다.`);
    }
  }

  static #validateRange(numbers) {
    const isAnyNumberInvalid = numbers.some(
      (number) =>
        number < LOTTO_SETTINGS.NUMBER_RANGE.MIN ||
        number > LOTTO_SETTINGS.NUMBER_RANGE.MAX
    );

    if (isAnyNumberInvalid) {
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBER_RANGE.MIN}이상 ${LOTTO_SETTINGS.NUMBER_RANGE.MAX}이하여야 합니다.`
      );
    }
  }
}
