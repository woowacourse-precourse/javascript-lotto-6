import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const OutputView = Object.freeze({
  print(message) {
    Console.print(message);
  },

  lottoQuantity(quantity) {
    Console.print(MESSAGES.printLottoQuantity(quantity));
  },

  userLotto(lottos) {
    Console.print(MESSAGES.printLottos(lottos));
  },

  winningStatistics() {
    Console.print(MESSAGES.printWinningStatistics);
  },

  rewards(rewards) {
    rewards.forEach((reward) => Console.print(MESSAGES.printReward(reward)));
  },

  earningRate(earningRate) {
    Console.print(MESSAGES.printEarningRate(earningRate));
  },

  error(error) {
    Console.print(error);
  },
});

export default OutputView;
