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

  async play(){
    await this.buyLotto();
    await this.getLottoNumbers();
  }

  async buyLotto() {
    const amount = await inputView.readLine(LOTTO_MESSAGE.get_purchase_amount);
    this.#lottoCount = new LottoCount(amount);
  }

  async getLottoNumbers() {
    await this.getWinningNumbers();
    await this.getBonusNumber();
  }

  async getWinningNumbers() {
    const numbers = await inputView.readLine(LOTTO_MESSAGE.get_winning_numbers);
    const numbersArray = numbers.split(',');
    this.#winnings = new Lotto(numbersArray);
    outputView.lineBreak();
  }

  async getBonusNumber() {
    const number = await inputView.readLine(LOTTO_MESSAGE.get_bonus_number);
    this.#bonus = new Bonus(number);

    if (this.#winnings.getWinningNumbers().includes(this.#bonus.getBonusNumber())) {
        throw new Error(ERROR_MESSAGE.exists_duplication);
    }
    outputView.lineBreak();
  }
}

export default GameController;