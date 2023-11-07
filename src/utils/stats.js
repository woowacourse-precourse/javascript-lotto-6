import SET_LOTTO from "../constants/lotto.js"
import MESSAGE from "../constants/message.js"
import { Console } from "@woowacourse/mission-utils"

class Stats{

  #result
  #numberOfRanks

  constructor(result){
    this.#result = result
    this.#numberOfRanks = 5
  }

  getStats(){
    return {
      fifth: `${MESSAGE.win.fifth} - ${this.#result.fifth}개`,
      fourth: `${MESSAGE.win.fourth} - ${this.#result.fourth}개`,
      third: `${MESSAGE.win.third} - ${this.#result.third}개`,
      second: `${MESSAGE.win.second} - ${this.#result.second}개`,
      first: `${MESSAGE.win.first} - ${this.#result.first}개`
    }    
  }

  profits(){
    const results = Object.values(this.#result);
    const prizes = Object.values(SET_LOTTO.prize);

    let win = 0

    for(let i = 0; i < this.#numberOfRanks; i++){
      win = win + ( results[i] * prizes[i] );
    } 

    return win;
  }
}

export default Stats