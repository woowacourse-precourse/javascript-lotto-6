import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/paramType/src/paramType.js';
import { UserInputError } from '../errors/UserInputErrors.js';
import { PRINT_MESSSAGE } from '../constants/message.js';
import LottoReward from '../domains/LottoReward.js';
import krwCurrencyAsWonFormat from '../utils/krwCurrencyAsWonFormat.js';

export default class PromptPrinter {
  static GRADE_CORRECT_COUNT = {
    1: 6,
    2: 5,
    3: 5,
    4: 4,
    5: 3,
  };

  userInputErrorMessage(error, _ = paramType(error, UserInputError)) {
    this.#onPrint(error.message);
  }

  purchaseCount(lottoCount, _ = paramType(lottoCount, 'number')) {
    this.#onPrint(PRINT_MESSSAGE.PURCHASE_LOTTO_COUNT_MASSAGE(lottoCount));
  }

  purchaseLottoInfo(lottoList, _ = paramType(lottoList, Array)) {
    const lottoListText = [...lottoList].reduce((accString, lotto) => {
      const lottoString = this.#lottoTemplete(lotto);

      return (accString += `${lottoString}\n`);
    }, '');

    this.#onPrint(lottoListText);
  }

  drawResult(result, _ = paramType(result, Object)) {
    const resultText = Object.entries(result).reduce(
      (accString, [grade, count]) => {
        if (grade === '2') {
          return (accString += `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`);
        }
        return (accString += `${
          PromptPrinter.GRADE_CORRECT_COUNT[grade]
        }개 일치 (${krwCurrencyAsWonFormat(
          LottoReward.GRADE_PRIZE[grade],
        )}) - ${count}개\n`);
      },
      '',
    );

    this.#onPrint(resultText);
  }

  profitRate(profitRate, _ = paramType(profitRate, 'string')) {
    this.#onPrint(`총 수익률은 ${profitRate}%입니다.`);
  }

  #lottoTemplete(lotto, _ = paramType(lotto, Array)) {
    return `[${[...lotto].join(', ')}]`;
  }

  #onPrint(message, _ = paramType(message, 'string')) {
    Console.print(message);
  }
}
