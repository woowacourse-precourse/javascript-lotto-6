import { Console } from '@woowacourse/mission-utils';

const PURCHASED_LOTTO_FORMAT = '개를 구매했습니다.';
class Print {
  static purchasedLotto(lottoArray) {
    Console.print(`${lottoArray.length}${PURCHASED_LOTTO_FORMAT}`);
    lottoArray.foreach(lotto => Console.print(lotto.getNumbers));
  }
}

export default Print;
