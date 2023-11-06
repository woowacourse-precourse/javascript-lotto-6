import { ERROR_MESSAGE } from "../constants/errorMessage.js";
import { LOTTO_MESSAGE } from "../constants/lottoMessage.js";
import { generateSixRandomNumber } from "../utils/generateRandomSixNumber.js";
import { outputView } from "../views/outputView.js";

class LottoCount {
  #money;
  #count;
  #lottoArray;

  static FRONT_BRACKET = '[';
  static BACK_BRACKET = ']';

  constructor(money){
    this.#lottoArray = [];
    this.#money = money;
    this.validate();
    this.printAllLottoNumbers();
  }

  validate(){
    this.validateNumber();
    this.validateRange();
    this.validateAvailableNumber();
  }

  validateNumber() {
    if (isNaN(this.#money)) {
      throw new Error(ERROR_MESSAGE.not_number);
    }
  }

  validateRange() {
    if (this.#money <=0 ) {
        throw new Error(ERROR_MESSAGE.less_than_one);
    }
  }

  validateAvailableNumber() {
    if (this.#money % 1000 !== 0){
        throw new Error(ERROR_MESSAGE.not_multiples_of_1000);
    }
  }

  printAllLottoNumbers() {
    this.calculateLottoCounts();
    
    outputView.lineBreak();
    outputView.print(LOTTO_MESSAGE.print_purchase_count(this.#count));

    for (let i=0; i<this.#count; i+=1){
        this.printSixLottoNumber();
    }

    outputView.lineBreak();
  }

  calculateLottoCounts() {
    this.#count = this.#money / 1000;
  }

  printSixLottoNumber() {
    const sixNumbersArray = generateSixRandomNumber();
    this.#lottoArray.push(sixNumbersArray);
    outputView.print(LottoCount.FRONT_BRACKET + sixNumbersArray.join(', ') + LottoCount.BACK_BRACKET);
  }

  getLottoArray() {
    return this.#lottoArray;
  }

  getMoney() {
    return this.#money;
  }
}

export default LottoCount;