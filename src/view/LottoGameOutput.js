import ConsoleOutput from '../console/ConsoleOutput.js';

class LottoGameOutput {
  static isNotNumber(error) {
    ConsoleOutput.output(error.message);
  }
}

export default LottoGameOutput;
