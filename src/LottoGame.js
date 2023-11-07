import LottoUI from "./LottoUI.js";
import MESSAGES from "./constant/Messages.js";
import Lotto from "./Lotto.js";

class LottoGame {
    static async game_start(){
        try {
            const purchase_amount = await LottoUI.input_purchase_amount();
            const lotto_count = purchase_amount / 1000 ;
            LottoUI.print_console(`${lotto_count}${MESSAGES.BUY_LOTTO_COUNT}`);

            const lottos = Lotto.create_multiple_lottos(lotto_count);
            lottos.forEach(lotto => LottoUI.print_console(lotto.getNumbers())); // 각 로또 번호를 배열로 출력

        } catch ( error ){ throw new Error(error); }
    }

}

export default  LottoGame ;