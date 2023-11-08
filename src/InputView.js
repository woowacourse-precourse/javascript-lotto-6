import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MSG } from './constant.js';

const inputView = {
  async purchaseInput() {
    const inputPurchase = await MissionUtils.Console.readLineAsync(INPUT_MSG.PURCHASE);
    return inputPurchase;
  },

  async winningNumInput() {
    const inputwinningNum = await MissionUtils.Console.readLineAsync(INPUT_MSG.WINNING_NUM);
    return inputwinningNum;
  },

  async bonusNumInput() {
    const inputbonusNum = await MissionUtils.Console.readLineAsync(INPUT_MSG.BONUS_NUM);
    return inputbonusNum;
  },
};

export default inputView;