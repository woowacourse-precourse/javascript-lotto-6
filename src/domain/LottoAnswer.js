import Lotto from "../Lotto.js";
import LottoNumbersParser from "./LottoNumbersParser.js";
import { validateNumberInRange } from "../utils/validators.js";

class LottoAnswer {
  #answerLotto;
  #bonusNumber;

  constructor(answerLotto, bonusNumber) {
    LottoAnswer.#validateIsLotto(answerLotto);
    this.#answerLotto = answerLotto;
    const parsedBonusNumber = LottoAnswer.#parseSingleLottoNumber(bonusNumber);
    LottoAnswer.#validateNotInLottoAnswer(parsedBonusNumber, this.#answerLotto);
    this.#bonusNumber = parsedBonusNumber;
  }

  grade(lotto) {
    const result = LottoAnswer.#getLottoResult(lotto, this.#answerLotto, this.#bonusNumber);
    const { correctCount, isGotBonus } = result;
    if (correctCount === 5 && isGotBonus) return "2등";
    const PRIZE_FOR_COUNT = {
      6: "1등",
      5: "3등",
      4: "4등",
      3: "5등",
    };
    return PRIZE_FOR_COUNT[correctCount];
  }

  static #validateIsLotto(value) {
    if (!value instanceof Lotto) {
      throw new Error("[ERROR] 로또 객체가 아닌 값이 인자로 들어왔습니다.");
    }
  }

  static #parseSingleLottoNumber(input) {
    return LottoNumbersParser.parse(input)[0];
  }

  static #validateNotInLottoAnswer(number, answerLotto) {
    if (answerLotto.has(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 겹칠 수 없습니다.");
    }
  }

  static #getLottoResult(lotto, answerLotto, bonusNumber) {
    const lottoNumbers = lotto.getNumbers();
    const answerNumbers = answerLotto.getNumbers();

    return {
      correctCount: LottoAnswer.#countIntersection(lottoNumbers, answerNumbers),
      isGotBonus: lottoNumbers.includes(bonusNumber),
    };
  }

  static #countIntersection(array, targetArray) {
    return array.reduce((acc, element) => (targetArray.includes(element) ? acc + 1 : acc), 0);
  }
}

export default LottoAnswer;
