import App from "../src/App.js";
import Lotto from "../src/Lotto.js";

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

    test("로또 자판기는 6개의 숫자가 든 배열을 로또 개수만큼 출력해야 합니다.", async () => {
        const input = 3000;
        const result = [
            new Lotto([1, 2, 3, 4, 5, 6]),
            new Lotto([1, 2, 3, 4, 5, 6]),
            new Lotto([1, 2, 3, 4, 5, 6]),
        ];

        const app = new App();

        await expect(app.lottoVendingMachine(input).length).toBe(result.length);
    });

    test("로또 내역에 대한 문구를 형식에 맞게 출력해야 합니다.", async () => {
        const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
        const lotto2 = new Lotto([1, 2, 3, 4, 5, 7]);

        const input = [lotto1, lotto2];
        const result =
            `${input.length}개를 구매했습니다.\n[${input.map((el) => el.printLottoNumber()).join("]\n[")}]`;

        const app = new App();

        await expect(app.renderLottoTickets(input)).toBe(result);
    });
});
