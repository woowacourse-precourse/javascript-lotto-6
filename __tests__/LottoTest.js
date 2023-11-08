import Lotto from '../src/lotto/Lotto.js';
import { ERROR_MESSAGE } from '../src/constant/constant.js';

jest.mock('@woowacourse/mission-utils');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생하는지 테스트', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.wrongLottoNumberCount);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생하는지 테스트', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.wrongLottoNumberInput);
  });
});

describe('로또 등수 판정 테스트', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const bonusNumberForSecond = 6;
  const lotto = new Lotto(numbers);

  const winningNumberList = {
    firstWinningNumbers: [1, 2, 3, 4, 5, 6],
    secondWinningNumbers: [1, 2, 3, 4, 5, 10],
    thirdWinningNumbers: [1, 2, 3, 4, 5, 12],
    fourthWinningNumbers: [1, 2, 3, 4, 7, 8],
    fifthWinningNumbers: [1, 2, 3, 7, 8, 9],
    nothingMatched: [1, 2, 10, 7, 8, 9],
  };

  test('1등 테스트', () => {
    expect(
      lotto.getRank(winningNumberList.firstWinningNumbers, bonusNumber),
    ).toBe('first');
  });

  test('2등 테스트', () => {
    expect(
      lotto.getRank(
        winningNumberList.secondWinningNumbers,
        bonusNumberForSecond,
      ),
    ).toBe('second');
  });

  test('3등 테스트', () => {
    expect(
      lotto.getRank(winningNumberList.thirdWinningNumbers, bonusNumber),
    ).toBe('third');
  });

  test('4등 테스트', () => {
    expect(
      lotto.getRank(winningNumberList.fourthWinningNumbers, bonusNumber),
    ).toBe('fourth');
  });

  test('5등 테스트', () => {
    expect(
      lotto.getRank(winningNumberList.fifthWinningNumbers, bonusNumber),
    ).toBe('fifth');
  });

  test('하나도 맞추지 못한 경우 테스트', () => {
    expect(lotto.getRank(winningNumberList.nothingMatched, bonusNumber)).toBe(
      undefined,
    );
  });
});