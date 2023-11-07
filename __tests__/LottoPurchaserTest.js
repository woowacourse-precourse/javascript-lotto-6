import LottoPurchaser from '../src/LottoPurchaser.js';
import { ERROR } from '../src/LottoMessage.js';
import WinningResults from '../src/WinningResults.js';

describe('로또 구매자 클래스 테스트', () => {
  describe('예외 관련 테스트', () => {
    test('로또 구입 금액이 빈 값이면 예외가 발생한다.', () => {
      expect(() => {
        new LottoPurchaser(Number(''));
      }).toThrow(ERROR.falsy);
    });
    test('로또 구입 금액이 0이면 예외가 발생한다', () => {
      expect(() => {
        new LottoPurchaser(Number(0));
      }).toThrow(ERROR.falsy);
    });
    test('로또 구입 금액이 숫자가 아니면 예외가 발생한다', () => {
      expect(() => {
        new LottoPurchaser(Number('천원'));
      }).toThrow(ERROR.falsy);
    });

    test('에러가 발생하지 않는 경우', () => {
      expect(() => new LottoPurchaser(1000)).not.toThrow();
      expect(() => new LottoPurchaser(2000)).not.toThrow();
      expect(() => new LottoPurchaser(10000)).not.toThrow();
    });
  });

  test('구입금액이 8000원이고 로또 당첨 결과가 5등 1개라면 수익률은 62.5%', () => {
    const winningResults = new WinningResults();
    winningResults.saveResultBy(3);
    const lottoPurchaser = new LottoPurchaser(8000, winningResults);
    expect(lottoPurchaser.getProfitRate()).toBe(62.5);
  });
});
