import { MissionUtils } from '@woowacourse/mission-utils';
import { checkLength, checkDuplicates, checkLottoNumber } from "./validations/lottoNumberValidation";
import { errorMessage } from "./constants/messages";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (checkLength(numbers)) {
      throw new Error(errorMessage.INVALID_LENGTH);
    }
    if (checkLottoNumber(numbers)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (checkDuplicates(numbers)) {
      throw new Error(errorMessage.HAS_DUPLICATES);
    }
  }

  printLottoNumbers() {
    MissionUtils.Console.print(`[${this.#numbers.join(', ')}]`);
  }
}

export default Lotto;
