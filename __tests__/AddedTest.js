import Validate from "../src/common/Validate.js";

const validate = new Validate();
describe("구매 입력 유효성 테스트", () => {
    test("금액이 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            validate.validatePrice(["abc"]);
        }).toThrow("[ERROR]");
    })
    test("금액이 1,000 으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
        expect(() => {
            validate.validatePrice([7500]);
        }).toThrow("[ERROR]");
    });
});
describe("보너스 번호 유효성 테스트", () => {
    test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            validate.validateBonusNumber(["a"]);
        }).toThrow("[ERROR]");
    });
    test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            validate.validateBonusNumber([54]);
        }).toThrow("[ERROR]");
    });
    test("보너스 번호가 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        const bonus = [5];
        const numbers = [1,2,3,4,5,6];
        expect(() => {
            validate.validateBonusNumber([bonus,numbers]);
        }).toThrow("[ERROR]");
    });
});