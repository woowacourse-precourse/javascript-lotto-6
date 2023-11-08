import Lotto from "../model/Lotto.js"
import { getBonusNumber, getUserAmount, getWinningNumber } from "../view/input.js"
import { printAttempt, printRandomNumbersArray, printResult } from "../view/output.js";
import { LOTTO } from "../constatns/number.js";
import { getRandomNumbersArray } from "../utils.js";

class LottoController {

  async lottoStart() {
      const attempt = await getUserAmount() / LOTTO.PRICE;
      if (attempt >= 1) {
        const randomNumbersArray = getRandomNumbersArray(attempt);
        printAttempt(attempt);
        printRandomNumbersArray(randomNumbersArray);
  
        const lotto = new Lotto(await getWinningNumber());
        const bonusNumber = await getBonusNumber();
        const lottoResult = lotto.lottoMatchStart(randomNumbersArray, bonusNumber);
        printResult(lottoResult, attempt);
      }
      else{
        this.lottoStart();
      }
  }
}
export default LottoController;