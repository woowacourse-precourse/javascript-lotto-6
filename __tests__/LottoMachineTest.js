import LottoMachine from "../src/LottoMachine.js";
import IOUtils from "../src/IOUtils.js";

describe("로또 기계 클래스 테스트",() => {
    test("로또 티켓 10개 생성 테스트", () => {
        const lottoTickets = LottoMachine.generateLottoTickets(10);
        expect(lottoTickets.length).toBe(10);
        lottoTickets.forEach((lottoTicket) => {
            expect(lottoTicket.numbers.length).toBe(6);
        })
    })
})