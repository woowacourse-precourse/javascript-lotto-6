import { Console } from '@woowacourse/mission-utils';
import { USER_INPUT } from '../constants/Logs.js';
import Validation from '../domain/Validation.js';

export async function getLottoPurchaseAmount() {
  try {
    const purchaseMoneyInput = await Console.readLineAsync(
      USER_INPUT.purchaseAmountInputPrompt,
    );
    Validation.isPurchaseMoneyValidated(purchaseMoneyInput);
    const lottoPurchaseAmount = Number(purchaseMoneyInput) / 1000;
    return lottoPurchaseAmount;
  } catch (error) {
    Console.print(error.message);
    return getLottoPurchaseAmount();
  }
}

export async function getWinningLottoNumbers() {
  const winningLottoNumbersInput = await Console.readLineAsync(
    USER_INPUT.winningNumbersInputPrompt,
  );
  const winningLottoNumbers = winningLottoNumbersInput
    .split(',')
    .map(inputChar => parseInt(inputChar, 10));

  return winningLottoNumbers;
}

export async function getBonusNumber() {
  try {
    const bonusNumberInput = await Console.readLineAsync(
      USER_INPUT.bonusNumberInputPrompt,
    );
    Validation.isBonusNumberValidated(bonusNumberInput);
    const bonusNumber = Number(bonusNumberInput);
    return bonusNumber;
  } catch (error) {
    Console.print(error.message);
    return getBonusNumber();
  }
}
