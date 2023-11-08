import { Console } from "@woowacourse/mission-utils";
import { 
  ERROR_MESSAGE,
  PRICE_UNIT,
  PRICE_ZERO,
  LOTTO_MONEY
} from "../constants/constants.js";
import OutputView from "../view/outputView.js";
import InputView from "../view/inputView.js";
import Lotto from "../Lotto.js";
import TargetNumber from "../model/TargetNumber.js";
import BonusNumber from "../model/BonusNumber.js";
import { getLottoNumber } from "../utils/getLottoNumber.js";

class Controller {
  lottoPrice;
  lottoTickets;
  targetNumber;
  bonusNumber;
  result;
  profits;

  constructor() {
    this.lottoPrice = 0;
    this.lottoTickets = [];
    this.result = {
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0
    };
    this.profits = 0;
  };

  async init() {
    while(!this.lottoPrice){
      await this.getLottoPrice();
    };

    this.targetNumber = new TargetNumber();
    while(this.targetNumber.getTargetNumber().length === 0){
      await this.targetNumber.setTargetNumber();
    };

    this.bonusNumber = new BonusNumber(this.targetNumber.getTargetNumber());
    while(this.bonusNumber.getBonusNumber() === 0){
      await this.bonusNumber.setBonusNumber();
    };

    this.setLottoResult();
    OutputView.showLottoResult(this.result);
    OutputView.showRate(this.profits , this.lottoPrice);
  };

  async getLottoPrice() {
    const lottoPrice = await InputView.inputLottoPrice();
  
    try{
      this.checkLottoPriceValidity(lottoPrice);
      this.lottoPrice = lottoPrice;
      this.setLottoNumbers();
    }catch (error){
      Console.print(error);
    };
  };

  checkLottoPriceValidity(lottoPrice) {
    if(isNaN(lottoPrice)) throw ERROR_MESSAGE.PRICE_NOT_STRING;

    if(lottoPrice === PRICE_ZERO) throw ERROR_MESSAGE.PRICE_NOT_ZERO;

    if(lottoPrice % PRICE_UNIT != PRICE_ZERO) throw ERROR_MESSAGE.PRICE_NOT_REST;
  };

  setLottoNumbers() {
    const lottoTicketLen = this.lottoPrice / PRICE_UNIT;

    for(let i = 0; i < lottoTicketLen; i++){
      this.lottoTickets.push(new Lotto(getLottoNumber()));
    };

    OutputView.showLottoCount(this.lottoTickets.length);
    OutputView.showLottoNumbers(this.lottoTickets);
  };

  setLottoResult() {
    this.lottoTickets.forEach((lotto) => {
      const matchTargetNumber = lotto.getMatchTargetNumber(this.targetNumber.getTargetNumber());
      const matchBonusNumber = lotto.getMatchBonusNumber(this.bonusNumber.getBonusNumber());
     
      this.updateResult(matchTargetNumber , matchBonusNumber);
    });

    this.calcaulateProfits();
  }

  calcaulateProfits() {
    for (const key in this.result) {
      this.profits += LOTTO_MONEY[key] * this.result[key];
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
  };
}

export default Controller;
