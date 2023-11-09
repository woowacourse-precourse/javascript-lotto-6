import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

class OutputView {
  static printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}${Messages.LOTTO_COUNT}`);
  }

  static printLottoNumbers(lottoNumbers) {
    lottoNumbers.forEach(lottoNumber => {
      Console.print(`${Messages.LEFT_BRACKET}${lottoNumber.join(', ')}${Messages.RIGHT_BRACKET}`);
    });
  }

  static printError(message) {
    Console.print(message);
  }
  
  static printMatchCounts(matchCounts) {
    Console.print(`\n${Messages.MATCH_RESULT}`);
    Console.print(`${Messages.BREAK_LINE}`);
    for (let i = matchCounts.length - 1; i >= 0; i -= 1) {
      Console.print(`${Messages.RANK[i]}${matchCounts[i]}${Messages.COUNT_UNIT}`);
    }
  }

  static printReturnOfInvestment(returnOfInvestment) {
    Console.print(`${Messages.RETURN_OF_INVESTMENT(returnOfInvestment)}`);
  }
}

export default OutputView;