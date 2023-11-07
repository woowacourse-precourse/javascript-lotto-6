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
  MAX_NUMBER,
  LOTTO_MONEY,
  LOTTO_RESULT,
  DELIMITER_SPACE
} from "./constants.js";
import Lotto from "./Lotto.js";
import TargetNumber from "./TargetNumber.js";
import BonusNumber from "./BonusNumber.js";

class App {
  lottoPrice;
  lottoTickets;
  targetNumber;
  bonusNumber;
  result;
  profits;

  constructor() {
    this.lottoPrice = 0;
    this.lottoTickets = [];
    this.targetNumber = new TargetNumber;
    this.result = {
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0
    };
    this.profits = 0;
  }

  async play() {
    while(!this.lottoPrice){
      await this.getLottoPrice();
    }

    this.setLottoNumbers();
    this.showLottoNumbers();

    while(this.targetNumber.getTargetNumber().length === 0){
      await this.targetNumber.setTargetNumber();
    }

    this.bonusNumber = new BonusNumber(this.targetNumber.getTargetNumber());
    
    while(this.bonusNumber.getBonusNumber() === 0){
      await this.bonusNumber.setBonusNumber();
    }

    this.showLottoResult();
    this.showRate();
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
      this.lottoTickets.push(new Lotto(this.getLottoNumber()));
    }
  }

  showLottoNumbers() {
    Console.print(this.lottoTickets.length + MESSAGE.LOTTO_TICKET);

    this.lottoTickets.forEach((lotto) => {
      Console.print(`[${String(lotto.getNumbers()).split(DELIMITER).join(DELIMITER_SPACE)}]`);
    })
  }

  getLottoNumber() {
    return Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH);
  }

  showLottoResult() {
    Console.print('당첨 통계\n---');
    
    this.lottoTickets.forEach((lotto) => {
      const matchTargetNumber = lotto.getMatchTargetNumber(this.targetNumber.getTargetNumber());
      const matchBonusNumber = lotto.getMatchBonusNumber(this.bonusNumber.getBonusNumber());
     
      this.updateResult(matchTargetNumber , matchBonusNumber)
    })

    for (const KEY in this.result) {
      Console.print(`${LOTTO_RESULT[KEY]} - ${this.result[KEY]}개`);
      this.profits += LOTTO_MONEY[KEY] * this.result[KEY];
    }

  }

  updateResult(matchTargetNumber , matchBonusNumber) {
    switch(matchTargetNumber){
      case 6:
        this.result.FIRST += 1;
        break;
      case 5:
        matchBonusNumber ? this.result.SECOND += 1 : this.result.THIRD += 1;
        break;
      case 4:
        this.result.FOURTH += 1;
        break;
      case 3:
        this.result.FIFTH += 1;
        break;
    }
  }

  showRate() {
    const rate = ((this.profits/this.lottoPrice) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`) 
  }
}

export default App;
