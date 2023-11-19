import {Calculator,Checker} from './models/index.js'
import { Cashier,DrawingMachine ,OutputController } from "./controllers/index.js";

class App {
  paymentAmount;
  userLottos;

  async buyLottos(){
    const cashier = new Cashier();
    const paymentAmount = await cashier.getPayment();
    cashier.getNumberOfTickets(paymentAmount);
    const userLottos = cashier.issueLottos();
    OutputController.printPurchasedLottos(userLottos);
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

  async play() {
    const {paymentAmount, userLottos} = await this.buyLottos();

    const {winningLotto, bonusBall} = await this.drawWinningLottoAndBonus();

    const {winningResult, rateOfReturn} =this.checkLottos(winningLotto,bonusBall,userLottos,paymentAmount);

    OutputController.printStatics(winningResult, rateOfReturn);

  }
}

export default App;
