import { Random } from "@woowacourse/mission-utils";

class LottoTicketGenerator {
    makeLotto(){
        const pickLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
        return pickLottoNumber;
    }
}

export default LottoTicketGenerator;