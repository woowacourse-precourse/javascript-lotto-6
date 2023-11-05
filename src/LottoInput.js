import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from './Messages.js';

export async function lottoBuyAmount() {
    const buyAmountInput = await MissionUtils.Console.readLineAsync(`${MESSAGES.LOTTO_BUY_AMOUNT_INPUT}\n`);
    const buyAmount = parseInt(buyAmountInput, 10);
    checkLottoAmount(buyAmount);

    return buyAmount;
}

export function checkLottoAmount(buyAmount) {
    if (buyAmount % 1000 !== 0) {
        throw new Error(MESSAGES.AMOUNT_ERROR);
    }
}

export async function lottoWinningNumbers() {
    const winningNumbersInput = await MissionUtils.Console.readLineAsync(`\n${MESSAGES.LOTTO_WINNING_INPUT}\n`);
    const winningNumbers = checkLottoWinningNumbers(winningNumbersInput);

    return winningNumbers;
}

export function checkLottoWinningNumbers(winningNumbers) {
    if (winningNumbers.indexOf(',') < 0) {
        throw new Error(MESSAGES.WINNING_ERROR);
    }
    const splitNumbers = winningNumbers.split(',');

    return splitNumbers;
}