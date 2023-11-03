import Lotto from "./Lotto.js";
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const random = lottoRandomNumber();
    const lotto= new Lotto(random);
  }
}

function lottoRandomNumber() {
   const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
   return Array.from(randomNumbers);
}

export default App;