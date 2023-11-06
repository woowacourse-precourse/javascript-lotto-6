import { Console } from "@woowacourse/mission-utils";
import { GAME_INFO } from "./constant/GAME_INFO.js";

export const input = {
  getInputBuyPrice() {
    const BuyPrice = Console.readLineAsync(GAME_INFO.INPUT_BUY_PRICE);
    return BuyPrice;
  },

  getInputLotto() {
    const LottoArray = Console.readLineAsync(GAME_INFO.INPUT_LOTTO);
    return LottoArray;
  },

  getInputBonusNumber() {
    const BonusNumber = Console.readLineAsync(GAME_INFO.INPUT_BONUS_NUMBER);
    return BonusNumber;
  },
};
