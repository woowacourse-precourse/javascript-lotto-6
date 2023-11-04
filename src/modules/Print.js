import { Console } from '@woowacourse/mission-utils';

import CONSTANTS from '../constants/CONSTANTS.js';

const { PURCHASED_LOTTO_FORMAT, LOTTO_FRONT_COVER, LOTTO_BEHIND_COVER } =
  CONSTANTS;

class Print {
  static purchasedLotto(lottoArray) {
    Print.lineBreak();
    Console.print(`${lottoArray.length}${PURCHASED_LOTTO_FORMAT}`);
    lottoArray.forEach(Print.lottoNumbers);
  }

  static lottoNumbers(lotto) {
    Console.print(
      `${LOTTO_FRONT_COVER}${lotto
        .getNumbers()
        .join(', ')}${LOTTO_BEHIND_COVER}`
    );
  }

  static errorMessage(error) {
    Console.print(error.message);
  }

  static lineBreak() {
    Console.print('');
  }
}

export default Print;
