import { RATIO_OF_RETURN} from "../src/GameComment.";

describe("문자열 검사 테스트", () => {
  test('결과값은 반올림 되어야한다.',() => {
    expect(RATIO_OF_RETURN([1,0,0,0],8000, [5000, 50000, 1500000, 30000000, 2000000000])).toBe("총 수익률은 62.5%입니다.")
  });
});
