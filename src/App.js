import Lotto from './Lotto.js';
import {input} from './util/input.js';
import {print} from './util/output.js';
import {PRINT_MESSAGE} from './constants/message.js';
import { ERROE_MESSAGE } from './constants/error.js';
import { Random } from '@woowacourse/mission-utils';
class App {
  
  lottos = [];


  getLottoCount(money){
    if(isNaN(money)){
      throw new Error(ERROE_MESSAGE.MONEY_ISNAN);
    }

    if(money < 1000){
      throw new Error(ERROE_MESSAGE.MONEY_UPPER_1000);
    }

    if(money % 1000 !== 0){
      throw new Error(ERROE_MESSAGE.MONEY_UNIT_1000);
    }

    return money / 1000;
  }

  async printBuyCount(count){
    await print(`${count}${PRINT_MESSAGE.BUY_COUNT}`);
  }
  
  async createLottos(count){
    for(let i = 0 ; i < count ; i++){
      this.insertLotto();  
    }
  }

  async insertLotto(){
    const RANDOMS = await Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(RANDOMS);
    this.lottos.push(lotto);
    return lotto;
  }
  
  makeNumberArray(numberString){
    const numbers = numberString.split(',');
    if(numbers.length !== 6) throw new Error("6개여야함");
    return numbers.map(this.validateNumber);
  }

  validateNumber(number){
    const N = +number;
    if(isNaN(N)) throw new Error("숫자가 아님");
    if(N < 1 || N > 45) throw new Error("범위 밖임");
    if(Math.floor(N) !== N) throw new Error("정수가 아님");

    return N;
  }

  validateBonusNumber(number){
    const N = +number;
    if(isNaN(N)) throw new Error("숫자가 아님");
    if(N < 1 || N > 45) throw new Error("범위 밖임");
    if(Math.floor(N) !== N) throw new Error("정수가 아님");
    return N;
  }

  printResult(){
    this.lottos.forEach(lotto => {
      
    });
  }

  async play() {
    //돈 입력 및 로또 개수 구하기
    const INPUT_MONEY = await input(PRINT_MESSAGE.INPUT_MONEY);
    const LOTTO_COUNT = this.getLottoCount(+INPUT_MONEY);

    await this.printBuyCount(LOTTO_COUNT);
    print('');

    //로또 생성
    await this.createLottos(LOTTO_COUNT);

    //각 로또 번호 생성
    const INPUT_NUMBERS = await input(PRINT_MESSAGE.NUMBERS);
    const NUMBERS = this.makeNumberArray(INPUT_NUMBERS);

    //보너스 번호 생성
    const INPUT_BONUS_NUMBERS = await input(PRINT_MESSAGE.BONUS_NUMBER);
    const BONUS_NUMBERS = this.validateBonusNumber(INPUT_BONUS_NUMBERS);

    
    
  }
}

export default App;
