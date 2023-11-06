import { Console, Random } from "@woowacourse/mission-utils";
import { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, MAX_LOTTO_LENGTH } from "./Constatns.js";

const Controller = {
  getOneLotto: () => {
    return Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, MAX_LOTTO_LENGTH);
  },
  getLottos: (ticket_count) => {
    let lottos = [];
    for (let cnt = 0; cnt < ticket_count; cnt++) {
      lottos.push(Controller.getOneLotto());
    }
    lottos.forEach((lotto, index) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
    Console.print("");
    return lottos;
  },
};

export default Controller;
