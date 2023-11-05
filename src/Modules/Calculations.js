import { CALCULATE, REWARD_ARRAY } from '../constants/values';
import { integrateWinLottery } from './Result';

function totalWinningAmount() { //총 당첨된 금액 계산
    let winningDetails = integrateWinLottery(winningNumbers, bonusNumber);
    let total = 0;
    winningDetails.forEach((amount, idx) => {
      total += amount * REWARD_ARRAY[idx];
    })
    return total;
}
  
    
function calculateReturns(purchaseAmount) { //수익률 계산
    let total = totalWinningAmount(winningDetails, reward);
    let returns = (total / purchaseAmount * CALCULATE.PERCENTAGE).toFixed(CALCULATE.DECIMAL);
    return returns;
}

export default calculateReturns;