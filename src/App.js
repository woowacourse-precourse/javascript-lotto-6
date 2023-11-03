import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message";
import { ERROR } from "./const/error";


class App {
  constructor() {
    this.winning = [];
    this.bonus = 0;
    this.count = 0;
  }
  async play() {
    this.getLottoPrice();
    // printHowMany
    // printMyLottos
    // inputNumbers

  }

  async getLottoPrice() {
    const priceInput = await MissionUtils.Console.readLineAsync(MESSAGE.BUY);
    this.count = this.checkPrice(priceInput);

  }
  checkPrice(priceInput) {
    const checkPrice = parseInt(priceInput);
    const remainder = checkPrice % 1000;

    if(remainder !== 0 ){throw new Error(ERROR.THOUSAND)};
    return checkPrice;
  }

// 이후 getNumers에서 입력 받기 전에 몇개 구매한지 출력해야 함

}

class inputNumbers{
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
}

// class 나눌거면 상속으로 count 받아와야 하고 위쪽 APP에서 아래 클래스 다 진행시킬 수 있게.
// ㄴ 돌아가는 꼴을 봐서는 Lotto 쪽에 합치고 여기에서는 Lotto.js 파일을 받아와서 진행하는 방향일듯
// ㄴ 여기서 숫자 받아오는 걸 짜서 Lotto 쪽에 numbers를 건내주고 거기서 validate를 진행하는 것이 나을수도
class progressLotto extends App{
  getMyLottos() {
    const arrayNumbers = [];
    
    for(let i = 0; i < this.count; i++){
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6)
      arrayNumbers.push(lottoNumber.sort());
    }
    this.printHowMany(this.count);
    this.getWinningLottos(arrayNumbers);
  }

  getWinningLottos(arrayNumbers) {
    const sameNumbersObject = {
      'three' : 0,
      'four' : 0,
      'five' : 0,
      'six' : 0,
      'bonus' : 0
    }
    for(let i = 0; i < this.count; i++){
      const newArray = [...arrayNumbers,...this.winning]
      const sameNumbers = arrayNumbers.filter(newArray);
      this.checkSameNumbers(sameNumbers,sameNumbersObject)
    }
  }
  
  checkSameNumbers(sameNumbers,sameNumbersObject) {
    switch (sameNumbers.length) {
      case 3:
        sameNumbersObject['three']++
        break;
      case 4:
        sameNumbersObject['four']++
        break;
      case 5:
        sameNumbersObject['five']++
        break;
      case 6:
        sameNumbersObject['six']++
        break;      
      default:
        return sameNumbers
    }
    if(sameNumbers.length === 5 && arrayNumbers.includes(checkBonusNumber)) {
      sameNumbersObject['bonus']++
    }

  }
}

class printLottos {
  printHowMany() {
    MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
  }
  printMyLottos() {
    arrayNumbers.forEach(element => {
      MissionUtils.Console.print(element);
    })
  }
  winningStatics() {
    const sum = 0;
    for(let win of Object.values(sameNumbersObject)){
      sum += win;
    }
    const rate = sum/count * 100;
    
    MissionUtils.Console.print(
    `당첨 통계
    ---
    3개 일치 (5,000원) - ${sameNumbersObject['three']}개
    4개 일치 (50,000원) - ${sameNumbersObject['four']}개
    5개 일치 (1,500,000원) - ${sameNumbersObject['five']}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${sameNumbersObject['bonus']}개
    6개 일치 (2,000,000,000원) - ${sameNumbersObject['six']}개
    총 수익률은 ${rate}%입니다.`)
  }

}

export default App;
