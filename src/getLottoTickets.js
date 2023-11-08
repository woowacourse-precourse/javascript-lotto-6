import { MissionUtils } from "@woowacourse/mission-utils";

function getLottoTickets(purchaseCount) {
    MissionUtils.Console.print(`${purchaseCount}개를 구매했습니다.`);
    const lottoTickets = Array.from({ length: purchaseCount }, () => {
        const eachLottoTicket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
        MissionUtils.Console.print(`[${eachLottoTicket.join(", ")}]`);
        return eachLottoTicket;
    });
    MissionUtils.Console.print("");
    return lottoTickets;
}

export default getLottoTickets;
