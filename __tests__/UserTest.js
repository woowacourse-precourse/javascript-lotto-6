import { MissionUtils } from '@woowacourse/mission-utils';
import User from '../src/User.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('User 클래스 테스트', () => {
  test('구매 금액에 맞는 로또 수량이 생성됐는지 테스트', () => {
    const user = new User(1000);
    expect(user.lottos.length).toBe(1);
  });

  test('생성된 로또가 오름차순으로 정렬되는지 테스트', () => {
    const randoms = [[4, 12, 2, 25, 38, 3]];
    const expected = [[2, 3, 4, 12, 25, 38]];

    mockRandoms([...randoms]);
    const user = new User(1000);
    const lottoNumbers = user.lottos.map((lotto) => lotto.getNumbers());

    lottoNumbers.forEach((lottoNumber, index) => expect(lottoNumber).toEqual(expected[index]));
  });

  test('생성된 로또를 출력 형식에 맞게 문자열로 반환하는지 테스트', () => {
    const randoms = [[2, 3, 4, 12, 25, 38]];
    const expected = ['[2, 3, 4, 12, 25, 38]'];

    mockRandoms([...randoms]);
    const user = new User(1000);
    const lottoNumbersStringArray = user.getLottoStringArray();

    lottoNumbersStringArray.forEach((lottoNumberString, index) =>
      expect(lottoNumberString).toEqual(expected[index]),
    );
  });

  test('사용자가 생성한 모든 로또를 추첨했을 때 올바른 결과를 반환하는지 테스트', () => {
    const mainNumbersArray = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const randoms = [
      [1, 2, 3, 8, 9, 10],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
    ];

    mockRandoms([...randoms]);
    const user = new User(5000);
    user.raffleLottos(mainNumbersArray, bonusNumber);

    const testCases = [user.printStatistic(), user.calculateReward(), user.calculateEarningRate()];
    const expectedResult = [[1, 1, 1, 1, 1], 2_031_555_000, '40631100.0'];

    testCases.forEach((testCase, index) => expect(testCase).toEqual(expectedResult[index]));
  });

  test('수익률을 소수점 둘째 자리에서 반올림하는 기능 테스트(둘재 자리가 올림 되는 경우와 내림 되는 경우)', () => {
    const mainNumbersArray = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const floorRandomCase = [
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
      [1, 2, 7, 8, 9, 10],
    ];
    const ceilRandomCase = [
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 8, 9],
      [7, 8, 9, 10, 11, 12],
    ];

    const expectedResult = ['1833.3', '51666.7'];
    mockRandoms([...floorRandomCase, ...ceilRandomCase]);
    const users = [new User(3000), new User(3000)];

    users.forEach((user, index) => {
      user.raffleLottos(mainNumbersArray, bonusNumber);
      expect(user.calculateEarningRate()).toBe(expectedResult[index]);
    });
  });
});
