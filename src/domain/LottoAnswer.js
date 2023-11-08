import Lotto from "../Lotto.js";
import LottoNumbersParser from "./LottoNumbersParser.js";
import { getPrizeFromCorrectCount } from "../constants/lotto.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

class LottoAnswer {
  // LottoAnswer 클래스는 정답을 담은 로또 객체(answerLotto) 하나와 보너스 번호 하나로 이루어짐
  #answerLotto;
  #bonusNumber;

  constructor(answerLotto, bonusNumber) {
    LottoAnswer.#validateIsLotto(answerLotto);
    this.#answerLotto = answerLotto;

    const parsedBonusNumber = LottoNumbersParser.parseSingle(bonusNumber);
    LottoAnswer.#validateNotInLottoAnswer(parsedBonusNumber, this.#answerLotto);
    this.#bonusNumber = parsedBonusNumber;
  }

  grade(lotto) {
    const result = LottoAnswer.#getLottoResult(lotto, this.#answerLotto, this.#bonusNumber);
    const { correctCount, isGotBonus } = result;

    return getPrizeFromCorrectCount({ correctCount, isGotBonus });
  }

  static #validateIsLotto(value) {
    if (!value instanceof Lotto) {
      throw new Error(ERROR_MESSAGE.hasNonLotto);
    }
  }

  static #validateNotInLottoAnswer(number, answerLotto) {
    if (answerLotto.has(number)) {
      throw new Error(ERROR_MESSAGE.duplicateBonusNumber);
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
