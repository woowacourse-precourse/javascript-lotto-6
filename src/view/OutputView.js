import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  buyLotto(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  },

  issuedLotto(lotto) {
    Console.print(`[${lotto.sort((a, b) => a - b).toString()}]`);
  }
}

export default OutputView;