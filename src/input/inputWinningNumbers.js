import { Console } from '@woowacourse/mission-utils';
import { ANSWER_LOTTO } from '../constants.js';
import Lotto from '../Lotto.js';

async function inputWinningNumbers() {
  try {
    const INPUT = await Console.readLineAsync(ANSWER_LOTTO);
    const WINNING_NUMBERS = new Lotto(INPUT.split(',').map(Number));
    return WINNING_NUMBERS.numbers;
  } catch (error) {
    throw new Error(error);
  }
}

export default inputWinningNumbers;
