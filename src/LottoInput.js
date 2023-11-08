import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from './Messages.js';
import Lotto from "./Lotto.js";

export async function lottoBuyAmount() {
  while (true) {
    try {
      const buyAmountInput = await MissionUtils.Console.readLineAsync(`${MESSAGES.LOTTO_BUY_AMOUNT_INPUT}\n`);
      const buyAmount = parseInt(buyAmountInput, 10);
      checkLottoAmount(buyAmount);

      return buyAmount;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export function checkLottoAmount(buyAmount) {
  if (isNaN(buyAmount)) {
    throw new Error(MESSAGES.NUMBER_ERROR);
  } else if (buyAmount % 1000 !== 0) {
    throw new Error(MESSAGES.AMOUNT_ERROR);
  }
}

export async function lottoWinningNumbers() {
  while (true) {
    try {
      const winningNumbersInput = await MissionUtils.Console.readLineAsync(`\n${MESSAGES.LOTTO_WINNING_INPUT}\n`);
      const winningNumbers = winningNumbersInput.split(',').map((item) => parseInt(item, 10));
      const lotto = new Lotto(winningNumbers);
      return lotto.numbers;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export async function lottoBonusNumber(winningNumbers) {
  while (true) {
    try {
      const bonusNumberInput = await MissionUtils.Console.readLineAsync(`\n${MESSAGES.LOTTO_BONUS_INPUT}\n`);
      const bonusNumber = checkLottoBonusNumber(winningNumbers, bonusNumberInput);

      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export function checkLottoBonusNumber(winninNumbers, bonusNumberInput) {
  const bonusNumber = parseInt(bonusNumberInput, 10);

  if (isNaN(bonusNumber)) {
    throw new Error(MESSAGES.NUMBER_ERROR);
  } else if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(MESSAGES.RANGE_ERROR);
  } else if (new Set([...winninNumbers, bonusNumber]).size !== 7) {
    throw new Error(MESSAGES.BONUS_ERROR);
  }

  return bonusNumber;
}