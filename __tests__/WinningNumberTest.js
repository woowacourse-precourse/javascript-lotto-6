import WinningNumber from '../src/WinningNumber';

describe('위닝 넘버 클래스 테스트', () => {
  describe('당첨 번호 테스트', () => {
    test('당첨 번호의 개수가 6개 넘어가면 예외가 발생한다.', () => {
      // given
      const numbers = [1, 2, 3, 4, 5, 6, 7];
      const winningNumber = new WinningNumber();

      // when
      const result = () => winningNumber.setWinningNumbers(numbers);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      // given
      const numbers = [1, 2, 3, 4, 5, 5];
      const winningNumber = new WinningNumber();

      // when
      const result = () => winningNumber.setWinningNumbers(numbers);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('숫자가 아니면 예외가 발생한다.', () => {
      // given
      const numbers = [1, 2, 'a', 4, 5, '가'];
      const winningNumber = new WinningNumber();

      // when
      const result = () => winningNumber.setWinningNumbers(numbers);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('정수가 아니면 예외가 발생한다.', () => {
      // given
      const numbers = [1, 2, 3.3, 4, 5, 6];
      const winningNumber = new WinningNumber();

      // when
      const result = () => winningNumber.setWinningNumbers(numbers);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('범위 밖의 숫자면 예외가 발생한다.', () => {
      // given
      const numbers = [0, 1, 2, 3, 4, 5];
      const winningNumber = new WinningNumber();

      // when
      const result = () => winningNumber.setWinningNumbers(numbers);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('중복되지 않은 6자리 당첨번호면 올바른 값이 저장된다.', () => {
      // given
      const numbers = [1, 2, 3, 4, 5, 6];
      const winningNumber = new WinningNumber();

      // when
      winningNumber.setWinningNumbers(numbers);

      // then
      expect(winningNumber.getWinningNumbers()).toEqual(numbers);
    });
  });

  describe('보너스 번호 테스트', () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
      // given
      const bonusNumber = Number('as');
      const winningNumber = new WinningNumber();

      winningNumber.setWinningNumbers(numbers);

      // when
      const result = () => winningNumber.setBonusNumber(bonusNumber);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('보너스 번호 정수가 아니면 예외가 발생한다.', () => {
      // given
      const bonusNumber = 10.5;
      const winningNumber = new WinningNumber();

      winningNumber.setWinningNumbers(numbers);

      // when
      const result = () => winningNumber.setBonusNumber(bonusNumber);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('보너스 번호 범위 밖의 숫자면 예외가 발생한다.', () => {
      // given
      const bonusNumber = 1000;
      const winningNumber = new WinningNumber();

      winningNumber.setWinningNumbers(numbers);

      // when
      const result = () => winningNumber.setBonusNumber(bonusNumber);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('보너스 번호와 당첨 번호가 중복되면 예외가 발생한다.', () => {
      // given
      const bonusNumber = 1;
      const winningNumber = new WinningNumber();

      winningNumber.setWinningNumbers(numbers);

      // when
      const result = () => winningNumber.setBonusNumber(bonusNumber);

      // then
      expect(result).toThrow('[ERROR]');
    });

    test('보너스 번호가 당첨번호와 중복되지 않고, 범위 안의 정수이면 올바르게 동작한다..', () => {
      // given
      const bonusNumber = 7;
      const winningNumber = new WinningNumber();

      winningNumber.setWinningNumbers(numbers);
      winningNumber.setBonusNumber(bonusNumber);

      // when
      const result = winningNumber.getBonusNumber();

      // then
      expect(result).toEqual(bonusNumber);
    });
  });
});
