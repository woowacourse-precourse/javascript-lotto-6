import Lotto from "../src/Model/Lotto"

describe("로또 클래스 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
        expect(() => {
        new Lotto(['j', 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호가 정수가 아닌 경우 예외가 발생한다.", () => {
        expect(() => {
        new Lotto([1.1, 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호가 1-45 사이 숫자가 아닌 경우 예외가 발생한다.", () => {
        expect(() => {
        new Lotto([46, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호를 입력하지 않은 경우 예외가 발생한다.", () => {
        expect(() => {
        new Lotto();
        }).toThrow("[ERROR]");
    });
});
