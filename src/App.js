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


  

  async play() {
    const INPUT_MONEY = await input(PRINT_MESSAGE.INPUT_MONEY);
    const LOTTO_COUNT = this.getLottoCount(+INPUT_MONEY);


    
  }
}

export default App;
