import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const OutputView = Object.freeze({
  print(message) {
    Console.print(message);
  },

  lottoQuantity(quantity) {
    OutputView.print(MESSAGES.printLottoQuantity(quantity));
  },

  userLotto(lottos) {
    OutputView.print(MESSAGES.printLottos(lottos));
  },

  winningStatistics() {
    OutputView.print(MESSAGES.printWinningStatistics);
  },

  rewards(rewards) {
    rewards.forEach((reward) => OutputView.print(MESSAGES.printReward(reward)));
  },

  error(error) {
    OutputView.print(error);
  },
});

export default OutputView;
