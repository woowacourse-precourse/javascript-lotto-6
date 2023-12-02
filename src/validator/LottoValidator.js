import CustomError from '../utils/CustomError.js';
import { ERROR } from '../constants/messages.js';
import { NUMBERS } from '../constants/constants.js';

class LottoValidator {
  static validator(userLottoNumbers) {
    const validators = [
      this.#checkEmpty,
      this.#checkLength,
      this.#checkIsNumber,
      this.#checkDuplication,
      this.#checkRange,
    ];

    validators.forEach(validator => {
      validator(userLottoNumbers);
    });
  }

  static #checkEmpty(userLottoNumbers) {
    if (userLottoNumbers.length === 0) {
      throw new CustomError(ERROR.emptyAmountInput);
    }
  }

  static #checkLength(userLottoNumbers) {
    if (userLottoNumbers.length !== NUMBERS.lottoLength) {
      throw new CustomError(ERROR.invalidLength);
    }
  }

  static #checkIsNumber(userLottoNumbers) {
    userLottoNumbers.forEach(number => {
      if (Number.isNaN(Number(number))) {
        throw new CustomError(ERROR.notNumber);
      }
    });
  }

  static #checkDuplication(userLottoNumbers) {
    const removedDuplication = new Set(userLottoNumbers);

    if (userLottoNumbers.length !== removedDuplication.size) {
      throw new CustomError(ERROR.duplicatedNumber);
    }
  }

  static #checkRange(userLottoNumbers) {
    userLottoNumbers.forEach(number => {
      if (number > NUMBERS.maxAmount || number < NUMBERS.minNumber) {
        throw new CustomError(ERROR.invalidRange);
      }
    });
  }
}

export default LottoValidator;

// 3. 당첨 번호를 입력 받는 기능
// - 출력 문구 : `당첨 번호 6개를 쉼표(,)를 기준으로 1과 45 사이의 숫자를 입력해 주세요.`
// - 유효성 검사를 실행한다.
//     - 공백인지 확인한다.
//         -`[ERROR] 당첨 번호 6개를 입력해주세요.`
//     - 길이가 6이 맞는지 확인한다.
//         -`[ERROR] 6개의 숫자를 입력해주세요.`
//     - 숫자가 맞는지 확인한다.
//         -`[ERROR] 숫자를 입력해주세요.`
//     - 중복된 번호가 있는지 확인한다.
//         -`[ERROR] 중복되지 않은 숫자를 입력해주세요.`
//     - 1과 45사이의 숫자가 맞는지 확인한다.
//         -`[ERROR] 1과 45사이의 숫자를 입력해주세요.`
