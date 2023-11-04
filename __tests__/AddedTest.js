import Validate from "../src/common/validate.js";

describe("구매 입력 유효성 클래스 테스트", () => {
    const validate = new Validate();
    test("금액이 1,000 으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
        // this.validate = new Validate();
        expect(() => {
            validate.validatePrice([7500]);
        }).toThrow("[ERROR]");
    });
    test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            validate.validateBonusNumber([54]);
        }).toThrow("[ERROR]");
    })
})