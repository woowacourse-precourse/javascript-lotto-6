import { Console } from "@woowacourse/mission-utils";

class View {
  readLine(message) {
    return Console.readLineAsync(message);
  }

  print(message) {
    Console.print(message);
  }
}

export default View;
