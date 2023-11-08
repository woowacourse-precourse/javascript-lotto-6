import MyLotto from "./MyLotto.js";
import { MESSAGE } from "./contants.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const totalLottoCount = getUserInput();
  }
}

const getUserInput = async () => {
  const money = await Console.readLineAsync(MESSAGE.HOW_MANY_BUY_LOTTOS);
  const myLottos = new MyLotto(money);
  myLottos.printLottos();
};

export default App;
