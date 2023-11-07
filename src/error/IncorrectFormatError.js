import { ErrorMessage } from "../utils/message.js";
import BasicError from "./BasicError.js";

// 숫자가 잘못된 형식일 경우
class IncorrectFormatError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectFormat());
  }
}

export default IncorrectFormatError;
