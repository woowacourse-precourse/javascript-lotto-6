import UserInput from "./utils/UserInput.js";
import LottoGame from "./lottoGame/LottoGame.js";

class App {
  async play() {
    const lottoAmount = await UserInput.getUserInput(
      UserInput.getPurchaseAmount
    );

    const lottoGame = new LottoGame();
    lottoGame.generateRandomLotto(lottoAmount);

    const lottoNumbers = await UserInput.getUserInput(
      UserInput.getLottoNumbers
    );
    lottoGame.generateWinnigLotto(lottoNumbers);

    const bonusNumber = await UserInput.getUserInput(UserInput.getBonusNumber);
    lottoGame.setLottoBonusNumber(bonusNumber);

    lottoGame.calculateWinner();
  }
}

export default App;
