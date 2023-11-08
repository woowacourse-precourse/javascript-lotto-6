import WinningLotto from '../src/WinningLotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호가 6개가 아닌 경우 예외가 발생한다.', () => {
    const input = ['1', '2', '3', '4', '5'];

    expect(() => {
      new WinningLotto(input);
    }).toThrowError('[ERROR]');
  });

  test('로또 번호가 숫자가 아닌 경우 예외가 발생한다', () => {
    const input = ['1', '2', '3', '4', '5', 's'];

    expect(() => {
      new WinningLotto(input);
    }).toThrowError('[ERROR] 숫자를 입력해주세요.');
  });

  test('1부터 45 사이의 숫자가 아닌 경우 예외가 발생한다', () => {
    const input = ['1', '2', '3', '4', '5', '46'];

    expect(() => {
      new WinningLotto(input);
    }).toThrowError('[ERROR] 1부터 45 사이의 숫자를 입력해주세요.');
  });

  test('중복된 숫자가 있는 경우 예외가 발생한다', () => {
    const input = ['1', '1', '2', '3', '4', '5'];

    expect(() => {
      new WinningLotto(input);
    }).toThrowError('[ERROR] 중복된 숫자가 있는지 확인해주세요.');
  });

  test.each(['test', '46', '6'])(
    '보너스 번호가 숫자가 아닌 경우 예외가 발생한다.',
    (input) => {
      const lotto = ['1', '2', '3', '4', '5', '6'];
      const winningLotto = new WinningLotto(lotto);
      expect(() => {
        winningLotto.validateBonusLotto(input);
      }).toThrow();
    }
  );
});
