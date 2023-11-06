import { LOTTO_MESSAGE } from "../constants/lottoMessage.js";
import { inputView } from "../views/inputView.js";
import LottoCount from '../models/LottoCount.js'

class GameController {
  #lottoCount;

  async play(){
    this.buyLotto()
  }

  async buyLotto() {
    const amount = await inputView.readLine(LOTTO_MESSAGE.get_purchase_amount);
    this.#lottoCount = new LottoCount(amount);
  }
}

export default GameController;