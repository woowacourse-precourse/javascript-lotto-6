import Controller from "./Controller.js";
import User from "./User.js";
import View from "./View.js";
import Winning from "./WinningLotto.js";

class App {
    async play() {
        const USER = new User();
        await USER.setMoney();

        for (let i = 0; i < USER.getAmount(); i++)
            USER.setUserLotto(Controller.generateRandomLotto());

        View.showLotto(USER.getUserLotto());

        const WINNING = new Winning();
        await WINNING.setWinning();
        await WINNING.setBonus();

        const RESULT = {};
        for (let i = 0; i < USER.getUserLotto().length; i++) {
            const TMP = Controller.compare(
                USER.getUserLotto()[i],
                WINNING.getWinning(),
                WINNING.getBonus()
            );
            if (TMP in RESULT) RESULT[TMP] += 1;
            else RESULT[TMP] = 1;
        }
        const rateOfReturn = Controller.rateOfReturnCal(
            USER.getMoney(),
            RESULT
        );
        View.showStatistics(RESULT, rateOfReturn);
    }
}

export default App;
