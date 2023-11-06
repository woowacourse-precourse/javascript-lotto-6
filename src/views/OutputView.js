import { Console } from '@woowacourse/mission-utils';
import gameMessage from '../constants/gameMessages.js';

const OutputView = {
  quantity(quantity) {
    Console.print(gameMessage.OUTPUT.QUANTITY(quantity));
  },

  randomLottos(randomLottos) {
    randomLottos.forEach((randomLotto) => {
      Console.print(randomLotto);
    });
  },
};

export default OutputView;
