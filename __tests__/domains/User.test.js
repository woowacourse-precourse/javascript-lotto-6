import { BalanceTypeError } from '../../src/error/CustomErrors.js';
import User from '../../src/domains/User.js';

import { MissionUtils } from '@woowacourse/mission-utils';
import WinningLotto from '../../src/domains/WinningLotto.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('User - constructor 메소드 : 구입 금액 유효성 검사 테스트', () => {
  test.each(
    ['오백원', '0', '1000.5', '400', '3578', '-2000']
  )('구입 금액이 1000의 배수인 자연수가 아닌 경우, BalanceTypeError을 반환한다.', (input) => {
    const result = () => new User(input);

    expect(result).toThrowError(BalanceTypeError);
  });
});

describe('User - buyLottos 메소드 : 로또 구입 수량 테스트', () => {
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

describe('User - setPrizes, getPrizes, getReturnRate 메소드 : 로또 당첨 결과 관련 반환 테스트', () => {
  const winning = new WinningLotto();
  const INPUT_BALANCE = '6000';
  const INPUT_NUMBERS = '1,2,3,4,5,6';
  const INPUT_BONUS = '7';

  winning.setNumbers(INPUT_NUMBERS);
  winning.setBonus(INPUT_BONUS);

  const RESULT_PRIZES = {
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 2,
  };
  const RANDOMS = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 7],
    [1, 2, 3, 4, 5, 10],
    [1, 2, 3, 4, 10, 15],
    [1, 2, 3, 10, 15, 20],
    [4, 5, 6, 10, 15, 20],
    [10, 15, 20, 25, 30, 35],
  ];
  const RESULT_RETURNRATE = '33859333.3';

  const user = new User(INPUT_BALANCE);

  test('User의 당첨 등수를 올바르게 반환해야 한다.', () => {
    mockRandoms(RANDOMS);

    user.buyLottos();
    user.setPrizes(winning);
    const result = user.getPrizes();

    expect(result).toEqual(RESULT_PRIZES);
  });

  test('User의 수익률을 올바르게 반환해야 한다.', () => {
    const result = user.getReturnRate();

    expect(result).toEqual(RESULT_RETURNRATE);
  });
});
