import { Console } from "@woowacourse/mission-utils"
import message from "./Message.js";
import Lotto from './Lotto.js';   


class App {
  async play() {
    const test = await getUserInput(message.inputPurchasingPrice)
  }


}

async function getUserInput(message) {
  return  await Console.readLineAsync(message);
}


export default App;
