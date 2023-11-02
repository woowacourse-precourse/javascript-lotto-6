import ErrorCheck from '../../src/modules/ErrorCheck';

describe('ErrorCheck 테스트', () => {
  test.each([
    ['123', false],
    ['', true],
    ['true', true],
    [' ', true],
    ['+', true],
  ])('stringToNumber()', (input, isThrowing) => {
    const targetFunction = () => ErrorCheck.integerString(input);
    if (isThrowing) expect(targetFunction).toThrow();
    if (!isThrowing) expect(targetFunction).not.toThrow();
  });
});
