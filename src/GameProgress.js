import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/gameConstant";
import GetInputValue from "./GetInputValue.js";

let WINNING_COUNT = Array(5).fill(0);

class GameProgress{
  static async getPurchaseCount(){
    const purchaseAmount = await GetInputValue.getPurchaseAmount();
    return purchaseAmount;
  }

  static printPurchaseLotto(purchaseCount){
    Console.print(`${purchaseCount}${GAME_MESSAGE.PURCHASE_AMOUNT}`);
    const lottoNumbers = [];
    for(let i=0; i<purchaseCount; i++){
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(lottoNumber);
      Console.print(`[${lottoNumber[0]}, ${lottoNumber[1]}, ${lottoNumber[2]}, ${lottoNumber[3]}, ${lottoNumber[4]}, ${lottoNumber[5]}]`)
    }
    return lottoNumbers;
  }

  static getWinningStatistics(purchaseNumbers, winningNumbers, bonusNumber){
    for(let i=0; i<purchaseNumbers.length; i++){
      let cnt = 0;
      purchaseNumbers[i].forEach((number)=>{
        winningNumbers.includes(number) ? cnt++ : '';
      })
      if(cnt === 3) WINNING_COUNT[0]++;
      else if(cnt === 4) WINNING_COUNT[1]++;
      else if(cnt === 5) purchaseNumbers[i].includes(bonusNumber) ? WINNING_COUNT[3]++:WINNING_COUNT[2]++;
      else if(cnt === 6) WINNING_COUNT[4]++;
    }
  }

  static printWinningStatistics(){
    Console.print(GAME_MESSAGE.WINNING_STATISTICS);
    Console.print(GAME_MESSAGE.DIVISION_BAR);
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_FIFTH}${WINNING_COUNT[0]}${GAME_MESSAGE.WINNING_AMOUNT}`)
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_FOURTH}${WINNING_COUNT[1]}${GAME_MESSAGE.WINNING_AMOUNT}`)
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_THIRD}${WINNING_COUNT[2]}${GAME_MESSAGE.WINNING_AMOUNT}`)
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_SECOND}${WINNING_COUNT[3]}${GAME_MESSAGE.WINNING_AMOUNT}`)
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_FIRST}${WINNING_COUNT[4]}${GAME_MESSAGE.WINNING_AMOUNT}`)
  }

  static getWinningMoney(){
    const winningMoney = 5000*WINNING_COUNT[0] + 50000*WINNING_COUNT[1] 
		+ 1500000*WINNING_COUNT[2] + 30000000*WINNING_COUNT[3] + 2000000000*WINNING_COUNT[4];
    return winningMoney;
  }

  static getRateOfReturn(purchaseAmount, winningMoney){
    const rateOfReturnDecimalPointOne = ((winningMoney/purchaseAmount)*100).toFixed(1);
    const rateOfReturn = this.cutPlaceValue(rateOfReturnDecimalPointOne);
    return rateOfReturn;
  }

  static cutPlaceValue(rateOfReturn){
    const divide = rateOfReturn.split('.');
    const first = divide[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${first}.${divide[1]}`;
  }

  static printRateOfReturn(rateOfReturn){
    Console.print(`${GAME_MESSAGE.RATE_OF_RETURN_FRONT}${rateOfReturn}${GAME_MESSAGE.RATE_OF_RETURN_BACK}`);
		WINNING_COUNT = Array(5).fill(0);
  }
}

export default GameProgress;