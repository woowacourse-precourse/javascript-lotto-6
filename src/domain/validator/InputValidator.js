import ErrorMessage from "../errors/ErrorMessage.js"
import ERROR from "../../constants/error.js"

function validateNumber(input) {
  if (isNaN(input)) {
    throw new ErrorMessage(ERROR.number.notNumber);
  }
}




// const ValidationTestSet = {
  
// }

export { validateNumber };

// const InputValidator = {

// }

// export default InputValidator;
