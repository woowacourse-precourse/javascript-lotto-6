import BonusNumberValidity from "../src/Domain/BonusNumberValidity.js";

describe("보너스 번호 테스트", () => {
  test("숫자를 입력했는지 테스트", () => {
    const INPUT = 'a';
    const INPUT_NUMBER = new BonusNumberValidity();
    expect(() => INPUT_NUMBER.numberNaNvalidity(INPUT)).toThrow("[ERROR]");
  });

  test("1~45 사이 숫자를 입력했는지 테스트", () => {
    const INPUT = 0;
    const INPUT_NUMBER = new BonusNumberValidity();
    expect(() => INPUT_NUMBER.numberRangeValidity(INPUT)).toThrow("[ERROR]");
  });

  test("중복된 수가 있는지 테스트", () => {
    const INPUT = 1;
    const ARRAY = [1,2,3,4,5,6];
    const INPUT_NUMBER = new BonusNumberValidity();
    expect(() => INPUT_NUMBER.numberDuplicateValidity(INPUT, ARRAY)).toThrow("[ERROR]");
  });
});
