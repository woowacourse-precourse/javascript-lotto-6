
import LottoTicketGenerator from "./LottoTicketGenerator.js";

class DongHangLottery {
    async play(){
        const lotto = new LottoTicketGenerator();
        console.log("lotto.makeLotto();",lotto.makeLotto());
    }
}

export default DongHangLottery;