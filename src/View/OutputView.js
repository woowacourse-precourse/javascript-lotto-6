import { Console } from '@woowacourse/mission-utils';
import { OUTPUT, RESULT_ARRAY } from '../constants/messages';
import { issuLotto } from '../Modules/LotteryIssuance';
import { calculateReturns } from '../Modules/Calculations';


const OutputView = {
    printPurchaseAmount(quantity) {
        Console.print(OUTPUT.PURCHASE(quantity));
    },

    printLotteries(quantity) {
        let lotteries = issuLotto(quantity);
        lotteries.forEach((lotto) => {
            Console.print(lotto);
            Console.print(OUTPUT.LINE);
        })
    },

    printLottoCount(winningDetails) {
        Console.print(OUTPUT.RESULT_TITLE);
        RESULT_ARRAY.forEach((v, idx) => {
            Console.print(RESULT_ARRAY + `${winningDetails[idx]}개`);
        })
    },

    printLottoReturns(purchaseAmount, winningNumbers, bonusNumber) {
        let returns = calculateReturns(purchaseAmount, winningNumbers, bonusNumber);
        Console.print(OUTPUT.RETURN(returns));
    }
};

export default OutputView;