import { Console } from "@woowacourse/mission-utils";

const inputView = {
  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  },
};

export default inputView;
