import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from '../constans/consoleMessages.js'
import { inputPriceValidator } from '../validate/inputPriceValidator.js'
import { inputNumbersValidator } from '../validate/inputNumbersValidator.js'
import { inputBonusValidator } from '../validate/inputBonusValidator.js'

class InputView  {
  async lottoPriceInput() {
    let priceInput;
    while (true) {
      priceInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoPrice);
      try {
        inputPriceValidator(priceInput);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return priceInput;
  }

  async lottoMainNumberInput() {
    let lottoMainNumberInput;
    while (true) {
      try {
        lottoMainNumberInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoMainNumber);
        lottoMainNumberInput = lottoMainNumberInput.split(',').map(Number); 
        inputNumbersValidator(lottoMainNumberInput);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return lottoMainNumberInput;
  }

  async lottoBonusNumberInput(lottoMainNumberInput) {
    let lottoBonusNumberInput;
    while (true) {
      try {
        lottoBonusNumberInput = await Console.readLineAsync(CONSOLE_MESSAGE.inputLottoBonusNumber);
        inputBonusValidator(lottoMainNumberInput,lottoBonusNumberInput);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return lottoBonusNumberInput;
  }



}

export default InputView;