import { Console } from "@woowacourse/mission-utils";

class InputView {
  async read(message) {
    const data = await Console.readLineAsync(message);
    return data;
  }
}

export default InputView;
