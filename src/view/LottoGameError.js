import ConsoleOutput from '../console/ConsoleOutput.js';

class LottoGameError {
  static purchaseAmountError(error) {
    ConsoleOutput.output(error.message);
  }

  static tooMuchTicketsError(error) {
    ConsoleOutput.output(error.message);
  }

  static printInputWinningNumberError(error) {
    ConsoleOutput.output(error.message);
  }

  static printInputBonusNumberError(error) {
    ConsoleOutput.output(error.message);
  }
}

export default LottoGameError;
