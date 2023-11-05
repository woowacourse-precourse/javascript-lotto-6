import { MissionUtils } from '@woowacourse/mission-utils';
import { checkLength, checkDuplicates, checkLottoNumber } from "./validations/lottoNumberValidation";
import { checkBonusNumber, checkBonusDuplicates } from "./validations/bonusNumberValidation";
import { errorMessage } from "./constants/messages";
import { lottoCount } from "./constants/constants";

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

  getBonus(number) {
    this.#validateBonus(number);
    this.bonus = number;
  }

  #validateBonus(number) {
    if (checkBonusNumber(number)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (checkBonusDuplicates(this.#numbers, number)) {
      throw new Error(errorMessage.BONUS_DUPLICATES);
    }
  }

  printLottoNumbers() {
    MissionUtils.Console.print(`[${this.#numbers.join(', ')}]`);
  }

  compareLotto(winningLotto) {
    const compareCount = this.#numbers.filter(number =>
      winningLotto.#numbers.includes(number),
    );
    if (
      compareCount.length === lottoCount.THIRD &&
      this.#numbers.includes(winningLotto.bonus)
    ) {
      return lottoCount.SECOND;
    }
    return compareCount.length;
  }
}

export default Lotto;
