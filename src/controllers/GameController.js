import { LOTTO_MESSAGE } from "../constants/lottoMessage.js";
import { inputView } from "../views/inputView.js";
import LottoCount from '../models/LottoCount.js'
import Lotto from "../models/Lotto.js";
import { outputView } from "../views/outputView.js";

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
    this.getWinningNumbers();
    this.getBonusNumber();
  }

  async getWinningNumbers() {
    const numbers = await inputView.readLine(LOTTO_MESSAGE.get_winning_numbers);
    const numbersArray = numbers.split(',');
    this.#winnings = new Lotto(numbersArray);
    outputView.lineBreak();
  }

  async getBonusNumber() {

  }
}

export default GameController;