import { MissionUtils } from "@woowacourse/mission-utils";
import draw from "../src/models/Draw.js";

const mockRandoms = (number) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  return MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(
    number
  );
};

describe("추첨 객체 테스트", () => {
  test("로또에서 당첨번호와 일치하는 개수를 구한다.", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const winning = [2, 4, 6, 7, 8, 9];
    const count = draw.countMatches(lotto, winning);

    expect(count).toEqual(3);
  });

  test("구매한 모든 로또에서 당첨번호와 3개 이상 일치하는 개수를 구한다.", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 10, 11],
      [13, 14, 15, 16, 17, 18],
    ];
    const winning = [2, 4, 6, 7, 8, 9];
    const matches = draw.getLottoMatches(lottos, winning);

    expect(matches).toEqual([1, 1, 0, 0]);
  });

  test("보너스 번호를 확인하고 2등 당첨 개수를 구한다.", () => {
    mockRandoms(3);

    let matches = [1, 1, 2, 0];
    const bonus = 3;
    const count = draw.getBonusMatches(matches, bonus);

    expect(count).toEqual(2);
  });
});
