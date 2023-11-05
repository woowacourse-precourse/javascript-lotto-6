import { Console, PRINT_PURCHASE_COUNT } from './Constant';

const OutputView = {
  printLottoCount(lottoList) {
    Console.print(`${lottoList.length}${PRINT_PURCHASE_COUNT}`);
  },

  printLotto(lotto) {
    Console.print(lotto);
  },
};

export default OutputView;
