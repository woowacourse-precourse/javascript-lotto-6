import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/messages';




const OutputView = {
    printPurchaseAmount(quantity) {
        Console.print(OUTPUT.PURCHASE(quantity));
    },

    printLotteries(lotteries) {
        lotteries.forEach((lotto) => {
            Console.print(lotto);
            Console.print(OUTPUT.LINE);
        })
    }
};

export default OutputView;