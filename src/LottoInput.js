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

    return winningNumbers.map((number) => parseInt(number, 10));
}

export function checkLottoWinningNumbers(winningNumbers) {
    if (winningNumbers.indexOf(',') < 0) {
        throw new Error(MESSAGES.WINNING_ERROR);
    }
    const splitNumbers = winningNumbers.split(',');

    return splitNumbers;
}


export async function lottoBonusNumber(winningNumbers) {
    const bonusNumberInput = await MissionUtils.Console.readLineAsync(`\n${MESSAGES.LOTTO_BONUS_INPUT}\n`);
    const bonusNumber = checkLottoBonusNumber(winningNumbers, bonusNumberInput);

    return bonusNumber;
}

export function checkLottoBonusNumber(winninNumbers, bonusNumberInput) {
    const bonusNumber = parseInt(bonusNumberInput, 10);

    if (isNaN(bonusNumber)) {
        throw new Error(MESSAGES.NUMBER_ERROR);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
        throw new Error(MESSAGES.RANGE_ERROR);
    }
    if (new Set([...winninNumbers, bonusNumber]).size !== 7) {
        throw new Error(MESSAGES.BONUS_ERROR);
    }

    return bonusNumber;
}