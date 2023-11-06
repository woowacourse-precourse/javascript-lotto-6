import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/messages';
import { Lotto } from '../Lotto';
import { Purchase } from '../Purchase';
import { Bonus } from '../Bonus';


const InputView = {
    getPurchaseAmount() { //구매 금액 입력
        Console.readLine(INPUT.MONEY, (input) => {
            const amount = Number(input);
            const purchase = new Purchase(amount);
            if (purchase.validateNumber() || purchase.validateAmount()) return this.getPurchaseAmount(); //재입력 
            return purchase.getPurchaseAmount(); //구매 금액 반환 
        });
        
    },

    getWinningNumbers() {
        Console.readLine(INPUT.LOTTO, (input) => {
            const number = input.split(',').map(Number);
            const lotto = new Lotto(number);
            if (lotto.validateLength() || lotto.validateRange() || lotto.validateDuplicate() || lotto.validateNumber()) {
                return this.getWinningNumbers(); //재입력
            }
            return number; //로또 당첨 번호 반환
        });
    },

    getBonusNumber(winningNumbers) {
        Console.readLine(INPUT.BONUS, (input) => {
            const bonusNumber = Number(input);
            const bonus = new Bonus(winningNumbers, bonusNumber);
            if (bonus.validateRange() || bonus.validateDuplicate() || bonus.validateNumber()) {
                return this.getBonusNumber(winningNumbers); //재입력
            }
            return bonusNumber; //보너스 번호 반환
        });
    }
};

export default InputView;