import Controller from "./Controller.js";
import User from "./User.js";
import View from "./View.js";
import Winning from "./Winning.js";

class App {
    async play() {
        const user = new User();
        await user.setMoney();

        for (let i = 0; i < user.getAmount(); i++)
            user.setUserLotto(Controller.generateRandomLotto());

        View.showLotto(user.getUserLotto());

        const winning = new Winning();
        await winning.setWinning();
        await winning.setBonus();

        const result = {};
        for (let i = 0; i < user.getUserLotto().length; i++) {
            const tmp = Controller.compare(
                user.getUserLotto()[i],
                winning.getWinning(),
                winning.getBonus()
            );
            if (tmp in result) result[tmp] += 1;
            else result[tmp] = 1;
        }
        const rateOfReturn = Controller.rateOfReturnCal(
            user.getMoney(),
            result
        );
        View.showStatistics(result, rateOfReturn);
    }
}

export default App;
