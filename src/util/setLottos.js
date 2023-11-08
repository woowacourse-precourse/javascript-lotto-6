import { printMessage } from "./printMessage.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./../Lotto.js";

async function setLottos(cash) {
  let lottos = [];
  for (let i = 0; i < cash / 1000; i++) {
    let tempValue = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    tempValue.sort(function (a, b) {
      return a - b;
    });
    printMessage("[" + tempValue.join(", ") + "]");
    lottos.push(new Lotto(tempValue));
  }
  return lottos;
}

export default setLottos;
