import { MissionUtils } from "@woowacourse/mission-utils";
import lottoAmountCount from "./lottoAmountCount.js";

async function lottoAmountSentence(purchaseAmount) {
  MissionUtils.Console.print("");
  MissionUtils.Console.print(
    `${await lottoAmountCount(purchaseAmount)}개를 구매했습니다.`
  );
}

export default lottoAmountSentence;
