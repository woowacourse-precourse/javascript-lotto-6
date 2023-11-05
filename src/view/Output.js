import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MSG } from "../constants/output.js";
import { MONEY_CONSTANT } from "../constants/game.js";

class Output {
  static printLotto(player) {
    const lottos = player.playerLottos;

    Console.print(`${lottos.length}${OUTPUT_MSG.BUYING_MSG}`);
    lottos.forEach((lotto) => Console.print(lotto.toString()));
  }

  static printResult(ranks, returnRate) {
    Console.print(OUTPUT_MSG.RESULT_MSG.GUIDE.TITLE);
    Console.print(OUTPUT_MSG.RESULT_MSG.GUIDE.LINE);
    this.#printRewards(ranks);
    this.#printReturnRate(returnRate);
  }

  static #printRewards(ranks) {
    const rewards = Object.values(MONEY_CONSTANT.REWARD).map((reward) =>
      // 숫자에 콤마 넣어주는 정규 표현식
      reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
    Object.values(OUTPUT_MSG.RESULT_MSG.REWARD)
      .map((msg, idx) =>
        msg.replace("@", rewards[4 - idx]).replace("*", ranks[5 - idx])
      )
      .forEach((msg) => Console.print(msg));
  }

  static #printReturnRate(returnRate) {
    Console.print(OUTPUT_MSG.RESULT_MSG.RETURN_RATE.replace("*", returnRate));
  }
}

export default Output;
