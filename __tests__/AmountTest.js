import Amount from '../src/model/Amount.js';

describe("금액 클래스 테스트", () => {
    const errorMessage = "[ERROR]";

    test("숫자가 아닌 문자열이 입력되면 예외를 발생한다.", () => {
      expect(() => {
        Amount.validateCorrectFormat('100q');
      }).toThrow(errorMessage);
    });

    test("1,000 단위로 입력하지 않으면 예외를 발생한다.", () => {
      expect(() => {
        Amount.validateCorrectFormat('2500');
      }).toThrow(errorMessage);
    });

    test("1,000원 ~ 20,000원의 범위를 벗어난 금액을 입력한다면 예외를 발생한다.", () => {
      expect(() => {
        Amount.validateCorrectFormat('500');
      }).toThrow(errorMessage);

      expect(() => {
          Amount.validateCorrectFormat('21000');
        }).toThrow(errorMessage);
    });
})