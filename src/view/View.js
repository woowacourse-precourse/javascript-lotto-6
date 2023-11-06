import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';
import { isValidBuyAmount, isValidWinningLotto } from '../utils/Validation.js';

export async function inputBuyAmount() {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.buyAmount);
    isValidBuyAmount(inputValue);
    return inputValue;
  } catch (err) {
    Console.print(err);
    return inputBuyAmount();
  }
}

export async function inputWinningLotto() {
  try {
    const inputValue = await Console.readLineAsync(MESSAGE_NOTIFICATION.winningLotto);
    isValidWinningLotto(inputValue);
    return inputValue.split(',').map((number) => Number(number));
  } catch (err) {
    Console.print(err);
    return inputWinningLotto();
  }
}

export function printBuyLotto(buyLottoCnt) {
  Console.print(`\n${buyLottoCnt}${MESSAGE_NOTIFICATION.buyLotto}`);
}

export function printLottoArray(lottos) {
  lottos.forEach((lotto) => Console.print(lotto));
}
