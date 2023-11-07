import { Console } from "@woowacourse/mission-utils";
import { GAME_INFO } from "./constant/GAME_INFO.js";

export const input = {
  async getInputPurchasePrice() {
    const purchasePrice = await Console.readLineAsync(
      GAME_INFO.INPUT_PURCHASE_PRICE
    );
    return await Number(purchasePrice);
  },

  async getInputLotto() {
    let lottoArray = await Console.readLineAsync(GAME_INFO.INPUT_LOTTO);
    lottoArray = await lottoArray.toString().split(",").map(Number);
    return lottoArray;
  },

  async getInputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      GAME_INFO.INPUT_BONUS_NUMBER
    );
    return await Number(bonusNumber);
  },
};
