import { Console } from '@woowacourse/mission-utils';
import validatePurchaseAmount from './validates/validatePurchaseAmount';

export default async function inputPurchaseAmount() {
  try {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해주세요\n');
    purchaseAmount = Number(purchaseAmount);
    purchaseAmount = validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  } catch (error) {
    Console.print(error.message);
    return
  }
}