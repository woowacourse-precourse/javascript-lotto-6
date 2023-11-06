import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message";
import { ERROR } from "./const/error";


class App {

  constructor() {
    this.price = 0;
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
    this.arrayNumbers = [];
  }

  async play() {
    await this.getLottoPrice();
    await this.getMyLottos();
    this.printHowMany();
    await this.getNumbers();
    await this.getBonusNumbers();
    this.getWinningLottos();
    this.printWinningStatics();
  }

  async getLottoPrice() {
    const priceInput = await MissionUtils.Console.readLineAsync(MESSAGE.BUY);
    this.count = this.checkPrice(priceInput);
  }

  checkPrice(priceInput) {
    const checkPrice = Number(priceInput);
    const remainder = checkPrice % 1000;
    const share = parseInt(checkPrice/1000)

    if(isNaN(checkPrice)) {throw new Error(ERROR.NAN)};
    if(remainder !== 0 ) {throw new Error(ERROR.THOUSAND)};

    this.price = checkPrice;
    return share;
  }

  async getMyLottos() {
    for(let i = 0; i < this.count; i++){
      const lottoNumber = await MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
      // 지금 lottoNumber가 콘솔로그로 보니 undefined뜸 여기서부터 체크해야 함
      // console.log(lottoNumber);
      // const sortNumbers = lottoNumber.sort((a,b) => a-b);
      this.arrayNumbers.push(lottoNumber);
    }
  }

  printHowMany() {
    MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
    for(let i = 0; i < this.count; i++){
      MissionUtils.Console.print(JSON.stringify(this.arrayNumbers[i]));
    }
  }
  
  async getNumbers(){
    const winningNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.WINNING_NUMBER);
    this.winning  = winningNumbers.split(",");

    if(!winningNumbers.includes(',')) {throw new Error(ERROR.NO_COMMA)};
    if(this.winning.length !== 6) { throw new Error(ERROR.SIX)};
    
  } 

  async getBonusNumbers(){
    const bonusNumbers = await MissionUtils.Console.readLineAsync(MESSAGE.BONUS_NUMBER);
    this.bonus = this.checkBonusNumbers(bonusNumbers);
  }
  
  checkBonusNumbers(bonusNumbers){
    if(bonusNumbers.includes(',')) {throw new Error(ERROR.INPUT_COMMA)};
    if(isNaN(bonusNumbers)) {throw new Error(ERROR.NAN)};

    const checkBonusNumber = Number(bonusNumbers);
    
    this.checkNumberError(checkBonusNumber);
    return checkBonusNumber;
  }

  checkNumberError(numbers){
    if(!Number.isInteger(numbers)) {throw new Error(ERROR.INTEGER)};
    if(numbers < 1) {throw new Error(ERROR.ONE)};
    if(numbers > 45) {throw new Error(ERROR.FORTY_FIVE)};
  }

  getWinningLottos() {
    for(let i = 0; i < this.count; i++){
      const newArray = [...this.arrayNumbers[i],...this.winning.map(Number)]
      const setObject = new Set(newArray)
      const set = Array.from(setObject);
      this.checkSameNumbers(set);
    }
  }

  checkSameNumbers(set) {
    switch (set.length) {
      case 9:
        this.sameNumbersObject['three']++
        break;
      case 8:
        this.sameNumbersObject['four']++
        break;
      case 7:
        this.sameNumbersObject['five']++
        break;
      case 6:
        this.sameNumbersObject['six']++
        break;      
    }
    if(set.length === 7 && this.arrayNumbers.includes(this.bonus)) {
      this.sameNumbersObject['bonus']++
    }
  }
  
  printWinningStatics() {
    let winningPrice = 
    this.sameNumbersObject['three'] * 5000 
    + this.sameNumbersObject['four']* 50000
    + this.sameNumbersObject['five'] * 1500000
    + this.sameNumbersObject['bonus'] * 30000000 
    + this.sameNumbersObject['six'] * 2000000000;

    const rate = winningPrice/this.price * 100;
    
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
