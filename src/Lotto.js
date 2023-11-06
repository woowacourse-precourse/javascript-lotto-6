import {MissionUtils} from "@woowacourse/mission-utils";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    // TODO: 추가 기능 구현
    static sortNumbers(numbers) {
        return [...numbers].sort((a, b) => a - b);
    }

    displayNumbers() {
        const sortedNumbers = Lotto.sortNumbers(this.#numbers);
        MissionUtils.Console.print(`[${sortedNumbers.join(', ')}]`);
    }

    winningNumbersCount(winningNumbers) {
        let count = 0;

        for (const number of this.#numbers) {
            if (winningNumbers.includes(number)) {
                count++;
            }
        }

        return count;
    }
    bonusMatch(bonusNumber){
        return this.#numbers.includes(bonusNumber);
    }
}

export default Lotto;
