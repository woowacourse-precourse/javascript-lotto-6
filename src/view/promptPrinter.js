import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/paramType/src/paramType.js';
import { UserInputError } from '../errors/UserInputErrors.js';
import LottoReward from '../domains/LottoReward.js';
import krwCurrencyAsWonFormat from '../utils/krwCurrencyAsWonFormat.js';
import { GRADE, MATCHED_COUNT } from '../constants/lotto.js';

export default class PromptPrinter {
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
    this.#onPrint(this.#purchaseCountMessageTemplete(lottoCount));
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
      (drawDetailsString, [grade, count], idx, currentArray) => {
        const gradeMessage = this.#drawResultMessageTemplete({
          grade,
          count,
          idx,
          lastIdx: currentArray.length - 1,
        });
        return (drawDetailsString += gradeMessage);
      },
      '',
    );

    this.#onPrint(drawDetailsHTML);
  }

  profitRate(profitRate, _ = paramType(profitRate, 'string')) {
    const profitRateMessage = this.#profitRateMessageTemplete(profitRate);

    this.#onPrint(profitRateMessage);
  }

  #purchaseCountMessageTemplete(count, _ = paramType(count, 'number')) {
    return `\n${count}개를 구매했습니다.`;
  }

  #lottoTemplete(lotto, _ = paramType(lotto, Array)) {
    return `[${[...lotto].join(', ')}]`;
  }

  #drawResultMessageTemplete(
    { grade, count, idx, lastIdx },
    _0 = paramType(grade, 'string'),
    _1 = paramType(count, 'number'),
    _2 = paramType(idx, 'number'),
    _3 = paramType(lastIdx, 'number'),
  ) {
    if (this.#isSecondGradeWithBonusNumber(grade)) {
      return `${PromptPrinter.GRADE_CORRECT_COUNT[grade]}개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`;
    }

    return `${this.#insertLineAlignOnlyFirstIndex(idx)}${
      PromptPrinter.GRADE_CORRECT_COUNT[grade]
    }개 일치 (${krwCurrencyAsWonFormat(
      LottoReward.GRADE_PRIZE[grade],
    )}) - ${count}개${this.#insertLineAlignNotLastIndex(idx, lastIdx)}`;
  }

  #profitRateMessageTemplete(profitRate, _ = paramType(profitRate, 'string')) {
    return `총 수익률은 ${profitRate}%입니다.`;
  }

  #isSecondGradeWithBonusNumber(grade, _ = paramType(grade, 'string')) {
    return grade === String(GRADE.SECOND);
  }

  #insertLineAlignOnlyFirstIndex(idx, _ = paramType(idx, 'number')) {
    const START_INDEX = 0;
    if (idx === START_INDEX) return '\n';
    return '';
  }

  #insertLineAlignNotLastIndex(
    idx,
    lastIdx,
    _0 = paramType(idx, 'number'),
    _1 = paramType(lastIdx, 'number'),
  ) {
    if (idx === lastIdx) return '';
    return '\n';
  }

  #onPrint(message, _ = paramType(message, 'string')) {
    Console.print(message);
  }
}
