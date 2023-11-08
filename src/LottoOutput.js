import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from './Messages.js';


export function printLottoAmount(amount) {
  MissionUtils.Console.print(`\n${amount}${MESSAGES.LOTTO_BUY_AMOUNT_OUTPUT}`);
}

export function printLottoNumbers(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    MissionUtils.Console.print(`[${numbers[index].join(', ')}]`);
  }
}

export function printLottoStatistics(matchedCounts) {
  const winningCountData = {
    [MESSAGES.MATCH_THREE]: { text: "3개 일치 (5,000원)", price: 5000, value: 0 },
    [MESSAGES.MATCH_FOUR]: { text: "4개 일치 (50,000원)", price: 50000, value: 0 },
    [MESSAGES.MATCH_FIVE]: { text: "5개 일치 (1,500,000원)", price: 1500000, value: 0 },
    [MESSAGES.MATCH_BONUS]: { text: "5개 일치, 보너스 볼 일치 (30,000,000원)", price: 30000000, value: 0 },
    [MESSAGES.MATCH_SIX]: { text: "6개 일치 (2,000,000,000원)", price: 2000000000, value: 0 },
  };

  MissionUtils.Console.print(`\n${MESSAGES.LOTTO_STATISTICS}`);
  MissionUtils.Console.print('---');

  matchedCounts.forEach((count) => {
    if (winningCountData[count.toString()]) winningCountData[count.toString()].value += 1;
  });
  const results = Object.keys(winningCountData).sort().map(key => `${winningCountData[key].text} - ${winningCountData[key].value}개`);
  results.forEach(result => MissionUtils.Console.print(result));

  return winningCountData;
}

export function printProfitRate(amount, winningData) {
  const totalPrice = Object.keys(winningData).reduce((acc, key) => {
    return acc + (winningData[key].value * winningData[key].price);
  }, 0);
  const rate = ((totalPrice / amount) * 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
}