import { CALCULATE, REWARD_ARRAY } from '../constants/values';
import { integrateWinLottery } from './Result';

function totalWinningAmount(winningNumbers, bonusNumber) { //총 당첨된 금액 계산
  let winningDetails = integrateWinLottery(winningNumbers, bonusNumber);
  let total = 0;
  winningDetails.forEach((amount, idx) => {
    total += amount * REWARD_ARRAY[idx];
  })
  return total;
}
  
    
function calculateReturns(purchaseAmount, winningNumbers, bonusNumber) { //수익률 계산
  let total = totalWinningAmount(winningNumbers, bonusNumber);
  let returns = (total / purchaseAmount * CALCULATE.PERCENTAGE).toFixed(CALCULATE.DECIMAL);
  return returns;
}

export default calculateReturns;