import Cash from "../src/Cash";

describe("캐쉬 클래스 테스트", () => {
    test("받은 데이터가 숫자가 아닌 경우 에러",() => {
        expect(() => {
            new Cash("dg");
        }).toThrow("[ERROR]숫자를 입력해주세요.");
    });

    test("1000의 배수가 아니면 에러", () => {
        expect(() => {
            new Cash(1001);
        }).toThrow("[ERROR]");
    })
});

