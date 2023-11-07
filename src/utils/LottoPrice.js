import { GameSetting } from "../constants/constant.js";

export const LottoPrice = {
  price(money) {
    return money / GameSetting.lotto_Price;
  },
};
