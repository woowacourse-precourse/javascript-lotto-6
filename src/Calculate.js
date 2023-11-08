import { CALCULATE, REWARD_ARRAY } from './constant';
import * as Game from './Game';


export function calculateReturns(quantity, winningNumbers, bonusNumber, lotteries) { //수익률 계산
    let total = gettotalAmount(winningNumbers, bonusNumber, lotteries);
    let returns = (total / (quantity * 1000) * CALCULATE.PERCENTAGE).toFixed(CALCULATE.DECIMAL);
    return returns;
}

export function gettotalAmount(winningNumbers, bonusNumber, lotteries) { //총 당첨된 금액 계산
    let winningDetails = Game.integrateWinLottery(winningNumbers, bonusNumber, lotteries);
    let total = 0;
    winningDetails.forEach((amount, idx) => {
      total += amount * REWARD_ARRAY[idx];
    })
    return total;
}