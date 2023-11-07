import App from "../src/App.js";

describe("app test", () => {
    test.each([`1001`, `10012`, `만원`, `100,3300`])(
        "로또 구입 금액 예외 처리 테스트",
        async (value) => {
            const app = new App();

            await expect(() => app.isValidPurchaseAmount(value)).toThrow(
                "[ERROR] 숫자가 잘못된 형식입니다."
            );
        }
    );

    test("로또 자판기는 6개의 숫자를 로또 개수만큼 출력해야 합니다.", async () => {
        const input = 3000;
        const result = [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
        ];

        const app = new App();

        await expect(app.lottoVendingMachine(input).length).toBe(result.length);
        await expect(
            app.lottoVendingMachine(input).map((el) => el.length)
        ).toEqual(result.map((el) => el.length));
    });
});
