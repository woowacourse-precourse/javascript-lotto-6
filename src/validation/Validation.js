import { MissionUtils } from '@woowacourse/mission-utils';
import ValidationUtils from './ValidationUtils.js';
class Validation {
    static validatepurchaseInput(input) {
        ValidationUtils.isemptyInput(input);
        ValidationUtils.isNotPositiveInteger(input);
        ValidationUtils.isNotDivisible(input);
    }
}
export default Validation;