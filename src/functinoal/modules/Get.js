import { Random } from '@woowacourse/mission-utils';
import Lotto from '../../Lotto.js';

import CONSTANTS from '../../constants/CONSTANTS.js';

const {
  ZERO,
  MISS_STATE,
  BONUS_STATE,
  HIT_STATE,
  LOTTO_PRICE,
  NUMBER_OF_LOTTO_NUMBERS,
  LOTTO_NUMBER_LOWER,
  LOTTO_NUMBER_UPPER,
  FIRST_PLACE_WINNINGS,
  SECOND_PLACE_WINNINGS,
  THIRD_PLACE_WINNINGS,
  FOURTH_PLACE_WINNINGS,
  FIFTH_PLACE_WINNINGS,
} = CONSTANTS;

class Get {
  static randomLottoArray(numberOfLotto) {
    return new Array(numberOfLotto).fill(null).map(Get.randomLotto);
  }

  static randomLotto() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_LOWER,
        LOTTO_NUMBER_UPPER,
        NUMBER_OF_LOTTO_NUMBERS
      ).sort((a, b) => a - b)
    );
  }

  static lottoBoard(winningNumbers, bonusNumber) {
    const board = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
    winningNumbers.forEach(number => (board[number] = HIT_STATE));
    board[bonusNumber] = BONUS_STATE;

    return board;
  }

  static lottoResult(lottoArray, lottoBoard) {
    const result = new Array(NUMBER_OF_LOTTO_NUMBERS * HIT_STATE + 1).fill(
      ZERO
    );
    lottoArray.forEach(lotto => result[Get.lottoValue(lotto, lottoBoard)]++);

    return Object.freeze(result);
  }

  static lottoValue(lotto, lottoBoard) {
    return lotto
      .getNumbers()
      .reduce((previous, current) => previous + lottoBoard[current], ZERO);
  }

  static lottoReturnRatio(resultArray) {
    const numberOfLotto = Get.sumOfArray(resultArray);
    return (
      (((resultArray[6] + resultArray[7]) * FIFTH_PLACE_WINNINGS +
        (resultArray[8] + resultArray[9]) * FOURTH_PLACE_WINNINGS +
        resultArray[10] * THIRD_PLACE_WINNINGS +
        resultArray[11] * SECOND_PLACE_WINNINGS +
        resultArray[12] * FIRST_PLACE_WINNINGS) /
        (numberOfLotto * LOTTO_PRICE)) *
      100
    );
  }

  static sumOfArray(array) {
    return array.reduce((previous, current) => previous + current, 0);
  }
}

export default Get;
