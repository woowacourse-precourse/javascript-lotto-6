import { Console, Random } from "@woowacourse/mission-utils";
import { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, MAX_LOTTO_LENGTH } from "./Constatns.js";

const Controller = {
  getOneLotto: (ticketAmount) => {
    let lottos = [];
    for (let cnt = 0; cnt < ticketAmount; cnt++) {
      lottos.push(Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, MAX_LOTTO_LENGTH));
    }
    return lottos;
  },

  getLottosList: (ticketAmount) => {
    let lottosList = Controller.getOneLotto(ticketAmount);
    lottosList.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
    Console.print("");
    return lottosList;
  },
};

export default Controller;
