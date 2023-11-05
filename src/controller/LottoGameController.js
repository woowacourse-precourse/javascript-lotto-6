import { inputBuyAmount } from '../view/View.js';

export default class LottoGameController {
  #buyAmount;

  async play() {
    inputBuyAmount();
  }
}
