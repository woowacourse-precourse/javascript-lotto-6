import { InputView } from '../View/InputView';
import { OutputView } from '../View/OutputView';
import { integrateWinLottery } from '../Modules/Result';
import { Purchase, getPurchaseAmount } from '../Modules/Purchase';
import { Lotto } from '../Lotto';
import { Bonus } from '../Modules/Bonus';


function Game() {
    let amount, winningNumbers, bonusNumber, quantity, winningDetails;
    while (true) {
        amount = InputView.getPurchaseAmount();
        if (new Purchase(amount)) {
            quantity = getPurchaseAmount(amount);
            break;
        }
    }

    OutputView.printPurchaseAmount(quantity);
    OutputView.printLotteries(quantity);

    while (true) {
        winningNumbers = InputView.getWinningNumbers();
        if (new Lotto(winningNumbers)) break;
    }

    while (true) {
        bonusNumber = InputView.getBonusNumber();
        if (new Bonus(bonusNumber)) break;
    }

    winningDetails = integrateWinLottery(winningNumbers, bonusNumber, quantity); //5등 ~ 1등
    OutputView.printLottoCount(winningDetails);

    OutputView.printLottoReturns(amount, winningNumbers, bonusNumber);

}

export default Game;