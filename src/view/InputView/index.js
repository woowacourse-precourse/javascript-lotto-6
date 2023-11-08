import { Console } from "@woowacourse/mission-utils";

export class InputView {
  static async readLine(query) {
    return await Console.readLineAsync(query);
  }
}
