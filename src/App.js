import Controller from "./Controller.js";
import { Data } from "./Model.js";
import Lotto from "./Lotto.js";
import View from "./View.js";

class App {
    async play() {
        View.moneyInputAsk();
        Data.money = await Controller.userInput();
        Data.amount = Controller.priceToAmount(Data.money);

        for (let i = 0; i < Data.amount; i++)
            Data.userLottoArray.push(
                new Lotto(Controller.generateRandomLottoNum())
            );
        View.showLottoNum(Data.amount, Data.userLottoArray);

        View.lottoNumInputAsk();
        Data.winningLotto = new Lotto(
            Controller.lottoNumToArray(await Controller.userInput())
        );

        View.bonusNumInputAsk();
        const TMP = await Controller.userInput();
        if (Controller.isAllowedLottoNum(TMP)) Data.bonusNum = TMP;

        Data.userLottoArray.forEach((userlottoNum) => {
            const RESULT = Controller.compareLottoNum(
                userlottoNum.getLottoNum(),
                Data.winningLotto.getLottoNum(),
                Data.bonusNum
            );
            if (Controller.isAllowedResult(Data.lottoResult, RESULT))
                Data.lottoResult[RESULT] += 1;
        });

        View.showStatisticsResult(
            Data.lottoResult,
            Controller.rateOfReturnCal(Data.money, Data.lottoResult)
        );
    }
}

export default App;
