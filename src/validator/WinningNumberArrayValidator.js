//- 당첨 번호 input(당첨 번호를 입력해 주세요.)
- 1~45의 범위인지 검증
- 중복된 수는 없는지 검증
- 문자가 포함되지 않았는지 검증

import lottoNumber from '../constants/lottoNumber.js';
import errorMessage from '../constants/errorMessage.js'

class winningNumberArrayValidator {
    validateNotNumber(winningNumberArray) {
        winningNumberArray.forEach((winningNumber) => {
            if (Number.isNaN(winningNumber)) {
                throw new Error(errorMessage.NOT_NUMBER);
            }
        })
    }

    validateArrayLength(winningNumberArray) {
        if (winningNumberArray.length !== 6) {
            throw new Error(errorMessage.NOT_SIX_COUNT);
        }
    }

    validateDuplicatedNumber(winningNumberArray) {
        if (winningNumberArray.length !== (new Set(winningNumberArray)).size) {
            throw new Error(errorMessage.DUPLICATED_NUMBER);
        }
    }

    validateNumberRange(winningNumberArray) {
        winningNumberArray.forEach(winningNumber => {
            if (winningNumber < lottoNumber.firstNumber || winningNumber > lottoNumber.lastNumber) {
                throw new Error(errorMessage.OUT_OF_RANGE);
            }
        });
    }

    static validate(winningNumberArray) {
        this.validateNotNumber(winningNumberArray);
        this.validateArrayLength(winningNumberArray);
        this.validateDuplicatedNumber(winningNumberArray);
        this.validateNumberRange(winningNumberArray);
    }
}

export default winningNumberArrayValidator;