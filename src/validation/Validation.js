import ValidationUtils from './ValidationUtils.js';

class Validation {
    
    // 구매 금액 검증
    static validatepurchaseInput(input) {
        ValidationUtils.isemptyInput(input);
        ValidationUtils.isNotPositiveInteger(input);
        ValidationUtils.isNotDivisibleLottoPrice(input);
    }

    // 보너스 넘버 검증
    static validateBonusNumber(input) {
        ValidationUtils.isemptyInput(input);
        ValidationUtils.isNotPositiveInteger(input);
        ValidationUtils.inLottoNumberRange(input);
    }

    // 로또 넘버 검증
    static validateLottoNumbers(arr) {
        ValidationUtils.isLottoLength(arr.length);
        ValidationUtils.isUniqueElements(arr);
        for(let i=0; i<6; i++) {
            const LOTTO_NUMBER = Number(arr[i]);
            ValidationUtils.isNotPositiveInteger(LOTTO_NUMBER);
            ValidationUtils.inLottoNumberRange(LOTTO_NUMBER); 
        }
    }
}
export default Validation;