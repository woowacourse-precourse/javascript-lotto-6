import { LOTTO_MESSAGE } from "../constants/lottoMessage.js";
import { inputView } from "../views/inputView.js";
import LottoCount from '../models/LottoCount.js'
import Lotto from "../models/Lotto.js";
import { outputView } from "../views/outputView.js";
import Bonus from "../models/Bonus.js";
import { ERROR_MESSAGE } from "../constants/errorMessage.js";

class GameController {
  #lottoCount;
  #winnings;
  #bonus;
  #winningsCount;

  static WINNING_NUMBER_LIST = ["3개 일치", "4개 일치", "5개 일치", "5개 일치, 보너스 볼 일치", "6개 일치"];
  static WINNING_AMOUNT_LIST = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"];
  static initialWinningsCount = [0, 0, 0, 0, 0];

  async play() {
    await this.buyLotto();
    await this.getLottoNumbers();
    this.printResult();
  }

  async buyLotto() {
    try {
      const amount = await inputView.readLine(LOTTO_MESSAGE.get_purchase_amount);
      this.#lottoCount = new LottoCount(amount);
    } catch (error) {
      outputView.print(error.message);
      await this.buyLotto();
    }
  }

  async getLottoNumbers() {
    await this.getWinningNumbers();
    await this.getBonusNumber();
  }

  async getWinningNumbers() {
    try {
      const numbers = await inputView.readLine(LOTTO_MESSAGE.get_winning_numbers);
      const numbersArray = numbers.split(',');
      this.#winnings = new Lotto(numbersArray);
      outputView.lineBreak();
    } catch (error) {
      outputView.print(error.message);
      await this.getWinningNumbers();
    }
  }

  async getBonusNumber() {
    try {
      const number = await inputView.readLine(LOTTO_MESSAGE.get_bonus_number);
      this.#bonus = new Bonus(number);
  
      if (this.#winnings.getWinningNumbers().includes(this.#bonus.getBonusNumber())) {
        throw new Error(ERROR_MESSAGE.exists_duplication);
      }
      outputView.lineBreak();
    } catch (error) {
      outputView.print(error.message);
      await this.getBonusNumber();
    }
  }

  printResult() {
    outputView.print(LOTTO_MESSAGE.print_start_result);
    this.calculateWinnings();
    this.#winningsCount.map((item, idx) => this.printWinningList(item, idx));
    this.printRateOfReturn();
  }

  async calculateWinnings() {
    this.#winningsCount = Array.from(GameController.initialWinningsCount);
    const LottoArray = this.#lottoCount.getLottoArray();
    const winnings = this.#winnings.getWinningNumbers();

    for (const item of LottoArray){
      this.calculateEachwinnings(item, winnings);
    }
  }

  calculateEachwinnings(item, winnings) {
    const commonNumbers = item.filter(value => winnings.includes(String(value)));
    let totals = commonNumbers.length;
    if (totals === 6) {
      this.#winningsCount[4] += 1;
      return ;
    } 
    totals += Number(item.includes(Number(this.#bonus.getBonusNumber())));
    if (totals >=3){
      this.#winningsCount[totals-3] += 1;
    }
  }

  printWinningList(count, index) {
    return outputView.print(LOTTO_MESSAGE.print_winnings(GameController.WINNING_NUMBER_LIST[index], GameController.WINNING_AMOUNT_LIST[index], count));
  }

  printRateOfReturn() {
    let totalReturn = 0;
    this.#winningsCount.map((item, idx) => {
        totalReturn += item * parseInt(GameController.WINNING_AMOUNT_LIST[idx].replace(/,/g, ''), 10)
    })
    outputView.print(LOTTO_MESSAGE.print_return_rate(totalReturn*100/this.#lottoCount.getMoney()))
  }
}

export default GameController;