import { Console } from "@woowacourse/mission-utils";

export default class IO {
  static async get(query) {
    const input = await Console.readLineAsync(query);
    return input;
  }

  static print(input) {
    Console.print(input);
  }

  static stringConverter(string) {
    const aryStrings = string.split(",").map((el) => el.trim());
    const aryNumbers = aryStrings.map((el) => parseInt(el, 10));
    return aryNumbers;
  }
}
