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
});
