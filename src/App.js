import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message";
import { ERROR } from "./const/error";
import Lotto from "../domain/Lotto";
import checkBonus from "../domain/Bonus";


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
    this.lottos = 0;
  }

  async play() {
    await this.getLottoPrice();
    await this.getMyLottos();
    this.printHowMany();
    await this.getNumbers();
    this.getWinningLottos();
    this.printWinningStatics();
  }

  // static async getLottoPrice() {

  //   this.price = await getInputs.boughtPrice();
  //   this.count = parseInt(this.price/1000);
  // }


  async getLottoPrice() {
    while (true) {
      const priceInput = await Console.readLineAsync(MESSAGE.BUY);

      try {
        if (isNaN(Number(priceInput))) {
          throw new Error(ERROR.NAN);
        }

        if (priceInput % 1000 !== 0) {
          throw new Error(ERROR.THOUSAND);
        }

        this.price = priceInput;
        this.count = parseInt(priceInput / 1000);
        return; // 올바른 값이 입력되면 함수를 종료합니다.
      } catch (error) {
        Console.print(error.message);
      }
    }
  }


  async getMyLottos() {
    for(let i = 0; i < this.count; i++){
      const takeNumber = await Random.pickUniqueNumbersInRange(1,45,6);
      const lottoNumber = takeNumber.sort((b,a)=>{return b-a});
      this.arrayNumbers.push(lottoNumber);
    }
  }

  printHowMany() {
    Console.print(`${this.count}개를 구매했습니다.`);
    for(let i = 0; i < this.count; i++){
      Console.print(`[${this.arrayNumbers[i].join(', ')}]`);
    }
  }
  
  async getNumbers() {
    let validInput = false;
    while (!validInput) {
      const winningNumbers = await Console.readLineAsync(MESSAGE.WINNING_NUMBER);
      const bonusNumbers = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);

      try {
        this.winning = new Lotto(winningNumbers.split(',')); // 쉼표로 구분된 값을 배열로 변환합니다.
        const checkbonus = new checkBonus([...this.winning, bonusNumbers]);
        this.bonus = Number(bonusNumbers);
        validInput = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }


  getWinningLottos() {
    for(let i = 0; i < this.count; i++){
      const temporaryArray = this.arrayNumbers[i].map(Number)
      const newArray = [...temporaryArray,...this.winning.map(Number)]
      const setObject = new Set(newArray)
      const set = Array.from(setObject);

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
      if(set.length === 7 && this.arrayNumbers[i].includes(this.bonus)) {
        this.sameNumbersObject['bonus']++
      }
    }
  }
  
  printWinningStatics() {
    let winningPrice = 
    this.sameNumbersObject['three'] * 5000 
    + this.sameNumbersObject['four']* 50000
    + this.sameNumbersObject['five'] * 1500000
    + this.sameNumbersObject['bonus'] * 30000000 
    + this.sameNumbersObject['six'] * 2000000000;

    const rate = winningPrice/this.price *100;
    const percent = rate.toFixed(1);
    
    Console.print(
    `당첨 통계
    ---
    3개 일치 (5,000원) - ${this.sameNumbersObject['three']}개
    4개 일치 (50,000원) - ${this.sameNumbersObject['four']}개
    5개 일치 (1,500,000원) - ${this.sameNumbersObject['five']}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.sameNumbersObject['bonus']}개
    6개 일치 (2,000,000,000원) - ${this.sameNumbersObject['six']}개
    총 수익률은 ${percent}%입니다.`)
  }
  
}

export default App;


