//Result.js
import { Console } from "@woowacourse/mission-utils";

class Result {
  static async showResult(lottoNumbers, userLottoNumbers, userBonusNumber) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(lottoNumbers);
    Console.print(userLottoNumbers);
    Console.print(userBonusNumber);
  }
}

export default Result;
