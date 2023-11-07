import { Console } from "@woowacourse/mission-utils";
import { message } from "../constants.js";

const outputView = {
  /* lottos: 로또 번호가 담긴 배열 */
  printPurchasedLottos: function (lottos) {
    Console.print(lottos.length + message.YOU_BUY);
    lottos.forEach((lotto) => Console.print(`[${lotto.join(", ")}]`));
  },

  /* matches: 5등부터 1등까지 일치하는 개수가 담긴 배열 */
  printWinningStatistics: function (matches) {
    Console.print(message.WINNING_STATISTICS);

    let result = [];
    result.push(`${message.THREE_MATCHES + matches[0]}개`);
    result.push(`${message.FOUR_MATCHES + matches[1]}개`);
    result.push(`${message.FIVE_MATCHES + matches[2]}개`);
    result.push(`${message.FIVE_AND_BOUNUS_MATCHES + matches[3]}개`);
    result.push(`${message.SIX_MATCHES + matches[4]}개`);

    Console.print(result.join("\n"));
  },

  printTotalReturn: function (totalReturn) {
    Console.print(`${message.TOTAL_RETURN}은 ${totalReturn}%입니다.`);
  },
};

export default outputView;
