import { MissionUtils } from "@woowacourse/mission-utils";
import { ResultMessage } from "./message.js";

const print = (msg) => MissionUtils.Console.print(msg);

const Print = Object.freeze({
  purchaseCount: (num) => print(ResultMessage.purchaseCount(num)),
  lottoResult: (arr) => print(ResultMessage.lottoResult(arr)),
  lottoProfit: (ratio) => print(ResultMessage.lottoProfit(ratio)),
});

export { Print };
