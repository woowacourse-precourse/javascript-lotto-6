import validateBonusNumber from '../src/validation/validateBonusNumber';

describe('보너스 번호 입력 테스트', () => {
  test('숫자가 아닌 것을 입력하면 예외가 발생한다.', () => {
    // given
    const bonusNumberInput = 'abcde';
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // when
    const output = validateBonusNumber(bonusNumberInput, winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('빈 문자열을 입력하면 예외가 발생한다.', () => {
    // given
    const bonusNumberInput = '';
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // when
    const output = validateBonusNumber(bonusNumberInput, winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('0으로 시작하는 숫자를 입력하면 예외가 발생한다.', () => {
    // given
    const bonusNumberInput = '034';
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // when
    const output = validateBonusNumber(bonusNumberInput, winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('범위에서 벗어난 번호를 입력하면 예외가 발생한다.', () => {
    // given
    const bonusNumberInput = 876;
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // when
    const output = validateBonusNumber(bonusNumberInput, winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('당첨 번호 중 하나와 겹치는 번호를 입력하면 예외가 발생한다.', () => {
    // given
    const bonusNumberInput = 6;
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // when
    const output = validateBonusNumber(bonusNumberInput, winningNumbers);

    // then
    expect(output).toEqual(false);
  });

  test('올바른 입력의 예시', () => {
    // given
    const bonusNumberInput = 34;
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // when
    const output = validateBonusNumber(bonusNumberInput, winningNumbers);

    // then
    expect(output).toEqual(true);
  });
});
