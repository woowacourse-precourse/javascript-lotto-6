import { errorConstants } from '../src/constants/index.js';
import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test.each([[[1, 2, 3, 4, 5]], [[1, 'a', 's', 3, 4, 5]], [[1, 2, ,]]])(
    '잘못된 형태면 예외가 발생한다. (숫자 + 콤마 형태 or 길이가 다른 형태 or 숫자가 아닌형태',
    (lotto) => {
      expect(() => {
        new Lotto(lotto);
      }).toThrow(errorConstants.WRONG_INPUT);
    },
  );

  test('로또 번호에 0이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow(errorConstants.NOT_ZERO);
  });

  test('로또 번호가 범위내의 수가 아니면 예외가 발생한다. (1~45)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 67, 32]);
    }).toThrow(errorConstants.NOT_IN_RANGE);
  });

  test('로또 번호가 중복되는 수가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 1]);
    }).toThrow(errorConstants.NOT_SAME_NUMBER);
  });
});
