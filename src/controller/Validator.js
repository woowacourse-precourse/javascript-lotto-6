export class Validator {
    /**
     * 숫자 유효성 검사
     * @param {number} number 
     */
    static validNumber(number) {
        if (isNaN(number)) {
            throw new Error("[ERROR] 입력값이 숫자가 아닙니다.");
        }
    }
    /**
     * 1000원 단위 유효성 검사
     * @param {number} number 
     */
    static validMultipleOf1000(number) {
        if (number % 1000 !== 0) {
            throw new Error("[ERROR] 입력값이 1000원 단위가 아닙니다.");
        }
    }
    /**
     * 중복값 검사
     * @param {string[]} numbers 
     */
    static validDuplicate(numbers) {
        if (new Set(numbers).size !== numbers.length) {
            throw new Error("[ERROR] 입력값에 중복된 값이 있습니다.");
        }
    }
    /**
     * Array에 숫자 형식 있는지 검사
     * @param {string[]} numbers 
     */
    static validNumbers(numbers) {
        if (numbers.some(n => isNaN(n))) {
            throw new Error("[ERROR] 입력값은 숫자 형식이어야 합니다.");
        }
    }
    /**
     * 1 ~ 45 사이의 정수값인지 검사
     * @param {number} number 
     */
    static validNumberRange(number) {
        if (number < 1 || number > 45) {
            throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
    }
    /**
     * Array에서 모든 정수가 유효한 범위인지 검사
     * @param {number[]} numbers 
     */
    static validListNumberRange(numbers) {
        numbers.forEach(n => this.validNumberRange(n));
    }
}