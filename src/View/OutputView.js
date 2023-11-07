import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static async printLottoNumbers(lottoList) {
    for (const lotto of lottoList) {
      Console.print(lotto);
    }
  }

  async printPrize() {}

  async printStatistics() {}
}
export default OutputView;
