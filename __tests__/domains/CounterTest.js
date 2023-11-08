import Counter from '../../src/domains/Counter';
import { MissionUtils } from '@woowacourse/mission-utils';

const ERROR_PREFIX = '[ERROR]';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('카운터 클래스 테스트', () => {
  test('지불한 금액만큼 로또를 받아야 한다.', () => {
    // Arrange
    const inputAmount = 2000;

    const input = [
      [1, 2, 3, 4, 5, 6],
      [3, 4, 5, 6, 7, 8],
    ];
    mockRandoms(input);

    const output = [
      [1, 2, 3, 4, 5, 6],
      [3, 4, 5, 6, 7, 8],
    ];

    // Act
    const myLottos = new Counter(inputAmount).giveLotto();

    // Assert
    expect(myLottos).toEqual(output);
  });
  test('잘못된 로또 번호를 받으면 예외가 발생한다.', () => {
    // Arrange
    const inputAmount = 2000;

    const input = [
      [1, 2, 3, 4, 5, 5],
      [3, 4, 5, 6, 7, 8],
    ];
    mockRandoms(input);
    // Act
    const resultFn = () => new Counter(inputAmount).giveLotto();

    // Assert
    expect(resultFn).toThrow(ERROR_PREFIX);
  });
});
