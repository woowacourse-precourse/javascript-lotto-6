import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  getUserInput = async () => {
    let userInput = '';

    await MissionUtils.Console.readLineAsync('')
      .then((input) => {
        userInput = input;
      })
      .catch((err) => {
        throw new Error('[ERROR] : fail to get user input by console.');
      })

    return userInput;
  }

  stringToNumber = (userInput) => {
    const number = Number(userInput);

    if(isNaN(number)) throw new Error('[ERROR] : input is not a number.');

    return number;
  }

  checkIsValidNumber = (userInputNum) => {
    if(!Number.isInteger(userInputNum)) throw new Error('[ERROR] : input is not a integer');
    if(userInputNum <= 0) throw new Error('[ERROR] : pirce must greater than 0');
    if(userInputNum % 1000 != 0) throw new Error('[ERROR] : cannot divide price by 1,000');
  }

  checkValidPrice = (userInput) => {
    
  }


  async play() {
    try {
      MissionUtils.Console.print('구입금액을 입력해 주세요.');
      
      const userInput = await this.getUserInput();

      const number = this.stringToNumber(userInput);

      this.checkIsValidNumber(number);

    } catch(err) {
      return Promise.reject(err);
    }
  }
}

export default App;
