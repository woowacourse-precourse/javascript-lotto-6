import { Console } from '@woowacourse/mission-utils';
import { OUTPUT, RESULT_ARRAY } from './constant';
import * as Game from './Game';
import * as Calculate from './Calculate';

/**
 * @param {lotteries[]} lotteries
 */
export function printLotteries(quantity, lotteries) { //발행된 로또 출력 문제 
    Console.print(`${quantity}개를 구매했습니다.`);
    lotteries.forEach((lotto) => {
        Console.print(`[${lotto.join(', ')}]`);
    })
}

export function printLottoCount(winningNumbers, bonusNumber, lotteries) { //최종 통계 출력
    const winningDetails = Game.integrateWinLottery(winningNumbers, bonusNumber, lotteries);
    Console.print(OUTPUT.RESULT_TITLE);
    RESULT_ARRAY.forEach((v, idx) => {
        Console.print(v + `${winningDetails[idx]}개`);
    })
}

export function printLottoReturns(quantity, winningNumbers, bonusNumber, lotteries) { //수익률 출력
    let returns = Calculate.calculateReturns(quantity, winningNumbers, bonusNumber, lotteries);
    Console.print(OUTPUT.RETURN(returns));
}