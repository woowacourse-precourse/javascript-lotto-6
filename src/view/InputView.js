import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from '../constans/consoleMessages.js'
import { inputPriceValidator } from '../validate/inputPriceValidator.js'

class InputView  {
  async lottoPriceInput() {
    let priceInput;
    while (true) {
      priceInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoPrice);
      try {
        inputPriceValidator(priceInput);
        break;
      } catch (error) {
        console.error(error.message);
      }
    }
    return priceInput;
  }

  async lottoMainNumberInput() {
    const lottoMainNumberInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoMainNumber);
    return lottoMainNumberInput.split(',').map(Number);
  }
    
  async lottoBonusNumberInput() {
    const lottoBonusNumberInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoBonusNumber);
    return parseInt(lottoBonusNumberInput);
  }
}

export default InputView;