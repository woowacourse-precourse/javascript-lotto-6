import Calculator from "./Calculator";
import Cashier from "./Cashier";
import Checker from "./Checker";
import DrawingMachine from "./DrawingMachine";
import Statistics from "./Statistic";
import User from "./User";

class App {
  paymentAmount;
  userLottos;

  async buyLottos(){
    const user = new User();
    const cashier = new Cashier(user);
    const paymentAmount = await cashier.getPayment();
    cashier.getNumberOfTickets(paymentAmount);
    const userLottos = cashier.issueLottos();
    user.getLottos(userLottos);
    return {paymentAmount:paymentAmount, userLottos:userLottos}
  }

  async drawWinningLottoAndBonus(){
    const drawingMachine = new DrawingMachine();

    await drawingMachine.drawWinningLotto();
    await drawingMachine.drawBonusBall();

    const {lotto,bonusBall} = drawingMachine.getWinningLottoAndBonusBall();

    return {
      winningLotto :lotto,
      bonusBall :bonusBall
    }
  }

  checkLottos(winnigLotto, bonusBall, userLottos ,paymentAmount){
    const checker = new Checker(winnigLotto, bonusBall, userLottos);

    const winningResult = checker.calculateWinningResult();

    const calculator = new Calculator(winningResult);

    const rateOfReturn = calculator.getRateOfReturn(winningResult,paymentAmount);

    return {
      winningResult:winningResult,
      rateOfReturn: rateOfReturn
    }
  }
  printResult(winningResult, rateOfReturn){
    const statistics = new Statistics();

    statistics.print(winningResult, rateOfReturn);
  }

  async play() {

    const {paymentAmount, userLottos} = await this.buyLottos();

    const {winningLotto, bonusBall} = await this.drawWinningLottoAndBonus();

    const {winningResult, rateOfReturn} =this.checkLottos(winningLotto,bonusBall,userLottos,paymentAmount);

    this.printResult(winningResult, rateOfReturn);
  }
}

export default App;
