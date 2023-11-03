import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate";
import Lotto from "./Lotto";

class View {
  static #INPUT_MONEY = "구입금액을 입력해 주세요.";
  static #COUNT_LOTTO_QUERY = "개를 구매했습니다.";

  static async askInputMoney() {
    const answer = await Console.readLineAsync(View.#INPUT_MONEY);
    Validator.validateMoneyUnit(answer);
    Validator.validateInputMoney(answer);
    return answer;
  }

  static async printLottoCount() {
    const inputMoney = await Lotto.countingLottos();
    MissionUtils.Console.print(inputMoney + View.#COUNT_LOTTO_QUERY);
  }
}

export default View;
