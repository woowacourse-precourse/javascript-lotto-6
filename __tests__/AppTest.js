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
        const result = `${input.length}개를 구매했습니다.\n[${input
            .map((el) => el.printLottoNumber())
            .map((el) => el.join(", "))
            .join("]\n[")}]`;

        const app = new App();

        await expect(app.renderLottoTickets(input)).toBe(result);
    });

    test.each([`1,2,3,4,5,6,7`, `1,2,3`, `1,23456`, `123,456`, `48,1,3,4,5,6`])(
        "로또 당첨 번호 예외 처리 테스트",
        async (value) => {
            const app = new App();

            await expect(() => app.isValidWinningNumber(value)).toThrow(
                "[ERROR] 숫자가 잘못된 형식입니다."
            );
        }
    );

    test.each([`1,2`, `1 2`, `48`, `0`, `6`])(
        "로또 보너스 번호 예외 처리 테스트",
        async (value) => {
            const app = new App();
            const winningNumber = "6,7,8,9,10,11";

            await expect(() =>
                app.isValidBonusNumber(value, winningNumber)
            ).toThrow("[ERROR]");
        }
    );

    test("로또 당첨 결과를 다루기 쉬운 배열로 바꿔야 합니다.", async () => {
        const winningNumber = "1,2,3,4,5,6";
        const bonusNumber = "7";
        const lottoArr = [];
        lottoArr.push(new Lotto([1, 2, 3, 4, 5, 6]));
        const result = [0, 0, 0, 1, 0];
        const app = new App();

        await expect(
            app.calculateWinningArr(winningNumber, bonusNumber, lottoArr)
        ).toEqual(result);
    });

    test("로또 당첨 수익률 계산을 해야 합니다.", async () => {
        const winningArr = [0, 0, 0, 1, 0];
        const purchaseAmount = 1000;
        const result = ((2000000000 / purchaseAmount) * 100).toFixed(1);
        const app = new App();

        await expect(
            app.calculateProfitRate(winningArr, purchaseAmount)
        ).toEqual(result);
    });

    test("로또 최종 결과 텍스트를 출력해야 합니다.", async () => {
        const winningArr = [0, 0, 0, 1, 0];
        const purchaseAmount = 1000;
        const result = `당첨 통계\n---\n
        3개 일치 (5,000원) - 0개\n
        4개 일치 (50,000원) - 0개\n
        5개 일치 (1,500,000원) - 0개\n
        5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n
        6개 일치 (2,000,000,000원) - 1개\n
        총 수익률은 200000000.0%입니다.`;
        const app = new App();

        await expect(
            app.renderLottoResultAndProfit(winningArr, purchaseAmount)
        ).toEqual(result);
    });
});
