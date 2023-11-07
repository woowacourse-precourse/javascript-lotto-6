import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static print(message) {
    Console.print(message);
  }

  static printLottoList(lottoList) {
    this.print(`\n${lottoList.length}개를 구매했습니다.`);
    lottoList.forEach((lotto) => this.print(lotto.getLottoNumbers()));
    this.print('');
  }
}
