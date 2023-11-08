import { Console } from "@woowacourse/mission-utils";

class Output {
  printPurchaseQuantity(LottoQuantity) {
    Console.print(`${LottoQuantity}개를 구매했습니다.`);
  }

  printLottoTickets(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      Console.print(ticket.getNumbers());
    });
  }

  printWinningResult(results) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${results.three}개`);
    Console.print(`4개 일치 (50,000원) - ${results.four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.five}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.fiveBonus}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results.six}개`);
  }

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }
}

export default Output;
