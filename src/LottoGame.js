import LottoUI from "./LottoUI.js";
import MESSAGES from "./constant/Messages.js";
import Lotto from "./Lotto.js";

class LottoGame {
    static async game_start(){
        try {
            LottoUI.print_console(MESSAGES.INPUT_PURCHASE_AMOUNT);
            const purchase_amount = await LottoUI.input_purchase_amount();
            const lotto_count = purchase_amount / 1000 ;
            LottoUI.print_console(`${lotto_count}${MESSAGES.BUY_LOTTO_COUNT}`);

            const lottos = Lotto.create_multiple_lottos(lotto_count);
            lottos.forEach(lotto => LottoUI.print_console(lotto.getNumbers()));

            LottoUI.print_console(MESSAGES.INPUT_WINNING_NUMBER);
            const winning_number = await LottoUI.input_winning_number();

            LottoUI.print_console(MESSAGES.INPUT_BONUS_NUMBER);
            const bonus_number = await LottoUI.input_bonus_number(winning_number);

        } catch ( error ){ throw new Error(error); }
    }

}

export default  LottoGame ;