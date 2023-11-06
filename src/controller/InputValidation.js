import { INPUT_ERROR_MESSAGE } from "../constants/ErrorMessages.js";
import { LengthError } from "../error/InputErrors.js";

   const InputValidation = {
    
    isNumber : function(input) {
      const isNotNumber =  isNaN(input)
      if (isNotNumber) throw new TypeError(INPUT_ERROR_MESSAGE.lottoPriceFormat);
    },
    isNotNumberArray: function(input) {
      const isNotLengthSix = input.length !== 6;
      const isNotNumberArray = input.every((element) => typeof element === 'number');
    
      if (isNotLengthSix) throw new LengthError(INPUT_ERROR_MESSAGE.winningNumberLength);
      if (isNotNumberArray) throw new TypeError(INPUT_ERROR_MESSAGE.winningNumberFormat);
    }
  }

  
  export default InputValidation;

