import { Console } from "@woowacourse/mission-utils";

class IO {
  async receiveUserInput(guideMsg) {
    const userInput = await Console.readLineAsync(guideMsg);
    return userInput;
  }

  printMsg(msg) {
    Console.print(msg);
  }
}

export default IO;