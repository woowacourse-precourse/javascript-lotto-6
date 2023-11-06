import { Console } from '@woowacourse/mission-utils';
import {
  BONUS_NUMBER_INPUT_MESSAGE,
  MONEY_INPUT_MESSAGE,
  WINNING_NUMBER_INPUT_MESSAGE,
} from '../constants.js';

export default class InputService {
  async readAmount() {
    return Console.readLineAsync(MONEY_INPUT_MESSAGE);
  }

  async readWinningNumbers() {
    return Console.readLineAsync(WINNING_NUMBER_INPUT_MESSAGE);
  }
}
