import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message";
import { ERROR } from "./const/error";

class App {

  constructor() {
    this.sameNumbersObject = {
      'three' : 0,
      'four' : 0,
      'five' : 0,
      'six' : 0,
      'bonus' : 0
    }
    this.winning = [];
    this.bonus = 0;
    this.count = 0;
  }

  async play() {
    await this.getLottoPrice();
    this.getMyLottos();
    await this.getNumbers();
    this.printWinningStatics();
  }

  async getLottoPrice() {
    const priceInput = await MissionUtils.Console.readLineAsync(MESSAGE.BUY);
    this.count = this.checkPrice(priceInput);
  }

  checkPrice(priceInput) {
    const checkPrice = parseInt(priceInput);
    const remainder = checkPrice % 1000;

    if(checkPrice === NaN) {throw new Error(ERROR.NAN)};
    if(remainder !== 0 ) {throw new Error(ERROR.THOUSAND)};

    return checkPrice;
  }

  getMyLottos() {
    const arrayNumbers = [];
  
    for(let i = 0; i < this.count; i++){
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6)
      arrayNumbers.push(lottoNumber.sort());
    }
    this.printHowMany(arrayNumbers);
    this.getWinningLottos(arrayNumbers);
  }

  getWinningLottos(arrayNumbers) {
    for(let i = 0; i < this.count; i++){
      const newArray = [...arrayNumbers,...this.winning]
      const sameNumbers = arrayNumbers.filter(newArray);
      this.checkSameNumbers(sameNumbers)
    }
  }

  checkSameNumbers(sameNumbers) {
    switch (sameNumbers.length) {
      case 3:
        this.sameNumbersObject['three']++
        break;
      case 4:
        this.sameNumbersObject['four']++
        break;
      case 5:
        this.sameNumbersObject['five']++
        break;
      case 6:
        this.sameNumbersObject['six']++
        break;      
      default:
        return this.sameNumbersObject
    }
    if(sameNumbers.length === 5 && arrayNumbers.includes(checkBonusNumber)) {
      this.sameNumbersObject['bonus']++
    }
  }

  printHowMany(arrayNumbers) {
      MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
      arrayNumbers.forEach(element => {
        MissionUtils.Console.print(element);
      })
  }

  async getNumbers(){
    const winningNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.WINNING_NUMBER);
    this.winning = this.checkWinningNumbers(winningNumbers);
  }

  checkWinningNumbers(winningNumbers){
    const checkWinningNumber = winningNumbers.spilt(",").map(Number);

    if(!winningNumbers.includes(',')) {throw new Error(ERROR.NO_COMMA)};
    if(winningNumbers.length !== 6) { throw new Error(ERROR.SIX)};
    this.checkNumberError(checkWinningNumber);
    return checkWinningNumber;
  } 

  async getBonusNumbers(){
    const bonusNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.BONUS_NUMBER);
    this.bonus = this.checkBonusNumbers(bonusNumbers);
  }
  
  checkBonusNumbers(bonusNumbers){
    const checkBonusNumber = bonusNumbers.spilt(",").map(Number);

    if(bonusNumbers.includes(',')) {throw new Error(ERROR.INPUT_COMMA)};
    this.checkNumberError(checkBonusNumber);
    return checkBonusNumber;
  }

  checkNumberError(numbers){
    if(!Number.isInteger(numbers)) {throw new Error(ERROR.INTEGER)};
    if(numbers < 1) {throw new Error(ERROR.ONE)};
    if(numbers > 45) {throw new Error(ERROR.FORTY_FIVE)};
  }

  
  printWinningStatics() {
    const sum = 0;
    for(let win of Object.values(this.sameNumbersObject)){
      sum += win;
    }
    const rate = sum/count * 100;
    
    MissionUtils.Console.print(
    `당첨 통계
    ---
    3개 일치 (5,000원) - ${this.sameNumbersObject['three']}개
    4개 일치 (50,000원) - ${this.sameNumbersObject['four']}개
    5개 일치 (1,500,000원) - ${this.sameNumbersObject['five']}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.sameNumbersObject['bonus']}개
    6개 일치 (2,000,000,000원) - ${this.sameNumbersObject['six']}개
    총 수익률은 ${rate}%입니다.`)
  }
  
}

export default App;
