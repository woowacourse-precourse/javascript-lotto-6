import IOUtils from "./IOUtils.js";
import Lotto from "./Lotto.js";
import GameUtils from "./GameUtils.js";

class LottoMachine {
    static generateLottoTickets(lottoCount) {
        const lottoTickets = [];

        IOUtils.output(`\n${lottoCount}개를 구매했습니다.`);

        for (let i = 0; i < lottoCount; i++) {
            const lottoTicket = this.#generateLottoTicket();
            IOUtils.output(lottoTicket.numbers.sort((a, b) => a - b));
            lottoTickets.push(lottoTicket);
        }

        return lottoTickets;
    }

    #generateLottoTicket() {
        return new Lotto(GameUtils.getUniqueNumbersInRange(1, 45, 6));
    }
}

export default LottoMachine;