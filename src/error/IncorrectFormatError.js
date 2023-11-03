import { ErrorMessage } from "../utils/message.js";
import BasicError from "./BasicError.js";

class IncorrectFormatError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectFormat());
  }
}

export default IncorrectFormatError;
