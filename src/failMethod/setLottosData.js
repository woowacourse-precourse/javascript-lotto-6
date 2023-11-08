import { MissionUtils } from "@woowacourse/mission-utils";
import { printMessage } from "./printMessage.js";

class Lottos {
  lottosNums;

  addLotto(Lotto) {
    this.lottosNums.push(Lotto);

    printMessage("[" + Lotto.join(", ") + "]");
  }
}

const setLottosData = async (cash) => {
  let lottos = new Lottos();
  for (let i = 0; i < cash / 1000; i++) {
    lottos.addLotto(
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(function (
        a,
        b
      ) {
        return a - b;
      })
    );
  }
  return lottos;
};
