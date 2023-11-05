import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printErrorMessage(error) {
    Console.print(`${error}\n`);
  }

  static printPurchaseMessage(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  static printIssuedLottoNumbers(numbers) {
    Console.print(numbers);
  }
}

export default OutputView;
