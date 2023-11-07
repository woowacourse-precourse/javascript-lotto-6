import TicketManager from "../src/Model/TicketManager.js";
import Lotto from "../src/Model/Lotto.js";
import BonusNumber from "../src/Model/BonusNumber.js";
describe("TicketManager 클래스 테스트", () => {
    test("ticket 길이 테스트", () => {
        const ticketsManager = new TicketManager();
        ticketsManager.addTicket(3);
        const tickets = ticketsManager.getTickets();
        expect(tickets.length).toBe(3);
    });

    test("구매 로또와 당첨 로또 번호 비교", () => {
        const tick = new TicketManager();
        tick.tickets.push([1, 2, 3, 4, 5, 7]);
        tick.tickets.push([1, 2, 3, 4, 5, 6]);
        tick.tickets.push([1, 2, 3, 4, 9, 10]);
        tick.tickets.push([1, 2, 3, 11, 12, 13]);
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
        const bonus = new BonusNumber(7);
        tick.countMatchAllNumber(lotto, bonus);
        expect(tick.matches).toEqual({
            "3": 1, 
            "4": 1, 
            "5": 0, 
            "5b": 1, 
            "6": 1
        })
    })
});
