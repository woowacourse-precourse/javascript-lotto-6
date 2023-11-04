import ConsoleOutput from '../console/ConsoleOutput.js';

class LottoGameOutput {
  static purchaseAmountError(error) {
    ConsoleOutput.output(error.message);
  }
}

export default LottoGameOutput;
