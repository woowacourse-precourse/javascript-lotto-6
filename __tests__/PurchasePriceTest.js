import ValidatePurchaseInput from "../src/common/validatePurchaseInput";

describe("구매 입력 유효성 크래스 테스트", () => {
    test("금액이 1,000 으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
        expect(() => {
            new ValidatePurchaseInput([7500]);
        }).toThrow("[ERROR]");
    })
})