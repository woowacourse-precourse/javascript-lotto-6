import Purchase from "../src/Purchase";

describe("구매금액 클래스 테스트", () => {
    test("구매금액이 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            new Purchase("abc");
        }).toThrow("[ERROR]");
    });
    test("구매금액이 1000원 미만이면 예외가 발생한다.", () => {
        expect(() => {
            new Purchase(500);
        }).toThrow("[ERROR]");
    });
    test("구매금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
        expect(() => {
            new Purchase(1500);
        }).toThrow("[ERROR]");
    });
});
