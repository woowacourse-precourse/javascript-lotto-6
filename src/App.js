import { Console } from "@woowacourse/mission-utils";
import UserInput from "./utils/UserInput.js";
import LottoGame from "./lottoGame/LottoGame.js";

class App {
  async play() {
    let lottoAmount;
    while (true) {
      try {
        lottoAmount = await UserInput.getPurchaseAmount();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const lottoGame = new LottoGame();
    lottoGame.generateLotto(lottoAmount / 1000);

    let lottoNumbers;
    while (true) {
      try {
        lottoNumbers = await UserInput.getLottoNumbers();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await UserInput.getBonusNumber();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    lottoGame.setWinningNumbers(lottoNumbers, bonusNumber);
    lottoGame.calculateWinner();
  }
}

export default App;
