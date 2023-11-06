import { Console } from '@woowacourse/mission-utils';

class OutputView {
    static printPurchase(num) {
        Console.print(`\n${num}개를 구매했습니다.`);
    }

    static printLottoNumbers(lottos) {
        lottos.forEach((lotto) => Console.print(lotto.getNumbers().sort((a, b) => a - b)));
        Console.print('');
    }
}

export default OutputView;