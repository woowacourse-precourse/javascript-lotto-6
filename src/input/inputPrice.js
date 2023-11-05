import { Console } from '@woowacourse/mission-utils';
import { ASK_PRICE } from '../constants.js';
import isValidPrice from './isValidPrice.js';

async function inputPrice() {
  try {
    const INPUT = await Console.readLineAsync(ASK_PRICE);
    const PRICE = Number(INPUT);
    if (!isValidPrice(PRICE)) process.exit();
    return PRICE;
  } catch (error) {
    throw new Error(error);
  }
}

export default inputPrice;
