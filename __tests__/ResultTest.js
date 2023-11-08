import { LOTTO } from '../src/constant/constant.js';
import Result from '../src/model/Result.js';

describe('Result 클래스 테스트', () => {
  let result;
  const LOTTOS = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 7],
  ];
  const WIN_LOTTO = [1, 2, 3, 4, 5, 6];
  const BONUS_LOTTO = 7;

  beforeEach(() => {
    result = new Result(LOTTOS, WIN_LOTTO, BONUS_LOTTO);
  });

  test('로또 당첨 1등 1개, 2등 1개일 경우 총 당첨액을 반환한다.', () => {
    expect(result.getTotalPrize()).toBe(LOTTO.firstPrize + LOTTO.secondPrize);
  });

  test('로또 당첨 1등1개, 2등 1개일 경우 출력 메세지를 반환한다.', () => {
    const expectedMessages = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];
    expect(result.getResultMessages()).toEqual(expectedMessages);
  });
});
