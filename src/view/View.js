import { Console } from "@woowacourse/mission-utils";

class View {
  readLine(message) {
    return Console.readLineAsync(message);
  }
}

export default View;
