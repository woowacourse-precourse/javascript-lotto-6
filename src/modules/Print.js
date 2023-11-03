import { Console } from '@woowacourse/mission-utils';

const PURCHASED_LOTTO_FORMAT = '개를 구매했습니다.';
const LOTTO_FRONT_COVER = '[';
const LOTTO_BEHIND_COVER = ']';
class Print {
  static purchasedLotto(lottoArray) {
    Console.print(`${lottoArray.length}${PURCHASED_LOTTO_FORMAT}`);
    lottoArray.forEach(Print.lottoNumbers);
  }

  static lottoNumbers(lotto) {
    Console.print(
      `${LOTTO_FRONT_COVER}${lotto
        .getNumbers()
        .join(', ')}${LOTTO_BEHIND_COVER}`
    );
  }

  static errorMessage(error) {
    Console.print(error.message);
  }
}

export default Print;
