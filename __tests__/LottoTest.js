import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 각 로또 번호는 중복이 불가합니다.');
  });

  test('로또 번호에 1~45사이의 정수 외의 수나 문자열이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -10]);
    }).toThrow('[ERROR] 1~45 사이의 정수만 입력 가능합니다.');
  });

  test('일치하는 번호가 3개 이하일 시, 모든 결과 값은 0이 출력된다.', () => {
    const logSpy = getLogSpy();
    // given
    const issued = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 7, 8],
    ];
    const winning = [7, 8, 9, 10, 11, 12];
    const bonus = 13;

    // when
    const lotto = new Lotto(winning);
    lotto.printResult(issued, bonus);

    // then
    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('일치하는 번호에 맞는, 각각의 일치 결과가 출력된다.', () => {
    const logSpy = getLogSpy();
    // given
    const issued = [
      [1, 2, 3, 7, 8, 9],
      [1, 2, 7, 8, 9, 10],
      [1, 7, 8, 9, 10, 11],
      [7, 8, 9, 10, 11, 12],
      [7, 8, 9, 10, 11, 13],
    ];
    const winning = [7, 8, 9, 10, 11, 12];
    const bonus = 13;

    // when
    const lotto = new Lotto(winning);
    lotto.printResult(issued, bonus);

    // then
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
