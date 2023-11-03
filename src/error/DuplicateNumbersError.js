import { ErrorMessage } from "../utils/message.js";
import BasicError from "./BasicError.js";

class DuplicateNumbersError extends BasicError {
  constructor() {
    super(ErrorMessage.duplicateNumbers());
  }
}

export default DuplicateNumbersError;
