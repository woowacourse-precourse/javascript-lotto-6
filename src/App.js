import { Random, Console } from "@woowacourse/mission-utils";
import { BUY_AMOUNT_MESSAGE, WIN_NUMBERS_MESSAGE, BONUS_NUMBER_MESSAGE, WIN_PRINT, MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER, WIN_INFO, PRIZE, ERRORS } from './constants.js';
import Lotto from "./Lotto.js";

class App {
  #lottoAmount = 0;
  #lottoNumbers = [];
  #winNumber = [];
  #bonusNumber = 0;
  #winResult = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  async buyLotto() {
    try {
      const money = await Console.readLineAsync(BUY_AMOUNT_MESSAGE);
      if (money % 1000 !== 0 || money < 1000) throw new Error(ERRORS.InvalidAmount);
      if (Number.isNaN(money)) throw new Error(ERRORS.InvalidNAN);
      if (money === null || money === 0) throw new Error(ERRORS.InvalidBlank);
      return money;
    } catch (e) {
      Console.print(e.message);
      return this.buyLotto();
    }
  }
  
  async play() {}
}

export default App;
