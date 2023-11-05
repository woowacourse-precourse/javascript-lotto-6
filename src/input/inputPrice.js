import { Console } from '@woowacourse/mission-utils';
import { ASK_PRICE } from '../constants.js';

async function inputPrice() {
  try {
    const INPUT = await Console.readLineAsync(ASK_PRICE);
    const PRICE = Number(INPUT);
    return PRICE;
  } catch (error) {
    throw new Error(error);
  }
}

export default inputPrice;
