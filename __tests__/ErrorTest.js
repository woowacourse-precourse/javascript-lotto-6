import App from "../src/App.js";

describe("구입 금액 예외 처리 테스트", () => {
    test.each([
        `1001`,
        `10012`,
        `만원`,
        `100,3300`,
    ])("로또 구입 금액 예외 처리 테스트", async (value) => {
        const app = new App();

        await expect(() => app.isValidPurchaseAmount(value)).toThrow(
            "[ERROR] 숫자가 잘못된 형식입니다."
        );
    });
});
