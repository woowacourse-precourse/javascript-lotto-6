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
        throw new Error("[ERROR]");
      })

    return userInput;
  }


  async play() {
    try {
      const userInput = await this.getUserInput();

      console.log(userInput);

    } catch(err) {
      return Promise.reject(err);
    }
  }
}

export default App;
