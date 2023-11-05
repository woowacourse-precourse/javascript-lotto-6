import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printOutput(message) {
    Console.print(message);
  }

  static printNewline() {
    Console.print("\n");
  }
}
export default OutputView;
