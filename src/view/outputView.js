import { Console } from '@woowacourse/mission-utils';
import {
  MESSAGE_OUTPUT_COINS,
  MESSAGE_LOTTO_RESULT,
  MESSAGE_THREE_MATCHED,
  MESSAGE_FOUR_MATCHED,
  MESSAGE_FIVE_MATCHED,
  MESSAGE_BONUS_MATCHED,
  MESSAGE_SIX_MATCHED,
  MESSAGE_PROFIT,
} from '../constants/message.js';

export default class outputView {
  insertCoins(coins) {
    Console.print(MESSAGE_OUTPUT_COINS.replace('{result}', coins));
  }

  boughtLotto(lotto) {
    Console.print(lotto);
  }

  winningResult() {
    Console.print(MESSAGE_LOTTO_RESULT);
  }

  matchedThree(result) {
    Console.print(MESSAGE_THREE_MATCHED.replace('{result}', result));
  }

  matchedFour(result) {
    Console.print(MESSAGE_FOUR_MATCHED.replace('{result}', result));
  }

  matchedFive(result) {
    Console.print(MESSAGE_FIVE_MATCHED.replace('{result}', result));
  }

  matchedBonus(result) {
    Console.print(MESSAGE_BONUS_MATCHED.replace('{result}', result));
  }

  matchedSix(result) {
    Console.print(MESSAGE_SIX_MATCHED.replace('{result}', result));
  }

  profit(result) {
    Console.print(MESSAGE_PROFIT.replace('{result}', result));
  }
}
