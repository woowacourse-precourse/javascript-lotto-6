import LottoCalculator from '../src/models/LottoCalculator.js';
import { OPTION } from '../src/constants/Lotto.js';

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
});
