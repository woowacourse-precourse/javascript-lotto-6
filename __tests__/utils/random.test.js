import { COUNT } from "../../src/constants/numbers.js";
import { generateUniqueRandomNumbers } from "../../src/utils/random.js";

// TODO: 변수명 변경하여 가독성 개선
describe("random util 함수 테스트", () => {
  test(`임의의 숫자가 ${COUNT.purchasedLottoNumbers}개 만큼 잘 출력되는지 확인한다.`, () => {
    const expected = COUNT.purchasedLottoNumbers; // 기댓값 입력
    const test = generateUniqueRandomNumbers().length;
    expect(test).toEqual(expected);
  });
});
