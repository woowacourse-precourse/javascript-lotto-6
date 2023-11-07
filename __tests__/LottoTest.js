import ERROR_MESSAGE from '../src/constant/ErrorMessage.js';
import Lotto from '../src/Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.invalidListSize);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.duplicateNumber);
  });

  test('로또 번호에 범위 밖 숫자가 있으면 예외가 발생한다. (정수)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 450]);
    }).toThrow(ERROR_MESSAGE.outOfRange);
  });

  test('로또 번호에 범위 밖 숫자가 있으면 예외가 발생한다. (소수)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 1.234]);
    }).toThrow(ERROR_MESSAGE.outOfRange);
  });

  test('로또 번호를 형식에 맞게 출력하기', () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = '[1, 2, 3, 4, 5, 6]';
    lotto.print();

    expect(logSpy).toHaveBeenCalledWith(result);
  });
});
