import { MissionUtils } from "@woowacourse/mission-utils";
import User from "../src/User";
import WORD from "../src/lib/constants/word";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

describe("User 클래스 테스트", () => {
  test("생성된 로또를 출력 형식에 맞게 문자열로 반환하는지 테스트", () => {
    const randoms = [[1, 5, 7, 8, 21, 36]];
    const expected = ["[1, 5, 7, 8, 21, 36]"];

    mockRandoms([...randoms]);
    const user = new User(1);
    const result =
      user
        .getLotto()
        .map(
          (lotto) =>
            `${WORD.OPENBRANCKET}${lotto.getLottoNumber()}${WORD.CLOSEBRANCKET}`
        )[0] === expected[0];

    expect(() => {
      result.toEqual(expected[0]);
    });
  });

  test("rank 결과 반환", () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 8, 9, 10],
      [1, 2, 8, 9, 10, 11],
    ];

    mockRandoms([...randoms]);
    const user = new User(6);
    user.getRank(lottoNumber, bonusNumber);

    const testCases = [
      user.printStatisticList(),
      user.calculateProfit(),
      user.calculateProfitRate(),
    ];
    const expectedResult = [[1, 1, 1, 1, 1], 2_031_555_000, "33859250.0"];

    testCases.forEach((testCase, index) =>
      expect(testCase).toEqual(expectedResult[index])
    );
  });
});
