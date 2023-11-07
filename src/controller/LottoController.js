import { getUserAmount, getWinningNumber } from "../view/input.js"
import { printAttempt, printRandomNumberArray } from "../view/Output.js";
import { LOTTO_PRICE } from "../constatns/number.js";
import { getRandomNumber } from "../utils.js";

class LottoController {

  async lottoStart() {
    const attempt = await getUserAmount() / LOTTO_PRICE;
    const randomNumberArray = this.getRandomNumberArray(attempt);
    printAttempt(attempt);
    printRandomNumberArray(randomNumberArray);
    const winningNumber = getWinningNumber();
  }

  // 로또 번호 저장할 2차원 배열 생성
  getRandomNumberArray(attempt) {
    const array = Array(attempt);
    const randomNumberArray = array.fill();
    randomNumberArray.forEach((e, index) => {
      randomNumberArray[index] = getRandomNumber();
    })
    return randomNumberArray;
  }

}
export default LottoController;