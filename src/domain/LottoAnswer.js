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
    this.#validateBonusNumber(parsedBonusNumber);
    this.#bonusNumber = parsedBonusNumber;
  }

  grade(lotto) {
    const { correctCount, isGotBonus } = this.#getLottoResult(lotto);
    if (correctCount === 5 && isGotBonus) return "2등";
    const PRIZE_FOR_COUNT = {
      6: "1등",
      5: "3등",
      4: "4등",
      3: "5등",
    };
    return PRIZE_FOR_COUNT[correctCount];
  }

  #getLottoResult(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const answerNumbers = this.#answerLotto.getNumbers();

    return {
      correctCount: LottoAnswer.#countIntersection(lottoNumbers, answerNumbers),
      isGotBonus: lottoNumbers.includes(this.#bonusNumber),
    };
  }

  static #countIntersection(array, targetArray) {
    return array.reduce((acc, element) => (targetArray.includes(element) ? acc + 1 : acc), 0);
  }

  static #validateIsLotto(value) {
    if (!value instanceof Lotto) {
      throw new Error("[ERROR] 로또 객체가 아닌 값이 인자로 들어왔습니다.");
    }
  }

  static #parseSingleLottoNumber(input) {
    return LottoNumbersParser.parse(input)[0];
  }

  #validateBonusNumber(number) {
    validateNumberInRange(number, 1, 45);
    this.#validateNotInLottoAnswer(number);
  }

  #validateNotInLottoAnswer(number) {
    if (this.#answerLotto.has(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 겹칠 수 없습니다.");
    }
  }
}

export default LottoAnswer;
