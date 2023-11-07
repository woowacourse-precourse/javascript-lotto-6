import Controller from "./Controller.js";
import User from "./User.js";
import Lotto from "./Lotto.js";
import View from "./View.js";

class App {
    async play() {
        const USER = new User();
        USER.setMoney(await Controller.userInputMoney());
        console.log(USER.getAmount());
    }
}

export default App;
