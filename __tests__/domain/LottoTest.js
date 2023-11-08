import Lotto from '../../src/domain/Lotto.js';

describe('로또 클래스 테스트', () => {
  describe('로또 번호 검증 테스트', () => {
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

    test('당첨 번호가 1-45 범위를 벗어나면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 77]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 'a']);
      }).toThrow('[ERROR]');
    });
  });

  test('구매 금액에 따라 올바른 개수의 로또를 발행하는지 확인한다.', () => {
    const purchaseAmount = 8000;
    const lottos = Lotto.generateLottoNumber(purchaseAmount);
    expect(lottos.length).toBe(purchaseAmount / 1000);
  });

  test('로또 번호를 올바르게 정렬해 발행하는지 확인한다.', () => {
    const purchaseAmount = 8000;
    const lottos = Lotto.generateLottoNumber(purchaseAmount);

    lottos.forEach((lotto) => {
      const sortedNumber = [...lotto].sort((a, b) => a - b);
      expect(lotto).toEqual(sortedNumber);
    });
  });
});
