import lottoPriceInput from './LottoPriceInput.js';
import priceCheck from './priceCheck.js';
import { MissionUtils } from '@woowacourse/mission-utils';
export default async function getValidPrice() {
  let validPrice = null;
  while (validPrice === null) {
    try {
      const price = await lottoPriceInput('구입금액을 입력해 주세요.');
      validPrice = priceCheck(price);
    } catch (error) {
      MissionUtils.Console.print(`${error}`);
    }
  }
  return validPrice;
}
