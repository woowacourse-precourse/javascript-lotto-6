import { MissionUtils } from "@woowacourse/mission-utils";
import LottoTickets from "../src/LottoTickets";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 발행 테스트", () => {
  test('발행된 로또와 일치함', () => {
    const randoms = [[1, 5, 9, 16, 25, 33], [1, 2, 3, 4, 5, 6]]

    mockRandoms(randoms)

    const input = new LottoTickets(2000).publishTickets();
    expect(input).toEqual(randoms);
  });
})