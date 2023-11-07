import Model from "../src/model/Model.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 상금 테스트", () => {
  test("로또 상금별로 당첨된 개수 테스트", () => {
    //given
    mockRandoms([
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 4, 10, 11],
      [1, 2, 3, 4, 5, 11],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
    ]);

    // when
    const model = new Model();

    model.makeLotto("5000");
    model.compareWinLotto("1,2,3,4,5,6", "7");

    // then
    for (const prize of Object.values(model.getPrizeCategories)) {
      expect(prize.count).toEqual(1);
    }
  });
});
