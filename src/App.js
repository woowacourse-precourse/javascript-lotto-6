import User from "./User.js";

class App {
  async play() {
    this.user = new User();
    const purchaseAmount = this.user.inputPurchaseAmount();
  }
}

export default App;
