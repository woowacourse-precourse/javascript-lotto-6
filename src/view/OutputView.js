import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from '../constans/consoleMessages.js'

class OutputView {
  static printMessage(message) {
    Console.print(message);
  }
  
  lottoTotalOutput(unitLottoNumbers) {
    Console.print(`${unitLottoNumbers}${CONSOLE_MESSAGE.outputTotalMessage}`);
  }
  
  lottoNumbersOutput(lottoNumbers) {
    Console.print(`[${lottoNumbers.join(', ')}]`);
  }
}

export default OutputView;