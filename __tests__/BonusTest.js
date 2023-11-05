import Bonus from "../src/Bonus"

describe("보너스 클래스 테스트",() => {
    test("문자 예외 테스트",() => {
        expect(() => {
           new Bonus("s");
        }).toThrow("[ERROR] 숫자를 입력해주세요.");
    });
    test("숫자 하나 테스트",() => {
        expect(() => {
           new Bonus("47");
        }).toThrow("[ERROR] 숫자는 45이하 1이상으로 입력해주세요.");
    });
    test("중복 테스트",() => {
        expect(() => {
           new Bonus("1",[1,2,3,4,5,7]);
        }).toThrow("[ERROR] 중복되지 않는 숫자를 입력해주세요.");
    });
})