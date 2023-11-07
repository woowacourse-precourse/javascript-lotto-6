import { MissionUtils } from '@woowacourse/mission-utils';
import { message } from '../Consts.js';
import totalReturn from './TotalReturn.js';

class Output {
  static printUserLottos(purchasedLottoArray) {
    MissionUtils.Console.print(
      `\n${purchasedLottoArray.length}개를 구매했습니다.`,
    );
    let output = '';
    purchasedLottoArray.forEach(lotto => {
      output += `[${lotto.join(', ')}]\n`;
    });
    MissionUtils.Console.print(output);
  }

  static printWinningStatistics(matchCount) {
    MissionUtils.Console.print(message.winningStatistics);
    MissionUtils.Console.print(
      `${message.threeMatches + matchCount.threeMatches}개\n` +
        `${message.fourMatches + matchCount.fourMatches}개\n` +
        `${message.fiveMatches + matchCount.fiveMatches}개\n` +
        `${message.fiveBonusMatches + matchCount.fiveBonusMatches}개\n` +
        `${message.sixMatches + matchCount.sixMatches}개`,
    );
  }

  static printTotalReturn(purchasedLottoAmount, matchCount) {
    const tempReturn = totalReturn(purchasedLottoAmount, matchCount);
    const formattedReturn = tempReturn.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    MissionUtils.Console.print(`총 수익률은 ${formattedReturn}%입니다.`);
  }
}

export default Output;
