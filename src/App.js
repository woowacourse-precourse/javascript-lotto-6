import { Console , Random } from "@woowacourse/mission-utils";
import { 
  USER_INPUT,
  MESSAGE,
  ERROR_MESSAGE,
  PRICE_UNIT,
  PRICE_ZERO,
  DELIMITER,
  LOTTO_LENGTH,
  MIN_NUMBER,
  MAX_NUMBER
} from "./constants.js";
import Lotto from "./Lotto.js";
import TargetNumber from "./TargetNumber.js";

class App {
  lottoPrice;
  lottiTickets;
  targetNumber;

  constructor() {
    this.lottoPrice = 0;
    this.lottiTickets = [];
  }

  async play() {
    while(!this.lottoPrice){
      await this.getLottoPrice();
    }

    this.setLottoNumbers();
    this.showLottoNumbers();

    while(!this.targetNumber){
      await this.getTargetNumber();
    }

    Console.print( this.targetNumber.getWinNumber());
  }

  async getLottoPrice() {
    const input = await Console.readLineAsync(USER_INPUT.LOTTO_PRICE);
    const lottoPrice = Number(input);
  
    try{
      this.checkLottoPriceValidity(lottoPrice);
      this.lottoPrice = lottoPrice;
    }catch (error){
      Console.print(error);
    }
  }

  checkLottoPriceValidity(lottoPrice) {
    if(isNaN(lottoPrice)) throw ERROR_MESSAGE.PRICE_NOT_STRING;
    if(lottoPrice === PRICE_ZERO) throw ERROR_MESSAGE.PRICE_NOT_ZERO;
    if(lottoPrice % PRICE_UNIT != PRICE_ZERO) throw ERROR_MESSAGE.PRICE_NOT_REST;
  }

  setLottoNumbers() {
    const lottoTicketLen = this.lottoPrice / PRICE_UNIT;

    for(let i = 0; i < lottoTicketLen; i++){
      this.lottiTickets.push(new Lotto(this.getLottoNumber()));
    }
  }

  showLottoNumbers() {
    this.lottiTickets.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    })
  }

  getLottoNumber() {
    return Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH);
  }

  async getTargetNumber() {
    const input = await Console.readLineAsync(USER_INPUT.TARGET_NUMBER);
    const targetNumber = input.split(DELIMITER).map((number) => Number(number));

    try{
      this.checkTargetNumberValidity(targetNumber);
      this.targetNumber = new TargetNumber(targetNumber);
    }catch (error){
      Console.print(error);
    }
  }

  checkTargetNumberValidity(targetNumber) {
    if (targetNumber.length !== LOTTO_LENGTH) throw ERROR_MESSAGE.TARGET_NUM_SIX;

    if ([...new Set(targetNumber)].length !== LOTTO_LENGTH) throw ERROR_MESSAGE.TARGET_NUM_SAME;

    targetNumber.forEach((number) => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) throw ERROR_MESSAGE.TARGET_NUM_MIN_MAX;

      if (isNaN(number)) throw ERROR_MESSAGE.TARGET_NUM_STRING;
    })
  }
}

export default App;
