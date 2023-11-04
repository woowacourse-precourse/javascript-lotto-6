import { Console } from "@woowacourse/mission-utils"
import { inputMessage, errorMessage } from "./Message.js";
import Lotto from './Lotto.js';   


class App {
  async play() {
    const userInputNumber = await new UserInput().getPurchasingPrice();
    
    const userInputLotto = await new UserInput().getLottoNumber();
    console.log('userInputLotto', userInputLotto)
    
  }
}

class UserInput {
  async getPurchasingPrice() {
    await this.getUserInput(inputMessage.purchasingPrice)
    this.validatePurchasingPrice()
    return this
  }

  async getLottoNumber() {
    await this.getUserInput(inputMessage.lottoNumber)
    this.parseLottoNumber()
    return this
  }

  async getUserInput(message) {
    this.input = await Console.readLineAsync(message);
  }

  validatePurchasingPrice() {
    this.checkIsMultipleOfThousand()
  }

  checkIsMultipleOfThousand() {
    if (this.input % 1000 !== 0) {
      throw new Error (errorMessage.purchasingPrice);
    }
  }

  parseLottoNumber() {
    const parsedArray = this.input.split(',');
    parsedArray.map(number => this.checkIsNumberInRange(number))
    this.parsedArray = parsedArray;
  }

  checkIsNumberInRange(number) {
    if (!(0 < number <= 45)) {
      throw new Error (errorMessage.numberOutOfRange)
    } 
  }
  
  

}


export default App;
