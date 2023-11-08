import LottoCalculator from '../src/Domain/LottoCalculator';
import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성 => 통과 ✅
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  describe('로또 클래스 내부에 등수를 계산해서 반환하는 로직 테스트', () => {
    test.each([
      [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7, 1],
      [[1, 2, 3, 4, 5, 8], [1, 2, 3, 4, 5, 6], 8, 2],
      [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 8], 7, 3],
      [[1, 2, 3, 11, 12, 13], [1, 2, 3, 11, 15, 16], 4, 4],
      [[1, 2, 3, 11, 12, 13], [1, 2, 3, 4, 15, 16], 20, 5],
      [[6, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, 6],
      [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], 12, 6],
    ])(
      '로또 추첨번호 %s, 일반 당첨 번호 %s, 보너스 번호 %s, 등수 결과 : %s 등',
      (purchased, winningNumbers, bonusNumber, expected) => {
        const lotto = new Lotto(purchased);
        const winningLottos = new LottoCalculator(winningNumbers);
        winningLottos.bonus = bonusNumber;
        expect(lotto.calculatePrize(winningLottos)).toBe(expected);
      },
    );
  });
});
