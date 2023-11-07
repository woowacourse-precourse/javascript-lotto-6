import { Console, PRINT_PURCHASE_COUNT, PRINT_WINNING_STATISTIC } from './Constant';

const OutputView = {
  printLottoCount(lottoList) {
    Console.print(`${lottoList.length}${PRINT_PURCHASE_COUNT}`);
  },

  printLotto(lotto) {
    Console.print(lotto);
  },

  printResultStastics(result) {
    Console.print(PRINT_WINNING_STATISTIC);
  },
};

export default OutputView;
