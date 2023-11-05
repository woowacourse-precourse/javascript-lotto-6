import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MSG } from "../constants/output.js";

class Output {
  static printLotto(player) {
    const lottos = player.playerLottos;

    Console.print(`${lottos.length}${OUTPUT_MSG.BUYING_MSG}`);
    lottos.forEach((lotto) => Console.print(lotto.toString()));
  }
}

export default Output;
