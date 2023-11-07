import { Console } from '@woowacourse/mission-utils';
import { ASK_PRICE } from '../constants.js';
import isValidPrice from './isValidPrice.js';

async function inputPrice() {
  let price = 0;
  while (!price) {
    const INPUT = await Console.readLineAsync(ASK_PRICE);
    if (isValidPrice(Number(INPUT))) price = Number(INPUT);
  }
  return price;
}

export default inputPrice;
