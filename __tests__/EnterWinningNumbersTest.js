import validateWinningNumbers from '../src/validation/validateWinningNumbers.js';

describe('당첨 번호 입력 테스트', () => {
  test('숫자가 아닌 것이 있으면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 'hi'];

    // when
    const output = validateWinningNumbers(winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('빈 문자열인 것이 있으면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, ''];

    // when
    const output = validateWinningNumbers(winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('공백이 포함된 것이 있으면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, '7 8'];

    // when
    const output = validateWinningNumbers(winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('중복되는 것이 있으면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 3];

    // when
    const output = validateWinningNumbers(winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('범위에서 벗어나는 것이 있으면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 877];

    // when
    const output = validateWinningNumbers(winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('0으로 시작하는 숫자가 있으면 예외가 발생한다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, '034'];

    // when
    const output = validateWinningNumbers(winningNumbers);

    // then
    expect(output).toEqual(false);
  });
});
