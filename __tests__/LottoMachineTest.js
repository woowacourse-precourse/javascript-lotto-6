import LottoMachine from '../src/LottoMachine.js';
import { LOTTO_NUMBER } from '../src/constants/constant.js';
import lottoRandomNumberGenerator from '../src/util/lottoRandomNumberGenerator.js';

describe('lottoMachine.generateLottos 테스트', () => {
  test.each([
    ['3000', 3],
    ['12000', 12],
    ['5000', 5],
    ['152000', 152],
  ])('금액에 맞게 로또 개수를 계산하는 테스트', (input, expected) => {
    //given
    const lottoMachine = new LottoMachine();

    // when
    const result = lottoMachine.generateLottos(input);

    // then
    expect(result).toHaveLength(expected);
  });

  test('randomNumber의 번호 개수, 최소값 및 최대값 테스트', () => {
    // when
    const randomNumber = lottoRandomNumberGenerator.generate();

    // then
    expect(randomNumber).toHaveLength(LOTTO_NUMBER.LENGTH);
    randomNumber.forEach(
      (number) =>
        expect(number).toBeGreaterThanOrEqual(LOTTO_NUMBER.MIN) &&
        expect(number).toBeLessThanOrEqual(LOTTO_NUMBER.MAX)
    );
  });
});
