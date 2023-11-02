import ErrorCheck from '../../src/modules/ErrorCheck';

describe('ErrorCheck 테스트', () => {
  test.each([
    ['123', false],
    ['', true],
    ['true', true],
    [' ', true],
    ['+', true],
    ['1.1', false],
    ['-10', false],
  ])('integerString()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.integerString(input);
    if (isThrowing) expect(targetFunction).toThrow();
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });
});
