import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/gameConstant";
import { ERROR_MESSAGE } from "./constants/errorMessage";
import GetInputValue from "./GetInputValue";

const WINNING_COUNT = Array(5).fill(0);

class App {
  async play() {
    try {
      await this.startGame();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
  
  async startGame(){
    const purchaseAmount = await this.getPurchaseCount();
    const purchaseCount = parseInt(purchaseAmount)/1000;
    const purchaseLotto = this.printPurchaseLotto(purchaseCount);
    const winningNumbers = await GetInputValue.getWinningNumbers();
    const bonusNumber = await GetInputValue.getBonusNumber();
    this.getWinningStatistics(purchaseLotto, winningNumbers, bonusNumber);
    this.printWinningStatistics();
    const winningMoney = this.getWinningMoney();
    const rateOfReturn = this.getRateOfReturn(purchaseAmount, winningMoney);
    this.printRateOfReturn(rateOfReturn);
  }

  async getPurchaseCount(){
    const purchaseAmount = await GetInputValue.getPurchaseAmount();
    if(purchaseAmount === ''){
      throw new Error(ERROR_MESSAGE.NO_INPUT);
    }
    else if(isNaN(purchaseAmount)){
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
    else if(parseInt(purchaseAmount)%1000!==0){
      throw new Error(ERROR_MESSAGE.WRONG_UNIT_OF_MONEY);
    }
    return purchaseAmount;
  }

  printPurchaseLotto(purchaseCount){
    Console.print(`${purchaseCount}${GAME_MESSAGE.PURCHASE_AMOUNT}`);
    const lottoNumbers = [];
    for(let i=0; i<purchaseCount; i++){
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(lottoNumber);
      Console.print(`[${lottoNumber[0]}, ${lottoNumber[1]}, ${lottoNumber[2]}, ${lottoNumber[3]}, ${lottoNumber[4]}, ${lottoNumber[5]}]`)
    }
    return lottoNumbers;
  }

  getWinningStatistics(purchaseNumbers, winningNumbers, bonusNumber){
    for(let i=0; i<purchaseNumbers.length; i++){
      let cnt = 0;
      purchaseNumbers[i].forEach((number)=>{
        winningNumbers.includes(number) ? cnt++ : '';
      })
      if(cnt === 3){
        WINNING_COUNT[0]++;
      }
      else if(cnt === 4){
        WINNING_COUNT[1]++;
      }
      else if(cnt === 5){
        purchaseNumbers[i].includes(bonusNumber) ? WINNING_COUNT[3]++:WINNING_COUNT[2]++;
      }
      else if(cnt === 6){
        WINNING_COUNT[4]++;
      }
    }
  }

  printWinningStatistics(){
    Console.print(GAME_MESSAGE.WINNING_STATISTICS);
    Console.print(GAME_MESSAGE.DIVISION_BAR);
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_FIFTH}${WINNING_COUNT[0]}${GAME_MESSAGE.WINNING_AMOUNT}`)
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_FOURTH}${WINNING_COUNT[1]}${GAME_MESSAGE.WINNING_AMOUNT}`)
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_THIRD}${WINNING_COUNT[2]}${GAME_MESSAGE.WINNING_AMOUNT}`)
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_SECOND}${WINNING_COUNT[3]}${GAME_MESSAGE.WINNING_AMOUNT}`)
    Console.print(`${GAME_MESSAGE.LOTTO_WINNER_FIRST}${WINNING_COUNT[4]}${GAME_MESSAGE.WINNING_AMOUNT}`)
  }

  getWinningMoney(){
    const winningMoney = 5000*WINNING_COUNT[0] + 50000*WINNING_COUNT[1] + 1500000*WINNING_COUNT[2] + 30000000*WINNING_COUNT[3] + 2000000000*WINNING_COUNT[4];
    return winningMoney;
  }

  getRateOfReturn(purchaseAmount, winningMoney){
    return (winningMoney/parseInt(purchaseAmount))*100;
  }

  printRateOfReturn(rateOfReturn){
    Console.print(`${GAME_MESSAGE.RATE_OF_RETURN_FRONT}${rateOfReturn}${GAME_MESSAGE.RATE_OF_RETURN_BACK}`);
  }
}

export default App;
