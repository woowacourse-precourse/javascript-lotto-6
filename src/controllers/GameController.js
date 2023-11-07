import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import { Validator } from "../utils/Validator.js";
import { LottoPrice } from "../utils/LottoPrice.js";
import { Print } from "../constants/constant.js";

export const GameController = {
  async getLottoTiket() {
    try {
      const LOTTO = await InputView.getLotto();
      Validator.isPrice(LOTTO);
      const LOTTO_PAPER = LottoPrice.price(LOTTO);
      OutputView.print(String(LOTTO_PAPER) + Print.buy_Tiket);
      return LOTTO_PAPER;
    } catch (error) {
      OutputView.print(error.message);
      return this.getLottoTiket();
    }
  },
};
