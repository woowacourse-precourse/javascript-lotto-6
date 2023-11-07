import InputPrice from "../src/InputPrice.js";

describe("로또 구입 금액 테스트", () => {
    test("1000으로 나누어지지 않으면 예외처리", () => {
        expect(() => {
            new InputPrice("1500");
        }).toThrow("[ERROR]");
    });

    test("금액이 0이하이면 예외처리", () => {
        expect(() => {
            new InputPrice("0");
        }).toThrow("[ERROR]");
    });

    test("금액이 숫자가 아니면 예외처리", () => {
        expect(() => {
            new InputPrice("1000j");
        }).toThrow("[ERROR]");
    });
});