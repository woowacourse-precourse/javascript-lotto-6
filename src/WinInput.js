import { MissionUtils } from '@woowacourse/mission-utils';
import ExceptionList from './ExceptionList.js';

class WinInput {
  win;
  constructor(numbers) {
    this.validateWinInput(numbers)
    this.win = numbers.split(',');
  }
  validateWinInput = (winNumber) => {
    let exception = new ExceptionList();
    exception.noInputError(winNumber);
    const win = winNumber.split(',');
    exception.LengthError(win);
    win.forEach((number) => {
      exception.isNaNError(number);
      exception.numberRangeError(number);
    });
    exception.sameNumberError(win);
    // exception.notThousandError(winNumber);
    // exeption.isNaNError(winNumber);
    // if (winNumber==='') {
    //   throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    // }
  };
  
}

export default WinInput;
