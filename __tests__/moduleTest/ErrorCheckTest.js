import ErrorCheck from '../../src/modules/ErrorCheck';

describe('ErrorCheck 테스트', () => {
  test.each([
    ['123', false],
    ['', true],
    ['true', true],
    [' ', true],
    ['+', true],
    ['1.1', true],
    ['-10', true],
  ])('integerString()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.positiveIntegerString(input);
    if (isThrowing) expect(targetFunction).toThrow();
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });
});
