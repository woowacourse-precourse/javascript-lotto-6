import App from "../src/App.js";
import Lotto from "../src/Lotto.js";

describe("어플리케이션 동작 테스트", () => {
    test("로또를 7장 구매했으면 7개의 로또가 번호가 나와야 한다.", () => {
        const pickedLottoList = new App().getPickedLottoList(7);
        expect(pickedLottoList.length).toBe(7);
    });

    test("로또가 3장 중 1등 1개, 2등 1개가 나왔을 경우 getRankCount 테스트 한다.", () => {
        const lottoList = [
            new Lotto([1, 2, 3, 4, 5, 6]),
            new Lotto([1, 2, 3, 4, 5, 7]),
            new Lotto([8, 9, 10, 22, 15, 16]),
        ];
        const rankCount = new App().getRankCount(
            new Lotto([1, 2, 3, 4, 5, 6]),
            7,
            lottoList
        );
        expect(rankCount).toStrictEqual([1, 1, 1, 0, 0, 0]);
    });

    test("로또가 8장 중 5등 1개가 나왔을 경우 수익률은 62.5%여야 한다.", () => {
        const profit = new App().calculateRateOfReturn(8000, [7, 0, 0, 0, 0, 1]);
        expect(profit).toBe("62.5");
    });
});
