import Controller from "./Controller.js";
import User from "./User.js";
import View from "./View.js";

class App {
    async play() {
        const USER = new User();
        USER.setMoney(await Controller.userInputMoney());

        for (let i = 0; i < USER.getAmount(); i++)
            USER.setUserLotto(Controller.generateRandomLotto());

        View.showLottoNum(USER.getAmount(), USER.getUserLotto());

        const WINNING_LOTTO = await Controller.userInputLotto();
        const BONUS = await Controller.userInputBonus(WINNING_LOTTO);

        const RESULT = {};

        for (let i = 0; i < USER.getUserLotto().length; i++) {
            const TMP = Controller.compare(
                USER.getUserLotto()[i],
                WINNING_LOTTO,
                BONUS
            );
            if (TMP in RESULT) RESULT[TMP] += 1;
            else RESULT[TMP] = 1;
        }

        const rateOfReturn = Controller.rateOfReturnCal(
            USER.getMoney(),
            RESULT
        );
        View.showStatisticsResult(RESULT, rateOfReturn);
    }
}

export default App;
