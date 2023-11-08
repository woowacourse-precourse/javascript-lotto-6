import {OUTPUT_ERROR} from "../src/text.js";

function purchaseMoney(input) {
  if (input % 1000 !== 0) {
    throw new Error(OUTPUT_ERROR.money_err);
  }
}
describe("돈 입력 테스트", () => {
  test("1000단위 테스트", async () => {
    const INPUT = 1500;

    expect(() => purchaseMoney(INPUT)).toThrow();
  })
})