import { INPUT_ERROR_MESSAGE } from "../constants/ErrorMessages.js";
import { bonusError, LengthError, PriceError } from "../error/InputErrors.js";

   const InputValidation = {

    isPrice : function(input) {
      const isNotNumber =  isNaN(input)
      const isNotCorrectPrice = input % 1000 !== 0
      if (isNotNumber || isNotCorrectPrice)   throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    },
    isBonus : function(input) {
      const isNotNumber =  isNaN(input)
      if (isNotNumber) throw new bonusError(INPUT_ERROR_MESSAGE.bonusNumberFormat);
    },
    isWinningArray: function(input) {
      const isNotLengthSix = input.length !== 6;
      const isNotNumberArray = input.some((element) => isNaN(element));
    
      if (isNotLengthSix) throw new LengthError(INPUT_ERROR_MESSAGE.winningNumberLength);
      if (isNotNumberArray) throw new TypeError(INPUT_ERROR_MESSAGE.winningNumberFormat);
    }
  }

  
  export default InputValidation;

