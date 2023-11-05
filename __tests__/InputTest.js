import {MONEY_VALIDATE} from "../src/ui/InputMoney.js";

describe("입력 예외 처리 테스트", () => {

    test('천원 단위 테스트', () => {
        const MONEY = "1500";
        expect(()=>MONEY_VALIDATE(MONEY)).toThrow("[ERROR]");
    });
});
