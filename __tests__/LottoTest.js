import Lotto from '../src/Lotto';

const ERROR_PREFIX = '[ERROR]';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5, 6, 7];
    // Act
    const resultFn = () => new Lotto(input);
    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5, 5];
    // Act
    const resultFn = () => new Lotto(input);
    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });
});
