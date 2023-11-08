import { Console } from "@woowacourse/mission-utils";

export const getUserInput = async (message, callback) => {
  while (true) {
    try {
      let answer = await Console.readLineAsync(message);
      return callback(answer);
    } catch (e) {
      Console.print(e.message);
    }
  }
};
