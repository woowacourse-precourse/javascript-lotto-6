import { Console } from '@woowacourse/mission-utils';
import { USER_INPUT } from '../constants/Logs';
import Validation from '../domain/Validation';
import Lotto from '../Lotto';

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
  try {
    const lottoInput = await Console.readLineAsync(
      USER_INPUT.winningNumbersInputPrompt,
    );
    const winningLotto = lottoInput
      .split(',')
      .map(input => parseInt(input, 10));
    return new Lotto(winningLotto);
  } catch (error) {
    Console.print(error.message);
    return getWinningLottoNumbers();
  }
}

export async function getBonusNumber(winningLotto) {
  try {
    const bonusNumberInput = await Console.readLineAsync(
      USER_INPUT.bonusNumberInputPrompt,
    );
    Validation.isBonusNumberValidated(bonusNumberInput, winningLotto);
    const bonusNumber = Number(bonusNumberInput);
    return bonusNumber;
  } catch (error) {
    Console.print(error.message);
    return getBonusNumber(winningLotto);
  }
}
