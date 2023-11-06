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
  LOTTO_RESULT
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

  constructor() {
    this.lottoPrice = 0;
    this.lottoTickets = [];
    this.result = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0
    };
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

    while(!this.bonusNumber){
      await this.getBonusNumber();
    }

    this.showLottoResult();
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
    this.lottoTickets.forEach((lotto) => {
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

  async getBonusNumber() {
    const input = await Console.readLineAsync(USER_INPUT.BONUS_NUMBER);
    const bonusNumber = Number(input);

    try{
      this.checkBonusNumber(bonusNumber);
      this.bonusNumber = new BonusNumber(bonusNumber);
    }catch (error){
      Console.print(error);
    }
  }

  checkBonusNumber(bonusNumber) {
    if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) throw ERROR_MESSAGE.BONUS_NUM_MIN_MAX;
    
    if (isNaN(bonusNumber)) throw ERROR_MESSAGE.BONUS_NUM_STRING;
    
    if (this.targetNumber.hasNumber(bonusNumber)) throw ERROR_MESSAGE.BONUS_NUM_DUPLICATE;
  }

  showLottoResult() {
    Console.print('당첨 통계 \n ---');
    
    this.lottoTickets.forEach((lotto) => {
      const matchTargetNumber = lotto.getMatchTargetNumber(this.targetNumber.getTargetNumber());
      const matchBonusNumber = lotto.getMatchBonusNumber(this.bonusNumber.getBonusNumber());
     
      this.updateResult(matchTargetNumber , matchBonusNumber)
    })

    for (const KEY in this.result) {
      Console.print(LOTTO_RESULT[KEY] + ' - ' + this.result[KEY] + '개');
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
}

export default App;
