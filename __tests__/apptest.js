import App from "../src/App.js";

describe("테스트", () => {
    let app;

    beforeEach(() => {
        app = new App();
    });

    // toBe 기본 값을 비교
    test("userMoneyInput 테스트", () => {
        app.userMoneyInput = 10000;
        expect(app.userMoneyInput).toBe(10000);
    });

    test("유효하지 않은 금액 입력 에러", () => {
        const userInput = "500";
        expect(() => {
            app.checkUserMoneyInput(userInput);
        }).toThrow();
    });

    test("로또 결과, 출력 테스트", () => {
        app.userMoneyInput = 10000;
        const lottoNumbers = [1, 2, 3, 4, 5, 6];
        const result = lottoNumbers.join(',');
        app.setLottoNumber(result);
        app.setLottoBonusNumber(7);
        app.totalLottoListUser();

        expect(app.countWinner[5]).toBe(0);
        expect(app.countWinner[4]).toBe(0);
    });
});
