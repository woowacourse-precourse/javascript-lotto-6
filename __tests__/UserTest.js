import { MissionUtils } from '@woowacourse/mission-utils';
import User from '../src/model/User';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('User 클래스 테스트', () => {
  test('구입 금액이 1000원 단위가 아니면 예외가 발상핸다.', () => {
    expect(() => {
      new User(7500);
    }).toThrow('[ERROR]');

    expect(() => {
      new User('7000');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1000원 단위로 로또를 구매하고 저장한다.', () => {
    const user = new User(8000);
    const LOTTOS_NUMBERS = [
      [1, 2, 3, 4, 5, 6],
      [10, 5, 40, 2, 11, 4],
      [11, 12, 13, 14, 15, 16],
      [1, 7, 9, 14, 15, 20],
      [40, 42, 45, 1, 5, 4],
      [7, 11, 15, 18, 22, 32],
      [27, 19, 23, 42, 41, 4],
      [2, 12, 42, 44, 32, 20],
    ];

    mockRandoms(LOTTOS_NUMBERS);

    user.purchaseLottos();
    const userLottos = user.getLottos();

    expect(userLottos.length).toBe(8);

    userLottos.forEach((lotto, index) => {
      expect(lotto.getNumbers()).toEqual(LOTTOS_NUMBERS[index]);
    });
  });
});
