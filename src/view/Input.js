import { Console } from '@woowacourse/mission-utils';
import {
  INPUT_PURCHASE_PRICE,
  INPUT_WINNING_NUMBER,
  INPUT_BONUS_NUMBER,
} from '../constant/InputMessage.js';

const Input = {
  async getLottoPurchasePrice() {
    return await Console.readLineAsync(INPUT_PURCHASE_PRICE);
  },
  async getWinningNumber() {
    return Console.readLineAsync(`\n${INPUT_WINNING_NUMBER}`);
  },
  async getBonusNumber() {
    return Console.readLineAsync(`\n${INPUT_BONUS_NUMBER}`);
  },
};

export default Input;
