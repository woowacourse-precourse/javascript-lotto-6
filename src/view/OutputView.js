import { Console } from '@woowacourse/mission-utils';

class OutputView {
    static printPurchase(num) {
        Console.print(`\n${num}개를 구매했습니다.`);
    }
}

export default OutputView;