import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message";
import { ERROR } from "./const/error";


class App {
  constructor() {
    this.price = 0;
    this.winning = [];
    this.bonus = 0;
  }
  async play() {

  }

  async getLottoPrice() {
    const priceInput = await MissionUtils.Console.readLineAsync(MESSAGE.BUY);
    this.price = this.checkPrice(priceInput)
  }
  checkPrice(priceInput) {
    const checkPrice = parseInt(priceInput);
    const remainder = checkPrice % 1000;

    if(remainder !== 0 ){throw new Error(ERROR.THOUSAND)};
    return checkPrice;
  }
  async getNumbers(){
    const winningNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.WINNING_NUMBER);
    this.winning = this.checkWinningNumbers(winningNumbers);
  }

  // 여기와 보너스 넘버쪽 if문이 4개나 되는데 switch 쓸 것인지 고찰
  checkWinningNumbers(winningNumbers){
    const checkWinningNumber = winningNumbers.spilt(",").map(Number);

    if(!winningNumbers.includes(',')) {throw new Error(ERROR.NO_COMMA)};
    if(!Number.isInteger(checkWinningNumber)) {throw new Error(ERROR.INTEGER)};
    if(checkWinningNumber < 1) {throw new Error(ERROR.ONE)};
    if(checkWinningNumber > 45) {throw new Error(ERROR.FORTY_FIVE)};
    return checkWinningNumber;
  }
  
  async getBonusNumbers(){
    const bonusNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.BONUS_NUMBER);
    this.bonus = this.checkBonusNumbers(bonusNumbers);
    
  }
  checkBonusNumbers(bonusNumbers){
    const checkBonusNumber = bonusNumbers.spilt(",").map(Number);

    if(bonusNumbers.includes(',')) {throw new Error(ERROR.INPUT_COMMA)};
    if(!Number.isInteger(checkBonusNumber)) {throw new Error(ERROR.INTEGER)};
    if(checkBonusNumber < 1) {throw new Error(ERROR.ONE)};
    if(checkBonusNumber > 45) {throw new Error(ERROR.FORTY_FIVE)};
    return checkBonusNumber;
  }
}

export default App;
