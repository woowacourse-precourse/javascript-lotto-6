import { Validator } from "./validator";

export class InputValidator{
    /**
     * 가격 유효성 검사 함수
     * @param {number} price 
     */
    static validPrice(price){
        Validator.validNumber(price);
        Validator.validMultipleOf1000(price);
    }
    /**
     * 당첨번호 유효성 검사 함수
     * @param {number} numbers 
     */
    static validWinningNumbers(numbers){
        Validator.validNumbers(numbers);
        Validator.validDuplicate(numbers);
        Validator.validListNumberRange(numbers);
    }
    /**
     * 보너스 번호 유효성 검사 함수
     * @param {number} bonusNumber 
     */
    static validBonusNumber(bonusNumber){
        Validator.validNumber(bonusNumber);
        Validator.validNumberRange(bonusNumber);
    }
}