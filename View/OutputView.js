import { Console } from "@woowacourse/mission-utils";
import { NUMBER } from "../utils/Constant.js";

const MESSAGE = {
  OUTPUT_LOTTO_MATCH_RESULT_STATISTIC: "\n당첨 통계\n---",
  // OUTPUT_LOTTO
};

const OutputView = {
  outputRandomLottoNumbersList(RandomLottoNumbersList) {
    RandomLottoNumbersList.forEach(lottoList => {
      Console.print(`[${lottoList.join(', ')}]`);
    });
  },
  
  changeNumberToWon(price) {
    const priceString = price.toString();
    let won = '';
    let count = 0;
    for (let i = priceString.length-1; i >= 0; i--) {
      won = priceString[i] + won;
      count += 1;
      if (count % 3 === 0 && i !== 0) won = ',' + won;
    };
    return won;
  },

  outputLottoMatchResult(matchResult, incomeResult) {
    console.log(MESSAGE.OUTPUT_LOTTO_MATCH_RESULT_STATISTIC);
    for (let i = NUMBER.MIN_MATCH_NUMBER; i <= NUMBER.MAX_MATCH_NUMBER; i++) {
      if (matchResult[i] === undefined) matchResult[i] = [0, 0];
      const [count, bonusCount] = matchResult[i];
      if (NUMBER.CHECK_MATCH_BONUS_NUMBER.includes(i)) {
        Console.print(`${i}개 일치 (${this.changeNumberToWon(NUMBER.MATCH_NUMBER_PRICE[i])})원 - ${count-bonusCount}개`)
        Console.print(`${i}개 일치, 보너스 볼 일치 (${this.changeNumberToWon(NUMBER.MATCH_BONUS_NUMBER_PRICE[i])})원 - ${bonusCount}개`);
        continue
      };
      Console.print(`${i}개 일치 (${this.changeNumberToWon(NUMBER.MATCH_NUMBER_PRICE[i])})원 - ${count}개`)
    };
    Console.print(`총 수익률은 ${incomeResult}%입니다.`)
  },
};

export default OutputView;