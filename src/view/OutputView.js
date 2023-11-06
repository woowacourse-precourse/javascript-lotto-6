import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  /**
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  },

  /**
   * @param {number[]} userLottos
   */
  printLottos(userLottos) {
    this.print(`\n${userLottos.length}개를 구매했습니다.`);
    userLottos.forEach((userLotto) => {
      this.print(userLotto);
    });
  },
};

export default OutputView;
