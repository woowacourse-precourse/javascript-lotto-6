import WinningNumber from '../src/WinningNumber';

describe('위닝 넘버 클래스 테스트', () => {
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
    expect(winningNumber.getWinningNumber()).toEqual(numbers);
  });
});
