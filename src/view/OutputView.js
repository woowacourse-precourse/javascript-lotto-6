import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from '../constans/consoleMessages.js'

class OutputView {
  printMessageOutput() {
    const printMessageOutput = Console.print(CONSOLE_MESSAGE.inputPrintResult);
    return printMessageOutput;
  }
  
  lottoTotalOutput(unitLottoNumbers) {
    Console.print(`\n${unitLottoNumbers}${CONSOLE_MESSAGE.outputTotalMessage}`);
  }

  lottoNumbersOutput(lottoNumbers) {
    Console.print(`[${lottoNumbers.join(', ')}]`);
  }

  resultsOutput(results) {
    results.forEach((result) => {
      Console.print(`${result.match} (${result.price.toLocaleString()}원) - ${result.count}개`);
    });
  }

  totalPercentageOutput(totalPercentage) {
    Console.print(`총 수익률은 ${totalPercentage}%입니다.`);
  }
}

export default OutputView;