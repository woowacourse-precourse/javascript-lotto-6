import Lotto from "./Lotto.js";
import Function from "./Fuctions.js";
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const random = lottoRandomNumber();
    const lotto= new Lotto(random);
  }
}


export default App;