import Lotto from "../model/Lotto.js"
import { getBonusNumber, getUserAmount, getWinningNumber } from "../view/input.js"
import { printAttempt, printRandomNumbersArray } from "../view/output.js";
import { LOTTO } from "../constatns/number.js";
import { getRandomNumbers } from "../utils.js";

class LottoController {

  async lottoStart() {
    const attempt = await getUserAmount() / LOTTO.PRICE;
    const randomNumbersArray = this.getRandomNumbersArray(attempt);
    printAttempt(attempt);
    printRandomNumbersArray(randomNumbersArray);

    const lotto = new Lotto(await getWinningNumber());
    const bonusNumber = await getBonusNumber();
    lotto.lottoMatchStart(randomNumbersArray);
  }

  // 랜덤 번호 저장할 2차원 배열 생성
  getRandomNumbersArray(attempt) {
    const array = Array(attempt);
    const randomNumbersArray = array.fill();
    randomNumbersArray.forEach((e, index) => {
      randomNumbersArray[index] = getRandomNumbers();
    })
    return randomNumbersArray;
  }

}
export default LottoController;