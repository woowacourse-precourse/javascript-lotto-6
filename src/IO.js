import { Console } from "@woowacourse/mission-utils";

class IO {
  static async receiveUserInput(guideMsg) {
    const userInput = await Console.readLineAsync(guideMsg);
    return userInput;
  }

  static printMsg(msg) {
    Console.print(msg);
  }
}

export default IO;