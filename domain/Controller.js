import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE } from "../src/const/message";
import { ERROR } from "../src/const/error";
import Lotto from "./Lotto";
import checkBonus from "./Bonus";


class Controller {
#priceAttempt = 0;
#maxPriceAttempt = 3;

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

  async getLottoPrice() {
    let validPriceInput = false;
    while (!validPriceInput && this.#priceAttempt < this.#maxPriceAttempt) {
      const priceInput = await Console.readLineAsync(MESSAGE.BUY);
      try {
        if (isNaN(Number(priceInput))) {throw new Error(ERROR.NAN);}
        if (priceInput % 1000 !== 0 || priceInput === 0) {throw new Error(ERROR.THOUSAND);}
        this.price = priceInput;
        this.count = parseInt(priceInput / 1000);
        validPriceInput = true;
      } catch (error) {
        Console.print(error.message);
        this.#priceAttempt++;
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
    let winningNumbers;
    const getWinningNumbers = await Console.readLineAsync(MESSAGE.WINNING_NUMBER);
    const bonusNumbers = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);
      try {
        const checkWinning = new Lotto(getWinningNumbers.split(',').map(Number));
        winningNumbers = getWinningNumbers.split(',').map(Number); // 쉼표로 구분된 값을 배열로 변환합니다.
        this.winning = Array.from(winningNumbers);
        const number = [...this.winning, Number(bonusNumbers)];
        const checkbonus = new checkBonus(number);
      } catch (error) {
        Console.print(error.message);
      }
      this.bonus = Number(bonusNumbers);
  }


  getWinningLottos() {
    for(let i = 0; i < this.count; i++){
      const temporaryArray = this.arrayNumbers[i].map(Number)
      const newArray = [...temporaryArray,...this.winning]
      const setObject = new Set(newArray)
      const set = Array.from(setObject);

      this.checkSameNumbers(set);
      if(set.length === 7 && this.arrayNumbers[i].includes(this.bonus)) {
        this.sameNumbersObject['bonus']++
      }
    }
  }

  checkSameNumbers (set) {
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
        break;}
    }
  
  printWinningStatics() {
    let prizeAward = [5000, 50000, 1500000, 2000000000, 30000000]
    let winningPrice = 0;
    let sameNumberArray = Object.values(this.sameNumbersObject)

    for(let i = 0; i< prizeAward.length; i++){
      winningPrice = winningPrice + sameNumberArray[i] * prizeAward[i]
    }
    const rate = winningPrice/this.price *100;
    const percent = rate.toFixed(1);

    this.printResult(percent);
  }

  printResult (percent) {
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


export default Controller;


