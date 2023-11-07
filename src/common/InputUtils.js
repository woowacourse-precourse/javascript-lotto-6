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

// 8.당첨번호 사용자에게 입력받기
export const inputWinning = async () => {
  while (true) {
    try {
      let input = await Console.readLineAsync(
        `${INPUT_MESSAGE.WINNING_NUMBER}`
      );
      // 9. 번호 유효성검사
      let validWinningnumbers = validateWinningNumber(input);
      if (validWinningnumbers) return validWinningnumbers;
    } catch (error) {
      winningNumberErrorCase(error.message);
    }
  }
};

// 10. 보너스 번호 사용자에게 입력받기
export const inputBonusNumber = async (winningNumbers) => {
  while (true) {
    try {
      let input = await Console.readLineAsync(`${INPUT_MESSAGE.BONUS_NUMBER}`);
      let validBonus = validateBonus(input, winningNumbers);

      if (validBonus) return validBonus;
    } catch (error) {
      bonusNumberErrorCase(error.message);
    }
  }
};
