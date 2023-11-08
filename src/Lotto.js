import Validate from "./Validate.js";
import ErrorMessages from "./Error.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessages.invalidInput("로또 번호는 6개여야 합니다."));
    }
    if (!Validate.isLottoNumbersFormat(numbers)) {
      throw new Error(ErrorMessages.lottoFormatError);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
