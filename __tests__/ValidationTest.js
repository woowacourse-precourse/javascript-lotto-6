import validateBonusNumber from '../src/validations/validateBonusNumber';
import validateInputAmount from '../src/validations/validateInputAmount';
import validateWinningNumbers from '../src/validations/validateWinningNumbers';

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

describe('로또 당첨 번호 유효성 검사', () => {
  test('1 ~ 45 사이의 정수이면서 중복되지 않은 정수 6자리일 경우 true 반환', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5, 6];

    // Act
    const result = validateWinningNumbers(input);

    // Assert
    expect(result).toBe(true);
  });

  test('정수가 아닌 값이 포함되어 있는 경우 예외 발생', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5, 't'];

    // Act
    const resultFn = () => validateWinningNumbers(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('중복값이 포함되어 있는 경우 예외 발생', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5, 5];

    // Act
    const resultFn = () => validateWinningNumbers(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('6개의 정수가 아닌 경우 예외 발생', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5, 6, 7];

    // Act
    const resultFn = () => validateWinningNumbers(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('1 미만의 정수가 포함되어 있는 경우 예외 발생', () => {
    // Arrange
    const input = [-2, 1, 2, 3, 4, 5];

    // Act
    const resultFn = () => validateWinningNumbers(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('45 초과의 정수가 포함되어 있는 경우 예외 발생', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5, 50];

    // Act
    const resultFn = () => validateWinningNumbers(input);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });
});

describe('로또 보너스 번호 유효성 검사', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  test('1 ~ 45 사이의 정수이면서 당첨 번호와 중복되지 않는 하나의 정수일 경우 true 반환', () => {
    // Arrange
    const bonusNumber = 7;

    // Act
    const result = validateBonusNumber(winningNumbers, bonusNumber);

    // Assert
    expect(result).toBe(true);
  });

  test('정수가 아닌 값일 경우 예외 발생', () => {
    // Arrange
    const bonusNumber = 'test';

    // Act
    const resultFn = () => validateBonusNumber(winningNumbers, bonusNumber);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('당첨 번호와 중복된 값일 경우 예외 발생', () => {
    // Arrange
    const bonusNumber = 6;

    // Act
    const resultFn = () => validateBonusNumber(winningNumbers, bonusNumber);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('1 미만의 정수일 경우 예외 발생', () => {
    // Arrange
    const bonusNumber = -4;

    // Act
    const resultFn = () => validateBonusNumber(winningNumbers, bonusNumber);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('45 초과의 정수일 경우 예외 발생', () => {
    // Arrange
    const bonusNumber = 50;

    // Act
    const resultFn = () => validateBonusNumber(winningNumbers, bonusNumber);

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });
});
