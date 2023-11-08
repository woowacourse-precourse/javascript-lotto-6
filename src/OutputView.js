import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE, MESSAGES } from './constants.js';

const OutputView = {
  printLottoPricePurchased(price) {
    const totalCounts = price / LOTTO_PRICE;
    Console.print(`\n${totalCounts}${MESSAGES.PURCHASE_MESSAGE_TEMPLATE}`);
  },

  printLottoNumbers(lottos) {
    for (const lottoNumbers of lottos) {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    }
  },

  printResult(result) {
    Console.print(MESSAGES.RESULT_HEADER);
    for (const key in result) {
      const { prize, count } = result[key];
      Console.print(`${key} (${prize.toLocaleString()}원) - ${count}개`);
    }
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },

  printErrorMessage(message) {
    Console.print(`${message}\n`);
  },
};

export default OutputView;
