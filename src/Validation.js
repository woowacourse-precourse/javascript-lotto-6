class Validation {
  static validateInputEmpty(input) {
    if (input === '') {
      throw new Error('[ERROR] 입력이 없습니다.');
    }
  }

  static validateInputNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error('[ERROR] 입력이 숫자가 아닙니다.');
    }
  }

  static validateInputZeroOrLess(input) {
    if (input <= 0) {
      throw new Error('[ERROR] 입력이 0 이하입니다');
    }
  }

  static validateInputThousands(input) {
    if (input % 1000 !== 0) {
      throw new Error('[ERROR] 입력이 1,000원 단위가 아닙니다.');
    }
  }

  static validateInputHasCommas(input) {
    if (!input.includes(',')) {
      throw new Error('[ERROR] 입력이 쉼표로 구분되지 않습니다.');
    }
  }

  static validateInputLength(input, count) {
    if (input.length !== count) {
      throw new Error(`[ERROR] 입력이 ${count}개가 아닙니다.`);
    }
  }

  static validateInputOutOfLottoRange(input) {
    if (input < 1 || input > 45) {
      throw new Error('[ERROR] 입력이 1 ~ 45 사이가 아닙니다');
    }
  }

  static validateInputDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error('[ERROR] 입력에 중복된 값이 있습니다.');
    }
  }

  static validateInputDuplicateWinningNumbers(input, winningNumbers) {
    if (winningNumbers.includes(input)) {
      throw new Error('[ERROR] 입력이 당첨 번호와 중복되는 값입니다.');
    }
  }
}

export default Validation;
