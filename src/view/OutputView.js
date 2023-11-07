import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottosString: (count, lottos) => {
    Console.print(`\n${count}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(lotto.getNumbers()));
  },
};

export default OutputView;
