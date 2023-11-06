import { Console } from "@woowacourse/mission-utils";
import { GAME_INFO } from "./constant/GAME_INFO.js";

export const input = {
  async getInputBuyPrice() {
    const buyPrice = await Console.readLineAsync(GAME_INFO.INPUT_BUY_PRICE);
    return await Number(buyPrice);
  },

  async getInputLotto() {
    let lottoArray = await Console.readLineAsync(GAME_INFO.INPUT_LOTTO);
    lottoArray = await lottoArray.toString().split(",").map(Number);
    return lottoArray;
  },

  getInputBonusNumber() {
    const bonusNumber = Console.readLineAsync(GAME_INFO.INPUT_BONUS_NUMBER);
    return bonusNumber;
  },
};
