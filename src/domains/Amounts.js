import { ConsoleError } from "../utils/CustomError.js"
import ERROR from "../constants/error.js";
import SET_LOTTO from "../constants/lotto.js";

class Amounts{

  #amounts

  constructor(amounts){
    this.#validate(amounts)
    this.#amounts = amounts
  }

  #validate(amounts){

    if(isNaN(amounts)){
      throw new ConsoleError(ERROR.common.notANumber)
    }

    if(amounts < 0 || amounts % 1 !== 0){
      throw new ConsoleError(ERROR.common.notNatural)
    }

    if(amounts % SET_LOTTO.lotto.price !== 0){
      throw new ConsoleError(ERROR.amounts.rest)
    }

    if(amounts === ''){
      throw new ConsoleError(ERROR.common.empty)
    }

    return amounts
  }
  
  getAmounts(){
    return this.#amounts
  }

}

export default Amounts