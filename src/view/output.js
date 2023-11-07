import { Console } from '@woowacourse/mission-utils';

const MESSAGE = Object.freeze({
  TOTAL_LOTTO_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  LOTTO_NUMBER: (numbers) => `[${numbers.join(', ')}]`,
});
export default class Output {
  static purchasedLottoNumbers(lottos) {
    Console.print(MESSAGE.TOTAL_LOTTO_COUNT(lottos.length));
    lottos.forEach(Output.lottoNumbers);
  }
  static lottoNumbers(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const output = MESSAGE.LOTTO_NUMBER(lottoNumbers);

    Console.print(output);
  }
}
