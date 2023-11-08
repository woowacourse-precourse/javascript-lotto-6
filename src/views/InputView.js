import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async readLineAsync(message) {
    return Console.readLineAsync(message);
  }
}

export default InputView;
