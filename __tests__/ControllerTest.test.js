import Controller from "../src/Controller";

describe("컨트롤러 클래스 테스트", () => {
    describe("priceToAmount", () => {
        test("금액에 1000원을 나눈 몫을 반환한다.", () => {
            const AMOUNT = Controller.priceToAmount(14000);

            expect(AMOUNT).toBe(14);
        });
        test("나누어 떨어지지 않는 경우 예외를 발생시킨다.", () => {
            expect(() => {
                Controller.priceToAmount(14500);
            }).toThrow("[ERROR]");
        });
    });
});
