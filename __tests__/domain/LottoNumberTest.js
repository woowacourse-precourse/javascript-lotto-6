import ERROR from '../../src/constant/Error.js';
import LOTTO from '../../src/constant/Lotto.js';
import LottoNumber from '../../src/domain/LottoNumber.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호에 nan이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoNumber('빢빢쎄');
    }).toThrow(ERROR.isNan);
  });

  test(`로또 번호가 ${LOTTO.minLottoNum} ~ ${LOTTO.maxLottoNum} 사이가 아니면 예외가 발생한다.`, () => {
    expect(() => {
      new LottoNumber(0);
    }).toThrow(ERROR.range);
  });
});
