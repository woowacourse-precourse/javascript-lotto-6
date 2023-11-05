import { Console } from '@woowacourse/mission-utils';
import { inputMessage } from '../constants/messages';
import { checkLottoPurchase } from '../validations/lottotPurchaseValidation';

export const getPurchase = async () => {
  let cash;

  while (true) {
    const input = await Console.readLineAsync(inputMessage.PURCHASE_MESSAGE);
    cash = parseInt(input, 10);
    if (checkLottoPurchase(cash)) break;
  }
  return cash;
};
