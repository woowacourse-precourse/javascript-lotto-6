import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';
import winningResult from "./WinningResult.js";

const OutputView = {
    print(message) {
        Console.print(message);
    },

    printLottos(lottos) {
        Console.print(OUTPUT_MESSAGE.PURCASE_QUANTITY(lottos.length));
        lottos.forEach((lotto) => {
            Console.print('[' + lotto.getNumbers().join(', ') + ']');
        });
    },

    printWinningResult(ranks, winningsRate) {
        ranks.forEach((rank) => {
            Console.print(winningResult(rank));
        });

        Console.print(OUTPUT_MESSAGE.WINNINGS_RATE(winningsRate.toFixed(1)));
    },
};

export default OutputView;