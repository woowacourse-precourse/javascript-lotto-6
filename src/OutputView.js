import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from './constants.js';

const OutputView = {
  printLottoPricePurchased(price) {
    const totalCounts = price / LOTTO_PRICE;
    Console.print(`\n${totalCounts}개를 구매했습니다.`);
  },

  printLottoNumbers(lottos) {
    for (const lottoNumbers of lottos) {
      Console.print(lottoNumbers);
    }
  },

  printResult(result) {
    Console.print('\n당첨 통계\n---');
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
