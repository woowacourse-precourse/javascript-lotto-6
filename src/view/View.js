import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_NOTIFICATION } from '../constants/Message.js';
import { isValidBuyAmount } from '../utils/Validation.js';

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

export function printBuyLotto(buyLottoCnt) {
  Console.print(`\n${buyLottoCnt}${MESSAGE_NOTIFICATION.buyLotto}`);
}

export function printLottoArray(lottos) {
  lottos.forEach((lotto) => Console.print(lotto));
}
