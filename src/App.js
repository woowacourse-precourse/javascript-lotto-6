import { Console } from "@woowacourse/mission-utils"
import { inputMessage, errorMessage } from "./Message.js";
import Lotto from './Lotto.js';   


class App {
  async play() {
    const userInput = new UserInput()
    userInput.getPurchasingPrice()
  }
}

class UserInput {
  async getPurchasingPrice() {
    await this.getUserInput(inputMessage.purchasingPrice)
    this.validatePurchasingPrice()
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

}


export default App;
