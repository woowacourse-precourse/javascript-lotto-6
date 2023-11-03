import { BalanceTypeError } from '../../src/error/Errors.js';
import User from '../../src/domains/User.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('User - 구입 금액 유효성 검사 테스트', () => {
  test.each(
    ['오백원', '0', '1000.5', '400', '3578', '-2000']
  )('구입 금액이 1000의 배수인 자연수가 아닌 경우, BalanceTypeError을 반환한다.', (input) => {
    const result = () => new User(input);

    expect(result).toThrowError(BalanceTypeError);
  });

  test.each(
    [['4000', 4],
    ['3000', 3],
    ['11000', 11],
    ['999000', 999]]
  )('User는 {구입 금액 / 1000} 만큼 로또를 구입한다.', (input, output) => {
    const user = new User(input);
    user.buyLottos();
    const result = user.getLottos().length;

    expect(result).toEqual(output);
  });
});
