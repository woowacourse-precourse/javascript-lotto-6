import Computer from "./feat/Computer.js";
import User from "./feat/User.js";

class App {
  async play() {
    const computer = new Computer();
    const user = new User();
    // computer.issuanceLotto(5);
    user.purchaseAmount();
  }
}
const app = new App();
app.play();
export default App;
