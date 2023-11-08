import { Console } from "@woowacourse/mission-utils";

const FIRST_PRIZE = '2000000000';
const SECOND_PRIZE = '30000000';
const THIRD_PRIZE = '1500000';
const FOURTH_PRIZE = '50000';
const FIFTH_PRIZE = '5000';
const THREE_MATCH = 3;
const FOUR_MATCH = 4;
const FIVE_MATCH = 5;
const SIX_MATCH = 6;
const BONUS_MATCH_INDEX = 3;

class Output {
  boughtTickets(lottoTickets, count) {
    Console.print(`${count}개를 구매했습니다.`);
    lottoTickets.forEach(lottoTicket => {
      Console.print(`[${lottoTicket.join(', ')}]`);
    });
  }

  winningResults(winningResult) {
    const prizeMoney = [FIFTH_PRIZE, FOURTH_PRIZE, THIRD_PRIZE, SECOND_PRIZE, FIRST_PRIZE];
    const matchCountList = [THREE_MATCH, FOUR_MATCH, FIVE_MATCH, FIVE_MATCH, SIX_MATCH];
    const reversedWinningResult = [...winningResult].reverse();
    reversedWinningResult.forEach((result, index) => {
      let bonusText = '';
      if (index === BONUS_MATCH_INDEX) {
        bonusText = ', 보너스 볼 일치';
      }
      Console.print(`${matchCountList[index]}개 일치${bonusText} (${prizeMoney[index]}원) - ${result}개`)
    });
  }

  profitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Output;
