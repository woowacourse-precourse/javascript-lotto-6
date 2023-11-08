
const MAX_LOTTO_NUMBER_LENGTH = 6;
export default class Validate {
    isNumber(inputData) {
        if (isNaN(inputData)) {
            throw new Error("[ERROR] 숫자(양수)만 입력해주세요! (구분자는 콤마(,)입니다)");
        }
    }
    isNumberArray(inputData) {
        for (let i = 0; i < MAX_LOTTO_NUMBER_LENGTH; i++) {
            this.isNumber(inputData[i]);
        }
    }
    isArrayLength(inputData) {
        if (inputData.length !== 6) {
            throw new Error("[ERROR] 당첨번호 6개 입력해주세요");
        }
    }

    isCostRange(number) {
        if (number < 1000) {
            throw new Error("[ERROR] 입력 금액은 최소 1000원 이상 넣어야 합니다.");
        }
    }

    isNumberRange(number) {
        if ((number > 45) || (number < 1)) {
            throw new Error("[ERROR] 입력번호는 1~45 사이 수여야 합니다.");
        }
    }
    isNumberArrayRange(inputData) {
        for (let i = 0; i < MAX_LOTTO_NUMBER_LENGTH; i++) {
            this.isNumberRange(inputData[i]);
        }
    }

    isDuplicationBonusNumberAndWinningNumber(bonusNumber, winningNumber) {
        if (winningNumber.includes(Number(bonusNumber))) {
            throw new Error("[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.");
        }
    }

    isDuplicationNumber(inputData) {
        const seen = {};

        for (const item of inputData) {
            if (seen[item]) {
                throw new Error("[ERROR] 중복된 수 없이 입력해주세요");
            }
            seen[item] = true;
        }
    }

    isCost(cost) {
        this.isNumber(cost);
        this.isCostRange(cost)
    }

    isBonusNumber(bonusNumber, winningNumber) {
        this.isNumber(bonusNumber);
        this.isNumberRange(bonusNumber);
        this.isDuplicationBonusNumberAndWinningNumber(bonusNumber, winningNumber);
    }

    isWinningNumber(winningNumber) {
        this.isArrayLength(winningNumber);
        this.isNumberArray(winningNumber);
        this.isNumberArrayRange(winningNumber);
        this.isDuplicationNumber(winningNumber);
    }
}