import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printError(errorMessage) {
    Console.print(`${errorMessage}`);
  },

  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  },
};

export default OutputView;
