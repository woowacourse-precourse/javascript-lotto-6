import { Console } from "@woowacourse/mission-utils";

export default class IO {
  static async get(query) {
    const input = await Console.readLineAsync(query);
    return input;
  }

  static print(input) {
    Console.print(input);
  }
}
