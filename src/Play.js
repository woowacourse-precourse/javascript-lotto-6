import Bonus from "./Bonus.js";
import Lotto from "./Lotto.js";
import MyLotto from "./MyLotto.js";

class Play {
  #myLottos;
  #correctLotto;
  #bonus;

  async start() {
    await this.getUserInput();
    await this.getCorrectNumberInput();
  }

  getUserInput = async () => {
    const money = await Console.readLineAsync(MESSAGE.HOW_MANY_BUY_LOTTOS);
    const myLottos = new MyLotto(money);
    myLottos.printLottos();
    this.#myLottos = myLottos.getMyLotts();
  };

  getCorrectNumberInput = async () => {
    const correctLottoInput = await Console.readLineAsync(
      MESSAGE.CORRET_LOTTO_NUMBER
    );
    const correctLottoInputArray = correctLottoInput.split(",");
    this.#correctLotto = new Lotto(correctLottoInputArray).getCorrectNumber();
    const bonusNumberInput = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);
    this.#bonus = new Bonus(bonusNumberInput).getBonusNumber();
  };
}

export default Play;
