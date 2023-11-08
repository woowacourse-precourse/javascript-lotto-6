import Bonus from "./Bonus.js";
import Lotto from "./Lotto.js";
import MyLotto from "./MyLotto.js";
import { MESSAGE } from "./contants.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    await getUserInput();
    getCorrectNumberInput();
  }
}

const getUserInput = async () => {
  const money = await Console.readLineAsync(MESSAGE.HOW_MANY_BUY_LOTTOS);
  const myLottos = new MyLotto(money);
  myLottos.printLottos();
};

const getCorrectNumberInput = async () => {
  const correctLottoInput = await Console.readLineAsync(
    MESSAGE.CORRET_LOTTO_NUMBER
  );
  const correctLottoInputArray = correctLottoInput.split(",");
  const correctLotto = new Lotto(correctLottoInputArray);
  const bonusNumberInput = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);
  const bonusNumber = new Bonus(bonusNumberInput);
};

export default App;
