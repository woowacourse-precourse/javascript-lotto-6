import { inputMessage, errorMessage } from "./Message.js";
import { Console } from "@woowacourse/mission-utils"

class UserInput {
  async getPurchasingPrice() {
    await this.getUserInput(inputMessage.purchasingPrice)
    this.validatePurchasingPrice()
    return this.input
  }

  async getLottoNumber() {
    await this.getUserInput(inputMessage.lottoNumber)
    this.parseLottoNumber()
    return this.parsedArray
  }

  async getBonusNumber() {
    await this.getUserInput(inputMessage.bonusNumber)
    return parseInt(this.input)
  } 

  async getUserInput(message) {
    this.input = await Console.readLineAsync(message);
  }

  validatePurchasingPrice() {
    this.checkIsMultipleOfThousand()
  }

  checkIsMultipleOfThousand() {
    if (this.input % 1000 !== 0) {
      throw new Error(errorMessage.purchasingPrice);
    }
  }

  parseLottoNumber() {
    const parsedArray = this.input.split(',');
    parsedArray.map(number => {
      this.checkIsNumberInRange(parseInt(number))
    })
    this.parsedArray = parsedArray;
  }

  checkIsNumberInRange(number) {
    if (!(0 < number && number <= 45)) {
      throw new Error(errorMessage.numberOutOfRange)
    }
  }
  
}

export default UserInput