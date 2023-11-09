import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

class OutputView {
  static printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}${Messages.LOTTO_COUNT}`);
  }

  static printLottoNumbers(lottoNumbers) {
    lottoNumbers.forEach(lottoNumber => {
      Console.print(
        `${Messages.LEFT_BRACKET}${lottoNumber.join(', ')}${
          Messages.RIGHT_BRACKET
        }`,
      );
    });
  }
}

export default OutputView;
