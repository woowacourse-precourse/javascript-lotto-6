import Validator from "../src/Validator";

describe("Validator 클래스 테스트", () => {
  let validator;

  beforeAll(() => {
    validator = new Validator();
  });

  test("isEmpty 메서드는 빈 값이 들어오면 true를 반환한다.", () => {
    expect(validator.isEmpty("")).toEqual(true);
  });

  test("isCorrectCost 메서드는 숫자 형태가 아닌 값이 들어오면 true를 반환한다.", () => {
    expect(validator.isCorrectCost("12ca")).toEqual(true);
  });
  test("isCorrectCost 메서드는 1000으로 나눠 떨어지지 않는 숫자 형태의 값이 들어오면 true를 반환한다.", () => {
    expect(validator.isCorrectCost("1001")).toEqual(true);
  });

  test("isLength 메서드는 입력 값을 배열로 반환한 길이가 의도한 길이와 같다면 true를 반환한다.", () => {
    expect(validator.isLength("1,2,3,4,5", 5)).toEqual(true);
  });

  test("isNumber 메서드는 입력 값을 배열로 변환한 모든 요소가 숫자형이라면 true를 반환한다.", () => {
    expect(validator.isNumber("1,2,3,4,5")).toEqual(true);
  });

  test("isRange 메서드는 입력 값을 배열로 변환한 모든 요소가 1이상 45이하의 수라면 true를 반환한다.", () => {
    expect(validator.isRange("1,2,3,4,5")).toEqual(true);
  });

  test("isCorrectWinnings 메서드는 정확하지 않은 당첨 번호를 입력하면 true를 반환한다.", () => {
    expect(validator.isCorrectWinnings("1,2,3,4,5")).toEqual(true);
    expect(validator.isCorrectWinnings("1,2,3,4,5,c")).toEqual(true);
    expect(validator.isCorrectWinnings("1,2,3,4,5,56")).toEqual(true);
  });

  test("isWhiteSpace 메서드는 비어있는 값을 입력하면 true를 반환한다.", () => {
    expect(validator.isWhiteSpace(" ")).toEqual(true);
  });

  test("isRepeat 메서드는 중복되지 않은 값을 입력하면 true를 반환한다.", () => {
    expect(validator.isRepeat("1,6,2,3,4,5")).toEqual(true);
  });

  test("isCorrectBonus 메서드는 정확하지 않은 보너스 번호를 입력하면 true를 반환한다.", () => {
    expect(validator.isCorrectBonus("c")).toEqual(true);
    expect(validator.isCorrectBonus("1,2")).toEqual(true);
    expect(validator.isCorrectBonus("0")).toEqual(true);
    expect(validator.isCorrectBonus("46")).toEqual(true);
  });
});
