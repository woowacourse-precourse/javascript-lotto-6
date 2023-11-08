import GetLotto from "../src/models/GetLotto";

describe("로또 구매 테스트", () => {
    test("로또 구매 금액에 따른 갯수만큼 로또를 생성한다", () => {
        const BUDGET = 3000;
        const tickets = new GetLotto();
        const count = tickets.calculateLottoCount(BUDGET);
        const lottos = tickets.generateLottoNumbers(count);
        expect(lottos.length).toEqual(count);
    });
});