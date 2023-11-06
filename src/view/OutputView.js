import { Console } from '@woowacourse/mission-utils';
import PRIZE from '../constants/message.js';

class OutputView {
    static printPurchase(num) {
        Console.print(`\n${num}개를 구매했습니다.`);
    }

    static printLottoNumbers(lottos) {
        lottos.forEach((lotto) => Console.print(lotto.getNumbers().sort((a, b) => a - b)));
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
}

export default OutputView;