import { Console } from '@woowacourse/mission-utils';
import PRIZE from '../constants/message.js';

class OutputView {
    static printPurchaseAmount(amount) {
        Console.print(`\n${amount}개를 구매했습니다.`);
    }

    static printLottoNumbers(lottos) {
        lottos.forEach((lotto) => {
            const numbersString = lotto.getNumbers().sort((a, b) => a - b).join(', ');
            Console.print(`[${numbersString}]`);
        });
        Console.print('');
    }

    static printPrize(prize) {
        Console.print(PRIZE.guide);
        Console.print(PRIZE.fifth + prize[0] + '개');
        Console.print(PRIZE.fourth + prize[1] + '개');
        Console.print(PRIZE.third + prize[2] + '개');
        Console.print(PRIZE.second + prize[3] + '개');
        Console.print(PRIZE.first + prize[4] + '개');
    }

    static printProfitRate(profitRate) {
        Console.print(`총 수익률은 ${profitRate}%입니다.`);
    }
}

export default OutputView;