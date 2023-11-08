import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/Message.js';
import { ROI_DETAIL_MESSAGE } from '../constants/Winning.js';
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
    },

    printLottoGameResult(gameResult, result_money, input_money){
        Console.print(PROMPT.RESULT);
        Object.keys(gameResult).forEach(key => {
            Console.print(`${ROI_DETAIL_MESSAGE[key]}${gameResult[key]}개`);
        })
        Console.print(`${PROMPT.ROI_HEADER}((Number(result_money)/Number(input_money))*100).toFixed(1)${PROMPT.ROI_FOOTER}`)
    }
}
export default LottoView;