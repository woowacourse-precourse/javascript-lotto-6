import Customer from "../src/Customer";
import inputHandlers from "./inputHandlers";

class App {
  async play() {
    const payment = await inputHandlers.inputPayment();
    
    const customer = new Customer(payment);
    customer.buyLottoTickets();

    const winnigNumbers = await inputHandlers.inputWinningNumbers();
    const bonusNumber = await inputHandlers.inputBonusNumber();

  }
}

export default App;
