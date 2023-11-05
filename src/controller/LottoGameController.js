import { inputBuyAmount } from '../view/View.js';

export default class LottoGameController {
  #buyLottoAmount;

  async play() {
    inputBuyAmount();
  }
}
