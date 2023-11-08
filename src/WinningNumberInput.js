import InputPrompter from "./InputPrompter.js";
import Lotto from "./Lotto.js";

class WinningNumberInput {
  static async collect() {
    return this.createWinningNumberInputPrompter().collect();
  }

  static createWinningNumberInputPrompter() {
    return new InputPrompter("\n당첨 번호를 입력해 주세요", (str) => {
      Lotto.validate(str.split(",").map((strNum) => Number(strNum)));
    });
  }
}

export default WinningNumberInput;
