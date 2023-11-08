import Validator from "../src/utils/validator/Validator";
import { MESSAGE_ERROR } from "../src/static/Static";

describe("InputView 테스트", () => {
  test("입력값이 빈 문자열이면 예외가 발생한다.", () => {
    expect(() => {
      Validator.validateEmptyString("");
    }).toThrow(MESSAGE_ERROR.header);
  });

  test("구매금액이 로또 한 장 가격의 배수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validator.validateMultiplePrice("1000j");
    }).toThrow(MESSAGE_ERROR.header);
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      Validator.validateLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(MESSAGE_ERROR.header);
  });

  test("로또 당첨 번호가 1~45의 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validator.validateNumRange(46);
    }).toThrow(MESSAGE_ERROR.header);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validator.validateDuplication([1, 2, 3, 4, 5, 5]);
    }).toThrow(MESSAGE_ERROR.header);
  });

  test("보너스 번호가 이미 당첨 번호에 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validator.validateInWinningNums("1", [1, 2, 3, 4, 5, 6]);
    }).toThrow(MESSAGE_ERROR.header);
  });
});
