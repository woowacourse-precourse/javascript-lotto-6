import Validate from "./Validate.js";
import ErrorMessages from "./Error.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessages.invalidInput("로또 번호는 6개여야 합니다."));
    }
    if (!Validate.isLottoNumbersFormat(numbers)) {
      throw new Error(ErrorMessages.lottoFormatError);
    }
  }

  #sortNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }

  printLottoNumbers() {
    const str = this.#numbers.join(", "); // 로또 번호 배열을 쉼표와 공백으로 구분하여 문자열로 변환합니다.
    MissionUtils.Console.print(`[${str}]`); // 문자열을 대괄호로 묶고 출력합니다.
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
