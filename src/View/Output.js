import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../util/Constants";

class Output {
  printPurchaseQuantity(LottoQuantity) {
    Console.print(`${LottoQuantity}개를 구매했습니다.`);
  }

  printLottoTickets(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      const ticketString = ticket
        .getNumbers()
        .map((number) => number.toString())
        .join(", ");

      Console.print(`[${ticketString}]`);
    });
  }

  printWinningResult(results) {
    Console.print(MESSAGE.WINNING_RESULT);
    Console.print("---");
    Console.print(`${MESSAGE.THREE_MATCH}${results.three}개`);
    Console.print(`${MESSAGE.FOUR_MATCH}${results.four}개`);
    Console.print(`${MESSAGE.FIVE_MATCH}${results.five}개`);
    Console.print(
      `${MESSAGE.FIVE_BONUS_MATCH}${results.fiveBonus}개`
    );
    Console.print(`${MESSAGE.SIX_MATCH}${results.six}개`);
  }

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  printErrorMesage(error) {
    Console.print(error);
  }
}

export default Output;
