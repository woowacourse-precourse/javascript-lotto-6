import Lotto from "../Lotto.js";
import { lottoNumbersParser } from "./lottoNumbersParser.js";
import { validateNumberInRange } from "../utils/validators.js";

class LottoAnswer {
  #lottoAnswer;
  #bonusNumber;

  constructor(lottoAnswer, bonusNumber) {
    LottoAnswer.#validateIsLotto(lottoAnswer);
    this.#lottoAnswer = lottoAnswer;
    const parsedBonusNumber = LottoAnswer.#parseBonusNumber(bonusNumber);
    this.#validateBonusNumber(parsedBonusNumber);
    this.#bonusNumber = parsedBonusNumber;
  }

  static #validateIsLotto(value) {
    if (!value instanceof Lotto) {
      throw new Error("[ERROR] 로또 객체가 아닌 값이 인자로 들어왔습니다.");
    }
  }

  static #parseBonusNumber(input) {
    return lottoNumbersParser.parse(input)[0];
  }

  #validateBonusNumber(number) {
    validateNumberInRange(number, 1, 45);
    this.#validateNotInLottoAnswer(number);
  }

  #validateNotInLottoAnswer(number) {
    if (this.#lottoAnswer.has(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 겹칠 수 없습니다.");
    }
  }
}

export default LottoAnswer;
