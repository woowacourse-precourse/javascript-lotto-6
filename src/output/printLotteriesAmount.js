import { Console } from '@woowacourse/mission-utils';
import { BUY_LOTTO } from '../constants.js';

function printLotteriesAmount(amount) {
  Console.print(`${amount}${BUY_LOTTO}`);
}

export default printLotteriesAmount;
