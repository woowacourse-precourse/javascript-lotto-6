import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import Validator from "./Validator.js";

const InputManager = {
  async inputPrice() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    Validator.validatePrice(price);
    Console.print(" ");
    return price;
  },

  async getWinningNumbers() {
    const winningNumber = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const numberList = winningNumber.split(",").map(Number);

    return numberList;
  },

  async getBonusNumbers() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    return bonusNumber;
  },
};

export default InputManager;
