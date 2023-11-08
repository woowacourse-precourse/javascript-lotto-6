import MoneyValidator from "./MoneyValidator.js";

class LottoValidator {
    static isSixLength(numbers) {
        if (numbers.length !== 6)
            throw new Error("[ERROR] 당첨 번호는 6개입니다.");
    }

    static isAllPositiveInt(numbers) {
        numbers.forEach((number) => {
            MoneyValidator.isPositiveInt(number);
        });
    }

    static isValidRange(number) {
        if (number < 1 || number > 45)
            throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    static isAllValidRange(numbers) {
        numbers.forEach((number) => {
            if (number < 1 || number > 45)
                throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        });
    }

    static isDuplicated(numbers) {
        const numberSet = new Set(numbers);
        if (numberSet.size !== numbers.length)
            throw new Error("[ERROR] 로또 번호는 중복되지 않습니다.");
    }

    static isDuplicatedBonus(numbers, bonus) {
        if (numbers.includes(bonus))
            throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복되지 않습니다.");
    }

    static isValidNumbers(numbers) {
        this.isSixLength(numbers);
        this.isAllPositiveInt(numbers);
        this.isAllValidRange(numbers);
        this.isDuplicated(numbers);
    }

    static isValidBonus(numbers, bonus) {
        isValidRange(bonus);
        isDuplicatedBonus(numbers, bonus);
    }
}

export default LottoValidator;