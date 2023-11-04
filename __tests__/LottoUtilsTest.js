import * as utils from '../src/LottoUtils';
import { LOTTO_LENGTH } from '../src/constants';
describe('로또 게임 유틸 함수 테스트', () => {
  test('랜덤값 6개를 중복없이 잘 가져오는지 확인', () => {
    const numbers = utils.getRandomNumbers();
    expect(numbers.length).toEqual(LOTTO_LENGTH);
    expect(new Set(numbers).size).toEqual(LOTTO_LENGTH);
  });

  test('로또를 잘 발행하는지 확인', () => {
    const lotto = utils.issueLotto();
    expect(typeof lotto).toEqual('object');
    expect(Array.isArray(lotto.getNumbers())).toBeTruthy();
  });
  test('구입한 갯수만큼 로또를 잘 발행하는지 확인', () => {
    const lotto_count = 5;
    expect(Array.isArray(utils.getLottos(lotto_count))).toBeTruthy();
  });
});
