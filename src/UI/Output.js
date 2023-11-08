import { Console } from "@woowacourse/mission-utils";

class Output {
  boughtTickets(lottoTickets, count) {
    Console.print(`${count}개를 구매했습니다.`);
    lottoTickets.forEach(lottoTicket => {
      Console.print(`[${lottoTicket.join(', ')}]`);
    });
  }

  winningResults(winningResult) {
    const prizeMoney = ['5,000', '50,000', '1,500,000', '30,000,000', '2,000,000,000'];
    const matchCountList = [3, 4, 5, 5, 6];
    const reversedWinningResult = [...winningResult].reverse();
    reversedWinningResult.forEach((result, index) => {
      let bonusText = '';
      if (index === 3) {
        bonusText = ', 보너스 볼 일치';
      }
      Console.print(`${matchCountList[index]}개 일치${bonusText} (${prizeMoney[index]}원) - ${result}개`)
    });
  }

  profitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

