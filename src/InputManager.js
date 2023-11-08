import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import Validator from "./Validator.js";

const InputManager = {
  async inputPrice() {
    let price;
    let valid = false;

    while (!valid) {
      try {
        price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        Validator.validatePrice(price);
        valid = true;
      } catch (error) {
        Console.print(getUserFriendlyErrorMessage(error));
      }
    }

    return price;
  },

  async getWinningNumbers() {
    let numberList;

    while (true) {
      try {
        const winningNumber = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );

        numberList = winningNumber.split(",").map(Number);

        if (numberList.length === 6) {
          break;
        } else {
          Console.print("[ERROR] 6개의 숫자를 입력해주세요.\n");
        }
      } catch (error) {
        Console.print(getUserFriendlyErrorMessage(error));
      }
    }

    return numberList;
  },

  async getBonusNumbers() {
    let bonusNumber;

    while (true) {
      try {
        bonusNumber = await Console.readLineAsync(
          "보너스 번호를 입력해 주세요.\n"
        );

        if (bonusNumber.match(/^\d+$/)) {
          break;
        } else {
          Console.print("[ERROR] 숫자만 입력해주세요.\n");
        }
      } catch (error) {
        Console.print(getUserFriendlyErrorMessage(error));
      }
    }

    return bonusNumber;
  },
};

function getUserFriendlyErrorMessage(error) {
  if (error.message.includes("[ERROR] 1,000원 이상으로 입력해주세요")) {
    return "[ERROR] 1,000원 이상으로 입력해주세요.\n";
  } else if (error.message.includes("[ERROR] 1,000원 단위로 입력해주세요")) {
    return "[ERROR] 1,000원 단위로 입력해주세요.\n";
  } else if (error.message.includes("[ERROR] 숫자만 입력해주세요.")) {
    return "[ERROR] 숫자만 입력해주세요.\n";
  } else {
    return "[ERROR] 입력한 값이 올바르지 않습니다. 다시 시도해주세요.\n";
  }
}

export default InputManager;
