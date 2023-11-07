import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import { Validator } from "../utils/Validator.js";
import { LottoPrice } from "../utils/LottoPrice.js";
import { formatLottoNumber } from "../utils/formatLottoNumber.js";
import { Print } from "../constants/constant.js";
import { RandomLottoGenerator } from "../utils/RandomLottoGenerator.js";
import Lotto from "../models/Lotto.js";

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

  async getLottoList(tikets) {
    const LOTTO_BOX = [];
    for (let i = 0; i < tikets; i++) {
      let lotto_Number = RandomLottoGenerator();
      Validator.isLotteryNumber(lotto_Number);
      LOTTO_BOX.push(formatLottoNumber(lotto_Number));
    }
    OutputView.printLottoTikets(LOTTO_BOX);
    return LOTTO_BOX;
  },

  async getLottoWinningNumbers() {
    try {
      let lottery_Number = await InputView.getLotteryNumberArray();
      Validator.isLotteryNumber(lottery_Number);
      return lottery_Number;
    } catch (error) {
      OutputView.print(error.message);
      return this.getLottoWinningNumbers();
    }
  },

  async getBonusNumber(LOTTERY_NUMBERS) {
    try {
      let bonus_Number = await InputView.getBonusNumber();
      Validator.isBonusNumber(bonus_Number, LOTTERY_NUMBERS);
      return bonus_Number;
    } catch (error) {
      OutputView.print(error.message);
      return this.getBonusNumber(LOTTERY_NUMBERS);
    }
  },

  lottoResults(TIKET, LOTTO_LIST, lottery_Number, bonus_Number) {
    const LOTTO_GAME = new Lotto();
    LOTTO_LIST.forEach((LOTTO) => {
      LOTTO_GAME.matchLottoNumbers(LOTTO, lottery_Number, bonus_Number);
    });
    LOTTO_GAME.printTotalPrize(TIKET);
  },
};
