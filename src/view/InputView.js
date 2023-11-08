import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';
import { isValidBuyAmount } from '../validator/BuyAmountValidator.js';
import { isValidWinningLotto } from '../validator/WinningLottoValidator.js';
import { isValidBounsNumber } from '../validator/BounsNumberValidator.js';
import { COMMA } from '../constants/GameSetting.js';

export async function inputBuyAmount() {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.buyAmount);
    isValidBuyAmount(inputValue);
    return Number(inputValue);
  } catch (err) {
    Console.print(err.message);
    return inputBuyAmount();
  }
}

export async function inputWinningLotto() {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.winningLotto);
    isValidWinningLotto(inputValue);
    return inputValue.split(COMMA).map((number) => Number(number));
  } catch (err) {
    Console.print(err.message);
    return inputWinningLotto();
  }
}

export async function inputBounsNumber(winningLottoNumbers) {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.bonusNumber);
    isValidBounsNumber(inputValue, winningLottoNumbers);
    return Number(inputValue);
  } catch (err) {
    Console.print(err.message);
    return inputBounsNumber(winningLottoNumbers);
  }
}
