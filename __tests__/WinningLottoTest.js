import WinningLotto from '../src/WinningLotto.js';

describe('당첨 로또 클래스 테스트', () => {
  const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);

  describe('예외 테스트', () => {
    test.each([-3, 2.5, 46])(
      '보너스 번호가 1~45 사이 정수가 아니면 예외가 발생한다.',
      (number) => {
        expect(() => {
          winningLotto.bonusNumber = number;
        }).toThrow('[ERROR]');
      },
    );

    test('보너스 번호와 당첨 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      const duplicatedNumber = 1;
      expect(() => {
        winningLotto.bonusNumber = duplicatedNumber;
      }).toThrow('[ERROR]');
    });
  });
});
