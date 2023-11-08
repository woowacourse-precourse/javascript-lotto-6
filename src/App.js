
import UserInput from "./UserInput.js";
import LottoGenerator from "./LottoGenerator.js";
import { checkWinning, printResult } from "./checkLotto.js";

class App {
  async play() {
	const inputs = new UserInput();

	const price = await inputs.inputPrice();

	const lottos = new LottoGenerator(price);

	const winNumbers = await inputs.inputWinNumber();
	const bonusNumber = await inputs.inputBonusNumber(winNumbers);

  }
}

export default App;
