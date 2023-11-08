import { Console } from "@woowacourse/mission-utils";
import { GAME_INFO } from "./constant/GAME_INFO.js";

export const Input = {
  async inputPurchasePrice() {
    const purchasePrice = await Console.readLineAsync(GAME_INFO.PURCHASE_PRICE);

    return await +purchasePrice;
  },

  async inputLotto() {
    let lottoArray = await Console.readLineAsync(GAME_INFO.LOTTO);
    lottoArray = await lottoArray.toString().split(",").map(Number);

    return lottoArray;
  },

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(GAME_INFO.BONUS_NUMBER);

    return await +bonusNumber;
  },
};
