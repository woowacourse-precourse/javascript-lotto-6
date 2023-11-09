import Validations from '../src/Validations.js';
import Lotto from '../src/Lotto.js';
import LottoTotal from '../src/models/LottoTotal.js';

const mockLotto = new Lotto([1,2,3,4,5,6])

describe('보너스 번호 테스트', () => {
  test.each([['10 00', ' 2000 ', ' 30 000']])('공백이 없는지', bonusNumber => {
    expect(() => {
      // eslint-disable-next-line no-new
      new LottoTotal(mockLotto, bonusNumber);
    }).toThrow('[ERROR] 공백 없이 입력해 주세요.');
  });

  test.each([['1000s', '2s000', 's30000', '']])('숫자가 맞는지', bonusNumber => {
    expect(() => {
      // eslint-disable-next-line no-new
      new LottoTotal(mockLotto, bonusNumber);
    }).toThrow('[ERROR] 숫자만 입력해 주세요.');
  });

  test.each([['0', '-10', '455']])('1~45 사이의 숫자가 맞는지', bonusNumber => {
    expect(() => {
      // eslint-disable-next-line no-new
      new LottoTotal(mockLotto, bonusNumber);
    }).toThrow('[ERROR] 1~45 사이의 숫자만 입력해주세요.');
  });

  test.each([['15.1', '12.2', '6.3']])('소수점이 없는지', bonusNumber => {
    expect(() => {
      // eslint-disable-next-line no-new
      new LottoTotal(mockLotto, bonusNumber);
    }).toThrow('[ERROR] 정수만 입력해주세요.');
  });

  test.each([['1', '2', '3']])('당첨 번호와 중복되지 않는지', bonusNumber => {
    expect(() => {
      // eslint-disable-next-line no-new
      new LottoTotal(mockLotto, bonusNumber);
    }).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });
});
