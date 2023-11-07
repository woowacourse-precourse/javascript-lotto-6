import { Console } from '@woowacourse/mission-utils';

import MESSAGES from '../constants/messages.js';

const OutputView = Object.freeze({
  print(message) {
    Console.print(message);
  },

  lottoQuantity(quantity) {
    this.print(MESSAGES.printLottoQuantity(quantity));
  },

  userLotto(lottos) {
    this.print(MESSAGES.printLottos(lottos));
  },

  winningStatistics() {
    this.print(MESSAGES.printWinningStatistics);
  },

  rewards(rewards) {
    rewards.forEach((reward) => this.print(MESSAGES.printReward(reward)));
  },

  earningRate(earningRate) {
    this.print(MESSAGES.printEarningRate(earningRate));
  },

  error(error) {
    this.print(error);
  },
});

export default OutputView;
