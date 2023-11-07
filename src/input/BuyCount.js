import { Console } from '@woowacourse/mission-utils';
import { checkbuy } from '../Exception/CheckBuy.js';
// 기능1. 구매 갯수
export function buycount(buyinput) {
  try {
    const buy = checkbuy(buyinput);
    return buy;
  } catch (error) {
    Console.print(error.message);
    return buycount(buyinput);
  }
}
