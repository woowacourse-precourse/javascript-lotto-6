import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/messages';
import { Lotto } from '../Lotto';
import { Purchase } from '../Modules/Purchase';
import { Bonus } from '../Modules/Bonus';


const InputView = {
    getPurchaseAmount() {
        Console.readLine(INPUT.MONEY, (input) => {
            const amount = Number(input);
            const purchase = new Purchase(amount);
            if (purchase.validateNumber() || purchase.validateAmount()) return this.getPurchaseAmount();
        })
    },

    getWinningNumbers() {
        Console.readLine(INPUT.LOTTO, (input) => {
            const number = input.split(',').map(Number);
            const lotto = new Lotto(number);
            if (lotto.validateLength() || lotto.validateRange() || lotto.validateDuplicate() || lotto.validateNumber()) {
                return this.getWinningNumbers();
            } 
        });
    },

    getBonusNumber(winningNumbers) {
        Console.readLine(INPUT.BONUS, (input) => {
            const bonusNumber = Number(input);
            const bonus = new Bonus(winningNumbers, bonusNumber);
            if (bonus.validateRange() || bonus.validateDuplicate() || bonus.validateNumber()) {
                return this.getBonusNumber(winningNumbers);
            }
        });
    }
};

export default InputView;