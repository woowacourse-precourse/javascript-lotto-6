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

  checkValidPrice = (userInput) => {
    
  }


  async play() {
    try {
      const userInput = await this.getUserInput();

      const number = this.stringToNumber(userInput);

    } catch(err) {
      return Promise.reject(err);
    }
  }
}

export default App;
