import validateInputAmount from '../src/validations/validateInputAmount';

const ERROR_PREFIX = '[ERROR]';

describe('로또 금액 유효성 검사', () => {
  test('1000 이상, 100_000 이하의 정수는 true를 반환', () => {
    // Arrange
    const input = 3000;

    // Act
    const result = validateInputAmount(input);

    // Assert
    expect(result).toBe(true);
  });

  test('정수가 아닌 값이 입력되면 예외 발생', () => {
    // Arrange
    const input = 'test';

    // Act
    const resultFn = () => validateInputAmount(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('100_000을 초과한 정수가 입력되면 예외 발생', () => {
    // Arrange
    const input = 110_000;

    // Act
    const resultFn = () => validateInputAmount(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('1000 미만의 정수가 입력되면 예외 발생', () => {
    // Arrange
    const input = 500;

    // Act
    const resultFn = () => validateInputAmount(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('1000 단위가 아닌 정수가 입력되면 예외 발생', () => {
    // Arrange
    const input = 10500;

    // Act
    const resultFn = () => validateInputAmount(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });
});
