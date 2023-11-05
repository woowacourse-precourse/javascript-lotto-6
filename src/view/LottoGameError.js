import ConsoleOutput from '../console/ConsoleOutput.js';

class LottoGameError {
  static printIncludeNaNError(error) {
    ConsoleOutput.output(error.message);
  }
}

export default LottoGameError;
