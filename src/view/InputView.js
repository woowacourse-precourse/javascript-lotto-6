import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

class InputView{

  async readAmounts(){
    const inputAmounts = await Console.readLineAsync(MESSAGE.input.amounts);
    
    return inputAmounts;
  }

  async readLottoNumbers(){
    const inputWinNumber = await Console.readLineAsync(MESSAGE.input.winNumber);

    return inputWinNumber;
  }

  async readBonusNumber(){
    const inputBonusNumber = await Console.readLineAsync(MESSAGE.input.bonusNumber);

    return inputBonusNumber;
  }

}

export default InputView