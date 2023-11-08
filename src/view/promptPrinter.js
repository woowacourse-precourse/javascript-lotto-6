import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/paramType/src/paramType.js';
import { UserInputError } from '../errors/UserInputErrors.js';
import { PRINT_MESSSAGE } from '../constants/message.js';
import LottoReward from '../domains/LottoReward.js';
import krwCurrencyAsWonFormat from '../utils/krwCurrencyAsWonFormat.js';
import { GRADE, MATCHED_COUNT } from '../constants/lotto.js';

export default class PromptPrinter {
  BONUS_NUMBER_CORRECT_GRADE = '2';
  static GRADE_CORRECT_COUNT = {
    [GRADE.FIRST]: MATCHED_COUNT.SIX,
    [GRADE.SECOND]: MATCHED_COUNT.FIVE_WITH_BONUS,
    [GRADE.THIRD]: MATCHED_COUNT.FIVE,
    [GRADE.FOURTH]: MATCHED_COUNT.FOUR,
    [GRADE.FIFTH]: MATCHED_COUNT.THREE,
  };

  userInputErrorMessage(error, _ = paramType(error, UserInputError)) {
    this.#onPrint(error.message);
  }

  purchaseCount(lottoCount, _ = paramType(lottoCount, 'number')) {
    this.#onPrint(PRINT_MESSSAGE.PURCHASE_LOTTO_COUNT_MASSAGE(lottoCount));
  }

  purchaseLottoInfo(lottoList, _ = paramType(lottoList, Array)) {
    const lottoListHTML = [...lottoList].reduce((accString, lotto) => {
      const lottoNumbers = this.#lottoTemplete(lotto);

      return (accString += `${lottoNumbers}\n`);
    }, '');

    this.#onPrint(lottoListHTML);
  }

  drawResult(result, _ = paramType(result, Object)) {
    const drawDetailsHTML = Object.entries(result).reduce(
      (drawDetailsString, [grade, count]) => {
        const gradeMessage = this.#getLottoGradeMessageTemplete(grade, count);
        return (drawDetailsString += gradeMessage);
      },
      '',
    );

    this.#onPrint(drawDetailsHTML);
  }

  profitRate(profitRate, _ = paramType(profitRate, 'string')) {
    this.#onPrint(`총 수익률은 ${profitRate}%입니다.`);
  }

  #getLottoGradeMessageTemplete(grade, count) {
    if (grade === this.BONUS_NUMBER_CORRECT_GRADE) {
      return `${PromptPrinter.GRADE_CORRECT_COUNT[grade]}개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`;
    }

    return `${
      PromptPrinter.GRADE_CORRECT_COUNT[grade]
    }개 일치 (${krwCurrencyAsWonFormat(
      LottoReward.GRADE_PRIZE[grade],
    )}) - ${count}개\n`;
  }

  #lottoTemplete(lotto, _ = paramType(lotto, Array)) {
    return `[${[...lotto].join(', ')}]`;
  }

  #onPrint(message, _ = paramType(message, 'string')) {
    Console.print(message);
  }
}
