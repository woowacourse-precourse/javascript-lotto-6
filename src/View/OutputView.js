import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/constants.js';

class OutputView {
  static printLottoNumbers(amount, lottoList) {
    Console.print(`\n${amount} ${MESSAGE.OUTPUT_LOTTO}`);
    for (const lotto of lottoList) {
      Console.print(lotto);
    }
  }

  static printPrize(prize) {
    const prizeDescriptions = [
      { key: 3, value: '3개 일치 (5,000원) - ' },
      { key: 4, value: '4개 일치 (50,000원) - ' },
      { key: 5, value: '5개 일치 (1,500,000원) - ' },
      { key: 5.5, value: '5개 일치, 보너스 볼 일치 (30,000,000원) - ' },
      { key: 6, value: '6개 일치 (2,000,000,000원) - ' },
    ];

    prizeDescriptions.forEach(description => {
      const count = prize[description.key];
      Console.print(description.value + count + '개');
    });
  }

  async printStatistics() {}
}
export default OutputView;
