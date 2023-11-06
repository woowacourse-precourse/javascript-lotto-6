/* eslint-disable lines-between-class-members */
import { REGEX_NUM } from '../constants/regex'
import { ERR_MESSAGE } from '../constants/message'
import { LOTTO_VAL } from '../constants/constant'

class PlayerLottoAmount{
  #lottoAmount
  #totalMoney

  constructor(){
    this.#lottoAmount = 0;
    this.#totalMoney = 0;
  }

  #isNumber(str){
    if(!REGEX_NUM.test(str)) throw new Error(ERR_MESSAGE.isNotNum);
  }

  #isDividedThousand(str){
    const check = Number(str) % LOTTO_VAL === 0;
    if(!check) throw new Error(ERR_MESSAGE.isNotDividedThousand);
  }

  validate(str){
    this.#isNumber(str);
    this.#isDividedThousand(str);
  }

  #setLottoAmount(str){
    this.#lottoAmount = Number(str) / LOTTO_VAL;
  }

  #setTotalMoney(str){
    this.#totalMoney = Number(str);
  }
  
  setVariables(str){
    this.#setLottoAmount(str);
    this.#setTotalMoney(str);
  }

  getLottoAmount(){
    return this.#lottoAmount;
  }

  getTotalMoney(){
    return this.#totalMoney;
  }
}

export default PlayerLottoAmount