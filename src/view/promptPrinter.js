import { Console } from '@woowacourse/mission-utils';
import paramType from '../lib/paramType/src/paramType.js';
import { UserInputError } from '../errors/UserInputErrors.js';
import { PRINT_MESSSAGE } from '../constants/message.js';

export default class PromptPrinter {
  userInputErrorMessage(error, _ = paramType(error, UserInputError)) {
    this.#onPrint(error.message);
  }

  purchaseCount(lottoCount, _ = paramType(lottoCount, 'number')) {
    this.#onPrint(PRINT_MESSSAGE.PURCHASE_LOTTO_COUNT_MASSAGE(lottoCount));
  }

  purchaseLottoInfo(lottoList, _1 = paramType(lottoList, Array)) {
    const lottoListText = [...lottoList].reduce((accString, lotto) => {
      const lottoString = this.#lottoTemplete(lotto);

      return (accString += `${lottoString}\n`);
    }, '');

    this.#onPrint(lottoListText);
  }

  #lottoTemplete(lotto, _ = paramType(lotto, Array)) {
    return `[${[...lotto].join(', ')}]`;
  }

  #onPrint(message, _ = paramType(message, 'string')) {
    Console.print(message);
  }
}
