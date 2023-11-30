import Lotto from './Lotto.js';

class WinLotto {
    #lotto;
    #bonusNumber;

    constructor(lotto, bonus) {
        this.#validate(lotto, bonus);
        this.#lotto = lotto;
        this.#bonusNumber = bonus;
    }

    #validate(lotto, bonus) {
        if (!(typeof bonus === 'number' && bonus)) {
            throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자만 사용 가능합니다.');
        }
        if (!(bonus >= 1 && bonus <= 45)) {
            throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자만 사용 가능합니다.');
        }
        if (lotto.getNumbers().includes(bonus)) {
            throw new Error('[ERROR] 당첨 번호로 사용된 번호는 보너스 번호로 사용할 수 없습니다.');
        }
    }

    getLotto() {
        return this.#lotto;
    }

    getBonusNumber() {
        return this.#bonusNumber;
    }
}

export default WinLotto;