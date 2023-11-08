import { Console } from "@woowacourse/mission-utils";
import { 
  MESSAGE,
  DELIMITER,
  DELIMITER_SPACE,
  LOTTO_RESULT
} from "../constants/constants.js";

class OutputView {

  static showEmptyLine() {
    Console.print('');
  }

  static showLottoCount(lottoCount) {
    this.showEmptyLine();
    Console.print(MESSAGE.LOTTO_TICKET(lottoCount));
  }
  
  static showLottoNumbers (lottoTickets) {
    lottoTickets.forEach((lotto) => {
      Console.print(`[${String(lotto.getNumbers()).split(DELIMITER).join(DELIMITER_SPACE)}]`);
    });
  };
  
  static showLottoResult(result) {
    this.showEmptyLine();
    Console.print(MESSAGE.LOTTO_RESULT);
    
    for (const KEY in result) {
      Console.print(`${LOTTO_RESULT[KEY]} - ${result[KEY]}개`);
    }
  };
  
  static showRate(profits, lottoPrice) {
    const rate = ((profits/lottoPrice) * 100).toFixed(1);
    Console.print(MESSAGE.LOTTO_RATE(rate));
  };
}

export default OutputView
