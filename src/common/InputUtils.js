import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, ERROR_MESSAGE } from "../common/Text.js";
import {
  validateMoney,
  validateWinningNumber,
  winningNumberErrorCase,
  validateBonus,
  bonusNumberErrorCase,
} from "../common/Validation.js";

// 1. 로또 구입 입력 받기
export const inputMoney = async () => {
  while (true) {
    try {
      const input = await Console.readLineAsync(`${INPUT_MESSAGE.GAME_START}`);
      const money = Number(input);

      // 2. 구매금액 입력값 유효성 검사
      if (validateMoney(money)) {
        return money;
      }
    } catch (error) {
      Console.print(`${ERROR_MESSAGE.MONEY}`);
    }
  }
};
