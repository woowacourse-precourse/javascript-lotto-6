import { ERROR, LOTTO_NUMBER } from '../src/constants/Constant.js';
import BonusNumber from '../src/model/BonusNumber.js';
import Lotto from '../src/Lotto.js';

describe('보너스 번호 클래스 검증 테스트', () => {
  const winningLottoNumbers = [1, 2, 3, 4, 5, 6];

  test.each([['yuna'], ['^0^'], ['']])('보너스 번호가 숫자가 아니면 예외가 발생한다.', (input) => {
    expect(() => {
      new BonusNumber(input, winningLottoNumbers);
    }).toThrow(ERROR.isNotNumber);
  });

  test.each([[-100], [0], ['-3.14']])('보너스 번호가 양수가 아니면 예외가 발생한다.', (input) => {
    expect(() => {
      new BonusNumber(input, winningLottoNumbers);
    }).toThrow(ERROR.isNotPositive);
  });

  test.each([[46], [1000], ['100000']])(
    `보너스 번호가 ${LOTTO_NUMBER.minNum}과 ${LOTTO_NUMBER.maxNum} 사이의 숫자가 아니면 예외가 발생한다.`,
    (input) => {
      expect(() => {
        new BonusNumber(input, winningLottoNumbers);
      }).toThrow(ERROR.isOutOfRange);
    },
  );

  test.each([[1], [2], [6]])('보너스 번호가 당첨 번호와 중복된다면 예외가 발생한다.', (input) => {
    // when & then
    expect(() => {
      new BonusNumber(input, winningLottoNumbers);
    }).toThrow(ERROR.hasDuplicate);
  });

  test.each([[32], [45], [17]])(
    `보너스 번호가 ${LOTTO_NUMBER.minNum}과 ${LOTTO_NUMBER.maxNum} 사이의 양수이고, 당첨 번호와 중복되지 않으면 예외가 발생하지 않는다.`,
    (input) => {
      expect(() => {
        new BonusNumber(input, winningLottoNumbers);
      }).not.toThrow();
    },
  );
});
