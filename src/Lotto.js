import { Random } from '@woowacourse/mission-utils';

const PRIZE_TABLE = [5000, 50000, 1500000, 30000000, 2000000000];

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error('로또 번호는 6개여야 합니다.');
        }
    }

    getMatchedNumbers(winningNumbers) {
        return this.#numbers.filter((number) => winningNumbers.includes(number));
    }
}

export default Lotto;
