import { Console } from "@woowacourse/mission-utils";
import { 
  MESSAGE,
  DELIMITER,
  DELIMITER_SPACE,
  LOTTO_RESULT
} from "../constants/constants.js";

class OutputView {
  profits

  constructor() {
    this.profits = 0;
  }
  
  static showLottoNumbers (lottoTickets) {
    Console.print(lottoTickets.length + MESSAGE.LOTTO_TICKET);

    lottoTickets.forEach((lotto) => {
      Console.print(`[${String(lotto.getNumbers()).split(DELIMITER).join(DELIMITER_SPACE)}]`);
    })
  }
  
  static showLottoResult(result) {
    Console.print('당첨 통계\n---');
    
    for (const KEY in result) {
      Console.print(`${LOTTO_RESULT[KEY]} - ${result[KEY]}개`);
    }
  }
  
  static showRate(profits, lottoPrice) {
    const rate = ((profits/lottoPrice) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`) 
  }
}

export default OutputView