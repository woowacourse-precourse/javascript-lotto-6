import { Console } from '@woowacourse/mission-utils';
import InputMessage from '../message/Input.js';

const InputView = {
  readPurchaseAmount() {
    Console.readLineAsync(InputMessage.PurchaseAmount);
  },
};

export default InputView;
