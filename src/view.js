import { Console } from "@woowacourse/mission-utils";

class View {
  static #INPUT_MONEY = "구입금액을 입력해 주세요.";

  static async askInputMoney() {
    const answer = await Console.readLineAsync(View.#INPUT_MONEY);
    return answer;
  }
}

export default View;
