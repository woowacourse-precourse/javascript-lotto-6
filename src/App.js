import UserInput from "./utils/UserInput.js";
import LottoGame from "./lottoGame/LottoGame.js";

class App {
  async play() {
    const lottoAmount = await UserInput.getUserInput(
      UserInput.getPurchaseAmount
    );

    const lottoGame = new LottoGame();
    lottoGame.generateLotto(lottoAmount);

    const lottoNumbers = await UserInput.getUserInput(
      UserInput.getLottoNumbers
    );
    const bonusNumber = await UserInput.getUserInput(UserInput.getBonusNumber);

    lottoGame.setWinningNumbers(lottoNumbers, bonusNumber);
    lottoGame.calculateWinner();
  }
}

export default App;
