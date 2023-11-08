import { Console } from "@woowacourse/mission-utils";

export class OutputView {
  static print(message) {
    Console.print(message);
  }

  static lineBreak() {
    Console.print("");
  }
}
