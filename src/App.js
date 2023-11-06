import { Console , Random} from "@woowacourse/mission-utils";
import { 
  USER_INPUT,
  MESSAGE,
  ERROR_MESSAGE,
  PRICE_UNIT,
  PRICE_ZERO
} from "./constants.js";
import Lotto from "./Lotto.js";

class App {
  lottoPrice;
  lottiTickets;

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
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default App;
