import validator from "../src/validate/Validator.js";

describe("입력 예외 처리 테스트", () => {

    test('천원 단위 테스트', () => {
        const MONEY = "1500";
        expect(()=>validator(MONEY)).toThrow("[ERROR]");
    });
});
