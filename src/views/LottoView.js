import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/Message.js';

const LottoView = {
    getLottoPurchasePrice(){
        return Console.readLineAsync(PROMPT.PURCHASE_MONEY);
    },

    printPurchaseLottoCount(lottoPurchaseCount){
        return Console.print(`\n${lottoPurchaseCount}${PROMPT.PURCHASE_AMOUNT}`)
    },

    printPurchaseLottoNumbers(lottoNumber){
        return Console.print(lottoNumber);
    },

    getUserLottoNumber(){
        return Console.readLineAsync(PROMPT.WINNING_NUMBER);
    },

    getUserBonusLottoNumber(){
        return Console.readLineAsync(PROMPT.BONUS_NUMBER);
    }
}
export default LottoView;