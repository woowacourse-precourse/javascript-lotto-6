import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const amount = await this.receiveUserInput('구입금액을 입력해 주세요.\n');
  }

  async receiveUserInput(guideMsg) {
    const userInput = await Console.readLineAsync(guideMsg);
    return userInput;
  }

  printMsg(msg) {
    Console.print(msg);
  }
}

export default App;
