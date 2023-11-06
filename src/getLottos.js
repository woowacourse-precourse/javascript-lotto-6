import { Console, Random } from "@woowacourse/mission-utils";
import { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, MAX_LOTTO_LENGTH } from "./Constatns.js";

const getLottos = {
  getOneLotto: (ticketAmount) => {
    let lottos = [];
    for (let cnt = 0; cnt < ticketAmount; cnt++) {
      lottos.push(Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, MAX_LOTTO_LENGTH));
    }
    return lottos;
  },

  printLottosList: (lottosList) => {
    lottosList.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
    Console.print("");
  },

  getLottosList: (ticketAmount) => {
    let lottosList = getLottos.getOneLotto(ticketAmount);
    getLottos.printLottosList(lottosList);
    return lottosList;
  },
};

export default getLottos;
