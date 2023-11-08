class BonusValidation {
    checkBonusValidation(bonusNumber) {
        if (bonusNumber === null) {
            throw new Error(WINNING_ERROR.NULL_ERROR);
        }
        //2. 숫자를 입력하지 않은 경우
            if ( Number.isNaN(bonusNumber) ) {
            throw new Error(WINNING_ERROR.NUM_ERROR);
        }
        //3. 1부터 45사이의 숫자를 입력하지 않은 경우
        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error(WINNING_ERROR.BONUS_RANGE_ERROR);
        }
        return bonusNumber;
    }
}

export default BonusValidation;