import Lotto from "./Lotto.js";
import UserBonusNumber from "./domain/UserBonusNumber.js";
import UserPayment from "./domain/UserPayment.js";
import UserBaseNumbers from "./domain/UserBaseNumbers.js";
import LottoEvaluator from "./domain/LottoEvaluator.js";
import ReturnRate from "./domain/ReturnRate.js";
import { runLotteryMachine } from "./domain/RunLotteryMachine.js";
import { ask } from "./UI/inputView.js";
import { print } from "./UI/outputView.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "./const/Messages.js";

class App {
  constructor() {
    this.base = new UserBaseNumbers();
    this.bonus = new UserBonusNumber();
    this.payment = new UserPayment();
    this.lottoEvaluator = null;
  }

  async play() {
    try {
      await this.setLotto();
      const userTickets = this.createTickets();
      this.evaluateLotto(userTickets);
      this.returnRate();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async setLotto() {
    const maxAttempts = 3;
    let attempts = 0;

    while (attempts < maxAttempts) {
      try {
        await this.getUserLottoInput();
        break;
      } catch (error) {
        Console.print(error.message);
        attempts += 1;
        if (attempts >= maxAttempts) {
          Console.print(ERROR.MAXIMUM_ATTEMPTS_REACHED);
          break;
        }
      }
    }
  }

  async getUserLottoInput() {
    const pay = await ask.payment();
    const baseNums = await ask.baseNumbers();
    const bonusNum = await ask.bonusNumber();

    this.payment.setUserPayment(pay);
    this.base.setBaseNumbers(baseNums);
    this.bonus.setBonusNumber(bonusNum);

    const lottoNumbers = this.base.getBaseNumbers();
    new Lotto(lottoNumbers);
  }

  createTickets() {
    const ticketCount = this.payment.numberOfTickets();
    print.howManyBuyTickets(ticketCount);
    const userTickets = [];

    for (let i = 0; i < ticketCount; i++) {
      userTickets.push(this.createLotto());
    }
    return userTickets;
  }

  createLotto() {
    const randomLottoNumbers = runLotteryMachine();
    const myLotto = new Lotto(randomLottoNumbers);
    myLotto.ascendingOrder();
    print.formattedNumbers(myLotto.getNumbers());
    return myLotto.getNumbers();
  }

  evaluateLotto(userTickets) {
    print.prizeStatistics();
    print.dashLine();
    const baseNumbers = this.base.getBaseNumbers();
    const bonusNumber = this.bonus.getBonusNumber();

    this.lottoEvaluator = new LottoEvaluator(baseNumbers, bonusNumber);
    const results = this.lottoEvaluator.evaluateTickets(userTickets);
    print.prizeResults(results);
  }

  returnRate() {
    const totalPrize = this.lottoEvaluator.calculatePrize();
    const totalPayment = this.payment.getUserPayment();

    const returnRateCalculator = new ReturnRate(totalPrize, totalPayment);
    const returnRateString = returnRateCalculator.getReturnRateString();
    print.returnRate(returnRateString);
  }
}

export default App;
