import ExceptionList from './ExceptionList.js';

class WinInput {
  win;
  constructor(numbers) {
    this.validateWinInput(numbers);
    this.win = numbers.split(',');
  }
  validateWinInput = (winNumber) => {
    const exception = new ExceptionList();
    exception.noInputError(winNumber);
    const win = winNumber.split(',');
    exception.LengthError(win);
    win.forEach((number) => {
      exception.isNaNError(number);
      exception.numberRangeError(number);
    });
    exception.sameNumberError(win);
  };
}

export default WinInput;
