import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/messages';
import { issuLotto } from '../Modules/LotteryIssuance';

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
    }
};

export default OutputView;