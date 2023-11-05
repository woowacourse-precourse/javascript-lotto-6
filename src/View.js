import { Console } from "@woowacourse/mission-utils";

export default class View {
  printConsole(message) {
    return Console.print(message);
  }

  readInput(message) {
    return Console.readLineAsync(message);
  }
}
