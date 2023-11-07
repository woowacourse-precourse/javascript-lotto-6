import Utils from "../src/Utils.js";
import { Random } from "@woowacourse/mission-utils";

describe("유틸리티 함수 테스트", () => {
  describe("genRandomLottoNumber 메서드 테스트", () => {
    const randomLottos = Utils.genRandomLottoNumber();

    test("genRandomLottoNumber 메서드는 랜덤한 숫자 6개가 담긴 배열을 반환한다.", () => {
      expect(randomLottos).toHaveLength(6);
    });

    test.each(randomLottos)(
      "genRandomLottoNumber 메서드로 생성된 요소는 1이상 45이하의 범위에 있는 숫자이다.",
      (randomNumber) => {
        expect(randomNumber).toBeLessThanOrEqual(45);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
      }
    );

    test("genRandomLottoNumber 메서드로 생성된 숫자 배열은 오름차순으로 정렬된다.", () => {
      const MockRandomFn = jest.spyOn(Random, "pickUniqueNumbersInRange");
      MockRandomFn.mockReturnValue([45, 13, 2, 17, 26, 3]);

      const result = Utils.genRandomLottoNumber();

      expect(result).toEqual([45, 13, 2, 17, 26, 3].sort((a, b) => a - b));
    });
  });

  describe("splitInput 메서드 테스트", () => {
    test("splitInput 메서드는 입력받은 문자열을 ','로 구분하여 배열로 반환한다.", () => {
      const input = "1,2,3,4,5";
      const output = ["1", "2", "3", "4", "5"];

      expect(Utils.splitInput(input)).toEqual(output);
    });
  });

  describe("rankLotto 메서드 테스트", () => {
    test("rankLotto 메서드는 winningMatch, bonustMatch 값을 비교하여 해당하는 값을 반환한다.", () => {
      expect(Utils.rankLotto(5, 1)).toEqual(3);
      expect(Utils.rankLotto(5, 0)).toEqual(2);
    });
  });

  describe("calculateProfit 메서드 테스트", () => {
    test("calculateProfit 메서드는 당첨번호 매칭 결과와 구매를 입력받아 수익률을 반환한다.", () => {
      const lotteryResults = [1, 1, 1, 0, 0];
      const purchasedCount = 7;

      expect(Utils.calculateProfit(lotteryResults, purchasedCount)).toEqual(
        "22214.3"
      );
    });
  });
});
