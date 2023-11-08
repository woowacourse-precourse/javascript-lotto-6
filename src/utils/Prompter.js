import { MissionUtils } from "@woowacourse/mission-utils";

class Prompter {
  async getUserInput (question) {
    const userInputValue = MissionUtils.Console.readLineAsync(question);
    return userInputValue;
  }
}

export default Prompter;