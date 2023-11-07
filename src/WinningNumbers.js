import { Console } from "@woowacourse/mission-utils";
import BonusWinningLotto from './BonusWinningLotto.js';
import DefaultWinningLotto from './DefaultWinningLotto.js';

class WinningNumbers {
    WINNING_LOTTO;

    DEFAULT_WINNING_LOTTO;
    BONUS_WINNING_LOTTO;
    
    DEFAULT_WINNING_NUMBERS_INPUT_MESSEGSE = '당첨 번호를 입력해 주세요.\n';
    BONUS_WINNING_NUMBERS_INPUT_MESSEGSE = '보너스 번호를 입력해 주세요.\n';


    async #getDefaultWinningNumbers() {
        let DEFAULT_WINNING_NUMBERS = (await Console.readLineAsync(this.DEFAULT_WINNING_NUMBERS_INPUT_MESSEGSE)).split(',');
        
        DEFAULT_WINNING_NUMBERS = DEFAULT_WINNING_NUMBERS.map(Number);
        console.log(DEFAULT_WINNING_NUMBERS);
        this.DEFAULT_WINNING_LOTTO = new DefaultWinningLotto(DEFAULT_WINNING_NUMBERS);
    }

    async #getBonusWinningNumbers() {
        const BONUS_WINNING_NUMBER = parseInt(await Console.readLineAsync(this.BONUS_WINNING_NUMBERS_INPUT_MESSEGSE));
        
        this.BONUS_WINNING_LOTTO = new BonusWinningLotto(this.DEFAULT_WINNING_LOTTO, BONUS_WINNING_NUMBER);
    }

    async getWinningNumbers() {
        while(true){
            try {
                await this.#getDefaultWinningNumbers();
            } catch(e){
                await Console.print(e);
                continue;
            }
            break;
        }

        while(true){
            try {
                await this.#getBonusWinningNumbers();
            } catch(e){
                await Console.print(e);
                continue;
            }
            break;
        }
    }
}

export default WinningNumbers;