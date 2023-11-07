import { MissionUtils } from "@woowacourse/mission-utils";
import { ResultMessage } from "./message.js";

const print = (msg) => MissionUtils.Console.print(msg);

const Print = Object.freeze({
  error: (e) => print(e.message),
  purchaseLottos: (lottos) => print(ResultMessage.purchaseLottos(lottos)),
  lottoResult: (arr) => print(ResultMessage.lottoResult(arr)),
  lottoProfit: (ratio) => print(ResultMessage.lottoProfit(ratio)),
});

export { Print };
