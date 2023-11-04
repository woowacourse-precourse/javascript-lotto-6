import { Console } from "@woowacourse/mission-utils";
import { 
  USER_INPUT,
  ERROR_MESSAGE,
  PRICE_UNIT,
  PRICE_ZERO
} from "./constants.js";

class App {
  lottoPrice;

  constructor() {
    this.lottoPrice = 0;
  }

  async play() {
    while(!this.lottoPrice){
      await this.getLottoPrice();
    }
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

}

export default App;
