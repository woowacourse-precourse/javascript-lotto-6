import { MissionUtils } from "@woowacourse/mission-utils";

function getLottoTickets(purchaseCount) {
    MissionUtils.Console.print(purchaseCount + "개를 구매했습니다.");
    const lottoTickets = [];
    for (let i = 0; i < purchaseCount; i++) {
        let eachLottoTicket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        eachLottoTicket = eachLottoTicket.sort((a, b) => a - b);
        lottoTickets.push(eachLottoTicket);
        MissionUtils.Console.print("[" + eachLottoTicket.join(", ") + "]");
    }
    MissionUtils.Console.print("");
    return lottoTickets;
}

export default getLottoTickets;
