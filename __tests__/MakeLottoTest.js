import { printLotto } from '../src/MakeLotto';
import { Console, Random } from "@woowacourse/mission-utils";

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
  Console: {
    print: jest.fn(),
  },
}));

describe('랜덤 로또 생성 테스트', () => {
  beforeEach(() => {
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
    Console.print.mockClear();
  });

  it('로또 개수에 맞게 출력되는지 테스트', () => {
    const numLotto = 5;
    const result = printLotto(numLotto);

    expect(result.length).toBe(numLotto);
    expect(result[0]).toEqual([1, 2, 3, 4, 5, 6]);
    expect(Console.print).toHaveBeenCalledTimes(numLotto + 2);
  });
});