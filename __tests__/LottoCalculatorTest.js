import { MissionUtils } from '@woowacourse/mission-utils';
import LottoCalculator from '../src/models/LottoCalculator.js';
import Lotto from '../src/models/Lotto.js';
import { OPTION } from '../src/constants/Lotto.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('LottoCalculator 클래스 테스트', () => {
  test(`로또 당첨 번호의 개수가 ${OPTION.BALL_COUNT}개가 아니면 예외가 발생한다.`, () => {
    expect(() => {
      new LottoCalculator().setWinningNumber(
        new Array(OPTION.BALL_COUNT + 1)
          .fill(0)
          .map((value, index) => index + 1),
        OPTION.BALL_COUNT + 2,
      );
    }).toThrow('[ERROR]');
  });

  test('로또 당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoCalculator().setWinningNumber(
        new Array(OPTION.BALL_COUNT).fill(1),
        2,
      );
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호중에 있다면 예외가 발생한다.', () => {
    expect(() => {
      new LottoCalculator().setWinningNumber(
        new Array(OPTION.BALL_COUNT).fill(0).map((value, index) => index + 1),
        OPTION.BALL_COUNT,
      );
    }).toThrow('[ERROR]');
  });

  /**
   * 테스트 케이스를 상수에 맞춰서 만들면 제대로된 테스트 케이스를 만들기에 어려움이 있어
   * 일반적인 로또의 룰인 당첨 번호 6개, 당첨 등수 5등까지로 가정하고 코드를 작성했습니다.
   */
  test('추첨 결과 통계', () => {
    const numbers = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [2, 3, 4, 5, 6, 8],
      [1, 3, 5, 6, 8, 9],
      [2, 3, 4, 5, 6, 8],
      [8, 10, 11, 12, 13, 14],
    ];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonus = 8;
    const result = [1, 1, 2, 1, 1, 0];
    const lottoCalculator = new LottoCalculator();
    lottoCalculator.setLottoes(numbers.map((number) => new Lotto(number)));
    lottoCalculator.setWinningNumber(winningNumber, bonus);

    expect(lottoCalculator.getResult()).toEqual(result);
  });
});
