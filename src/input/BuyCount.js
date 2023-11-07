import { Console } from '@woowacourse/mission-utils';
import { checkbuy } from '../Exception/CheckBuy.js';
import { buycountinput } from './BuyCountInput.js';
// 기능1. 구매 갯수
export async function buycount() {
  try {
    const buyinput = await buycountinput();
    const buy = checkbuy(buyinput);
    return buy;
  } catch (error) {
    Console.print(error.message);
    return buycount();
  }
}
